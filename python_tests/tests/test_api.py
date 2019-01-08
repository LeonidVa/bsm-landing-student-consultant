import logging

import allure
import pytest


@allure.story("Отправка формы для запроса")
class TestForm:

    @allure.title("Отправка формы со всеми заполненными полями")
    @pytest.mark.api
    def test_all_data_filled(self, api, faker):
        data = {}
        for key in api.FORM_PARAMS:
            data[key] = faker.word()

        logging.info("Test data created: %s", data)

        res = api.post_make_request_form(**data)
        assert 200 == res.status_code
        json = res.json()
        assert not json["error"]
        assert json.get("id")
        assert "заявка успешно отправлена" == json.get("msg")

    @allure.title("Отправка формы со всеми пустыми полями")
    @pytest.mark.api
    def test_no_data_filled(self, api):
        res = api.post_make_request_form(brand=None, source=None)
        assert 200 == res.status_code
        json = res.json()
        assert not json["error"]
        assert json.get("id")
        assert "заявка успешно отправлена" == json.get("msg")
