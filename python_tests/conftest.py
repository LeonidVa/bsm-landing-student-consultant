import logging
from time import sleep

import pytest
from faker import Faker
import requests

from api.besmarter import BeSmarter

logging.basicConfig(level=logging.INFO)


def pytest_addoption(parser):
    parser.addoption(
        "--host", action="store", default="https://besmarter.ru",
        help="Host with schema for tests"
    )


@pytest.fixture
def faker():
    return Faker(locale="ru_RU")


@pytest.fixture(scope="session")
def host(request):
    host = request.config.getoption("--host")
    logging.info("Host for tests: %s", host)
    is_enabled = False
    logging.info("Waiting for server to be available")
    for _ in range(60):
        is_enabled = requests.get(host).status_code == 200
        if is_enabled:
            logging.info("We received 200 response "
                         "- server is now started up")
            break
        sleep(1)
    if not is_enabled:
        raise Exception("Server is not available after 60 seconds.")
    return host


@pytest.fixture
def api(host):
    requests_log = logging.getLogger("urllib3")
    requests_log.setLevel(logging.DEBUG)
    requests_log.propagate = True
    return BeSmarter(host)
