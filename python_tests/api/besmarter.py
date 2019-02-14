import logging

import allure
import requests


class BeSmarter:

    POST_MAKE_REQUEST = "/api/form_data"

    FORM_PARAMS = ["form", "phone", "email",
                   "theme", "discipline", "deadline", "size",
                   "comment", "verified"]

    def __init__(self, host):
        self.host = host
        self.s = self.session = requests.session()

    @allure.step(f"Отправка запроса на {POST_MAKE_REQUEST}")
    def post_make_request_form(self, brand="besmarter",
                               source="besmarter main",
                               name="TEST-AUTO", **kwargs):
        if not all(elem in self.FORM_PARAMS for elem in kwargs.keys()):
            logging.warning("Mismatch of keys: %s", kwargs.keys())
            raise ValueError(f"\nSupported params: {self.FORM_PARAMS}"
                             f"\nGiven:            {list(kwargs.keys())}")
        kwargs["brand"] = brand
        kwargs["source"] = source
        kwargs["name"] = name

        logging.info(f"Sending form with data: {kwargs}")
        res = self.s.post(self.host + self.POST_MAKE_REQUEST, data=kwargs)
        logging.info(f"Received response, status: {res.status_code} data: {res.json()}")
        return res
