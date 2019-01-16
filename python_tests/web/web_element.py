from splinter.driver.webdriver import WebDriverElement as BaseWebDriverElement


class WebDriverElement(BaseWebDriverElement):

    def empty(self):
        super().clear()
        if self.value != "":
            self.value = "\b" * len(self.value)

    def is_enabled(self):
        return not self['disabled']

    def scroll_with_offset(self, offset):
        """
        Scroll to the current element.
        """
        self.parent.driver.execute_script(
            "arguments[0].scrollIntoView(true);"
            "window.scrollBy(0,arguments[1])", self._element, offset)
