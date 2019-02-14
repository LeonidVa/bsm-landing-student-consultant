import json
import logging
import tempfile

import allure
import pytest


@allure.story("Форма заказа")
class TestForm:

    @pytest.mark.webui
    @pytest.mark.parametrize('form_id', [0, 1])
    @allure.title("Проверка наличия формы и ее базового состояния")
    def test_verify_form_present(self, web, form_id):
        web.open()
        forms = web.get_forms()
        assert 2 == len(forms)
        form = web.form(forms[form_id])
        assert form.form_title().text
        assert form.name_field().visible
        assert form.phone_field().visible
        assert form.more_info().visible
        assert not form.email_field().visible
        assert not form.theme_field().visible
        assert not form.discipline_field().visible
        assert not form.deadline_field().visible
        assert not form.size_field().visible
        assert not form.comment_field().visible
        assert "Показать все поля▾" == form.more_info().text
        assert form.recaptcha()
        assert ("Отправляя эти данные, я принимаю Политику "
                "конфиденциальности") == form.agreement().text
        assert form.submit_button().visible

    @pytest.mark.webui
    @pytest.mark.parametrize('form_id', [0, 1])
    @allure.title("Отправка формы с заполненными только обязательными полями")
    def test_submit_minimal_form(self, web, form_id):
        web.open()
        forms = web.get_forms()
        form = web.form(forms[form_id])
        form.submit_minimal_form(phone="+79012345678")
        res = web.load_log_response()
        assert not res["error"]
        assert res.get("id")
        assert "заявка успешно отправлена" == res.get("msg")
        assert form.modal_title().visible
        assert "Спасибо!" == form.modal_title().text
        assert form.modal_text().visible
        assert ("Мы получили Ваше сообщение и скоро свяжемся "
                "с Вами!") == form.modal_text().text
        assert form.modal_image().visible
        assert form.modal_close().visible
        form.close_modal()
        assert not form.modal_text().visible

    @pytest.mark.webui
    @pytest.mark.parametrize('form_id', [0, 1])
    @allure.title("Отправка формы с всеми заполненными полями")
    def test_submit_full_form(self, web, form_id, faker):
        web.open()
        forms = web.get_forms()
        form = web.form(forms[form_id])
        temp = tempfile.NamedTemporaryFile(delete=False)
        temp.close()
        form.submit_full_form(
            phone="+79012345678", email=faker.email(), theme=faker.word(),
            discipline=faker.job(), deadline="10.12.2030",
            size=faker.pyint(), comment=faker.sentence(), file_path=temp.name
        )
        res = web.load_log_response()
        assert not res["error"]
        assert res.get("id")
        assert "заявка успешно отправлена" == res.get("msg")
        assert form.modal_title().visible
        assert "Спасибо!" == form.modal_title().text
        assert form.modal_text().visible
        assert ("Мы получили Ваше сообщение и скоро свяжемся "
                "с Вами!") == form.modal_text().text
        assert form.modal_image().visible
        assert form.modal_close().visible
        form.close_modal()
        assert not form.modal_text().visible


@allure.story("Проверка доступности страниц")
class TestPages:

    @pytest.mark.webui
    @allure.title("Проверка открытия главной страницы")
    def test_verify_main_page(self, web):
        web.open()
        logging.info("Checking main page")
        assert web.page_is_ok(True), "Main page is empty"
        assert not web.status_404(), "Main page status 404"

    @pytest.mark.webui
    @allure.title("Проверка всех доступных страниц из sitemap")
    def test_verify_all_pages(self, web):
        links = web.dump_sitemap()
        assert links
        results = []
        for link in links:
            web.open(link, use_host=False)
            is_ok = web.page_is_ok()
            is_404 = web.status_404()
            results.append(dict(link=link, ok=is_ok, ko=is_404))
        bad_results = [i for i in results if not i['ok'] or i['ko']]
        assert not bad_results, (f"Some of pages are not OK, take a "
                                 f"look: {json.dumps(bad_results, indent=4)}")
