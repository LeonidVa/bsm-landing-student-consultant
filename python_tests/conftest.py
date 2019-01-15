import logging
from time import sleep, time

import pytest
from faker import Faker
import requests
from splinter import Browser
from webdriver_manager.chrome import ChromeDriverManager

from api.besmarter import BeSmarter
from web.besmarter import BeSmarterWeb
from web.web_element import WebDriverElement

logging.basicConfig(level=logging.INFO)


def pytest_addoption(parser):
    parser.addoption(
        "--host", action="store", default="https://besmarter.ru",
        help="Host with schema for tests"
    )
    parser.addoption(
        "--verify-host", action="store",
        help="Host to be verified (used for CI)"
    )
    parser.addoption(
        "--selenium-host", action="store", help="Remote Selenium host"
    )


def check_available(url, timeout=60):
    is_enabled = False
    until = time() + timeout
    logging.info("Waiting for server to be available")
    while time() < until:
        logging.info(f"Waiting for {int(until - time())} seconds")
        try:
            status = requests.get(url).status_code
        except Exception:
            status = 0
        is_enabled = status == 200
        if is_enabled:
            logging.info("We received 200 response "
                         "- server is now started up")
            break
        sleep(1)
    if not is_enabled:
        raise Exception("Server is not available after 60 seconds.")


@pytest.fixture(scope="session")
def faker():
    return Faker(locale="ru_RU")


@pytest.fixture(scope="session")
def host(request):
    host = request.config.getoption("--host")
    verify_host = request.config.getoption("--verify-host")
    logging.info("Host for tests: %s", host)
    if verify_host:
        check_available(verify_host)
    else:
        check_available(host)
    return host


@pytest.fixture(scope="session")
def selenium_host(request):
    host = request.config.getoption("--selenium-host")
    if host:
        logging.info("Host for selenium: %s", host)
        check_available(host + "/status")
    else:
        logging.info("No host for selenium is provided. "
                     "Using local web driver")
    return host


@pytest.fixture(scope="session")
def api(host):
    requests_log = logging.getLogger("urllib3")
    requests_log.setLevel(logging.DEBUG)
    requests_log.propagate = True
    return BeSmarter(host)


@pytest.fixture(scope="session")
def web(host, selenium_host):
    if selenium_host:
        params = {
            "driver_name": 'remote',
            "url": selenium_host,
            "browser": "chrome",
        }
    else:
        params = {
            "driver_name": "chrome",
            "executable_path": ChromeDriverManager().install()
        }
    browser = Browser(**params)
    browser.element_class = WebDriverElement
    browser.wait_time = 10
    yield BeSmarterWeb(host, browser)
    browser.quit()
