import allure
import pytest

from api.besmarter import BeSmarter


@allure.story("Отправка формы для запроса")
class TestForm:

    @allure.title("Отправка формы со всеми заполненными полями")
    @pytest.mark.api
    def test_all_data_filled(self, api, faker):
        data = {}
        for key in api.FORM_PARAMS:
            data[key] = faker.word()

        res = api.post_make_request_form(**data)
        assert 200 == res.status_code
        json = res.json()
        assert not json["error"]
        assert json.get("id")
        assert "заявка успешно отправлена" == json.get("msg")

    @allure.title("Отправка формы со всеми полями, "
                  "заполненными невалидными значениями")
    @pytest.mark.api
    @pytest.mark.parametrize("value", [
        "a" * 65, "a" * 257, "a" * 513, 12412412, None]
        + list("!@#$%^&*()_+-=:;\"'<>?/., "))
    def test_all_data_filled_with_incorrect(self, api, value):
        data = {}
        for key in api.FORM_PARAMS:
            data[key] = value

        res = api.post_make_request_form(**data)
        assert 200 == res.status_code
        json = res.json()
        assert not json["error"]
        assert json.get("id")
        assert "заявка успешно отправлена" == json.get("msg")

    @allure.title("Отправка формы с невалидными данными")
    @pytest.mark.api
    @pytest.mark.parametrize("key", BeSmarter.FORM_PARAMS)
    @pytest.mark.parametrize("value", [
        "a" * 65, "a" * 257, "a" * 513, 12412412, None,
        "!@#$%^&*()_+-=:;\"'<>?/., "])
    def test_some_fields_with_incorrect_data(self, api, key, value):
        data = {key: value}
        res = api.post_make_request_form(**data)
        assert 200 == res.status_code
        json = res.json()
        assert not json["error"]
        assert json.get("id")
        assert "заявка успешно отправлена" == json.get("msg")
