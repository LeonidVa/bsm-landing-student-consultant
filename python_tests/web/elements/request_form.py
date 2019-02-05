import logging
from time import sleep

import allure

from web.web_element import WebDriverElement


class RequestForm:

    def __init__(self, form: WebDriverElement):
        self.form = form

    def modal_title(self) -> WebDriverElement:
        return self.form.find_by_css(".block-form__message .block-form__title")

    def modal_text(self) -> WebDriverElement:
        return self.form.find_by_css(".block-form__message p")

    def modal_image(self) -> WebDriverElement:
        return self.form.find_by_css(".block-form__message img")

    def modal_close(self) -> WebDriverElement:
        return self.form.find_by_xpath(".//*[@name=\"close\"]")

    @allure.step("Ждем появления модального окна")
    def wait_modal_is_visible(self, timeout=10):
        logging.info("Waiting for success modal is displayed")
        is_visible = False
        for _ in range(timeout):
            is_visible = self.modal_title().visible
            if is_visible:
                break
            sleep(1)
        logging.info("Success modal is displayed: %s", is_visible)
        return is_visible

    @allure.step("Закрываем модальное окно")
    def close_modal(self):
        logging.info("Closing modal window")
        self.modal_close().scroll_with_offset(-80)
        self.modal_close().click()

    def form_title(self) -> WebDriverElement:
        return self.form.find_by_css(".block-form__form .block-form__title")

    def name_field(self) -> WebDriverElement:
        return self.form.find_by_xpath(".//input[@name=\"name\"]")

    def phone_field(self) -> WebDriverElement:
        return self.form.find_by_xpath(".//input[@name=\"phone\"]")

    def email_field(self) -> WebDriverElement:
        return self.form.find_by_xpath(".//input[@name=\"email\"]")

    def theme_field(self) -> WebDriverElement:
        return self.form.find_by_xpath(".//input[@name=\"theme\"]")

    def worktype_field(self) -> WebDriverElement:
        return self.form.find_by_css(".Dropdown-root")

    def worktype_options(self) -> WebDriverElement:
        return self.form.find_by_css(".Dropdown-option")

    def discipline_field(self) -> WebDriverElement:
        return self.form.find_by_xpath(".//input[@name=\"discipline\"]")

    def deadline_field(self) -> WebDriverElement:
        return self.form.find_by_css(".DayPickerInput input")

    def size_field(self) -> WebDriverElement:
        return self.form.find_by_xpath(".//input[@name=\"size\"]")

    def comment_field(self) -> WebDriverElement:
        return self.form.find_by_xpath(".//textarea[@id=\"comment\"]")

    def file_field(self) -> WebDriverElement:
        return self.form.find_by_css(".dropzone input")

    def more_info(self) -> WebDriverElement:
        return self.form.find_by_css(".block-form__more-info")

    def recaptcha(self) -> WebDriverElement:
        return self.form.find_by_css("#captcha")

    def agreement(self) -> WebDriverElement:
        return self.form.find_by_css(".block-form__agree")

    def submit_button(self) -> WebDriverElement:
        return self.form.find_by_css(".block-form__btn")

    def click_submit(self):
        logging.info("Submitting form")
        self.submit_button().click()

    def select_worktype(self, _id):
        logging.info("Selecting worktype %s", _id)
        if _id is not None:
            self.worktype_field().click()
            self.worktype_options()[_id].click()

    @allure.step("Заполняем форму только обязательными полями")
    def submit_minimal_form(self, name="TEST-AUTO", phone=None):
        logging.info(f"Submitting minimal form with: "
                     f"name: {name}, phone: {phone}")
        self.name_field().fill(name)
        self.phone_field().fill(phone)
        self.recaptcha().click()
        self.click_submit()
        self.wait_modal_is_visible()

    @allure.step("Заполняем всю форму")
    def submit_full_form(
            self, name="TEST-AUTO", phone="", email="", theme="",
            worktype=None, discipline="", deadline="", size="", comment="",
            file_path=""
    ):
        logging.info("Submitting minimal form with: "
                     "name: %s, phone: %s, email: %s, theme: %s, worktype: %s "
                     "discipline: %s, deadline: %s, size: %s, comment: %s "
                     "file_path: %s", name, phone, email, theme, worktype,
                     discipline, deadline, size, comment, file_path)
        self.name_field().fill(name)
        self.phone_field().fill(phone)
        self.more_info().click()
        self.email_field().fill(email)
        self.theme_field().fill(theme)
        self.select_worktype(worktype)
        self.discipline_field().fill(discipline)
        self.deadline_field().fill(deadline)
        self.size_field().fill(size)
        self.comment_field().fill(comment)
        self.file_field().fill(file_path)
        self.recaptcha().click()
        self.click_submit()
        self.wait_modal_is_visible()
