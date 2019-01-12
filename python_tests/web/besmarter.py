import logging
import re

import allure
import requests
from splinter.driver.webdriver.chrome import WebDriver

from web.elements.request_form import RequestForm


class BeSmarterWeb:

    def __init__(self, host, browser: WebDriver):
        self.host = host
        self.b = self.browser = browser

    @allure.step("Открываем страницу {url}")
    def open(self, url="/", use_host=True):
        if use_host:
            self.b.visit(self.host + url)
        else:
            self.b.visit(url)

    @allure.step("Загружаем список форм на странице")
    def get_forms(self):
        return self.b.find_by_css(".block-form")

    @allure.step("Работаем с формой")
    def form(self, form_element) -> RequestForm:
        return RequestForm(form_element)

    @allure.step("Загружаем список всех сайтов из sitemap")
    def dump_sitemap(self):
        # res = requests.get(self.host + "/sitemap.xml")
        # f = re.findall(r"<loc>(.*)</loc>", res.text)
        # site_map = [i for i in f if i != self.host + "/"]
        self.open("/map")
        links = self.b.find_by_xpath("//div[contains(@class,'TextBlock')]//a")
        links = [el['href'] for el in links]
        return links

    @allure.step("Проверяем что не отображается страница с ошибкой")
    def status_404(self):
        old_wt = self.b.wait_time
        self.b.wait_time = 0.5
        s = self.b.find_by_xpath("//*[@class='block-form-timer__title']//span")
        logging.info(f"Checking 404 error on page")
        browser_error = self.b.find_by_css("#main-frame-error")
        logging.info(f"Checking Browser error on page: {len(browser_error)}")
        self.b.wait_time = old_wt
        if s:
            if s.text == "404" or browser_error:
                return True
        return False

    @allure.step("Проверяем что на странице есть основные элементы")
    def page_is_ok(self, main=False):
        old_wt = self.b.wait_time
        self.b.wait_time = 3
        header = self.b.find_by_css("#__next header")
        logging.info(f"Checking Header on page, count: {len(header)}")
        if main:
            body = self.b.find_by_css("#__next .wrapper.main")
        else:
            body = self.b.find_by_css("#__next .wrapper.bg")
        logging.info(f"Checking Body on page, count: {len(body)}")
        footer = self.b.find_by_css("#__next .footer")
        logging.info(f"Checking Footer on page, count: {len(footer)}")
        self.b.wait_time = old_wt
        return all((header, body, footer))
