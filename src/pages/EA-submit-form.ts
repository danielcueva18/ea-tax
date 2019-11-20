import Page from './Page';

class SubmitForm extends Page {
    /**
     * define elements
     */
    //get usernameInput()   { return $('//*[@name="username"]'); }

    get firstNameInput() {
        return $('//*[@id="input_1_1_3"]');
    }
    get lastNameInput() {
        return $('//*[@id="input_1_1_6"]');
    }
    get emailInput() {
        return $('//*[@id="input_1_2"]');
    }
    get phoneInput() {
        return $('//*[@id="input_1_3"]');
    }
    get commentsInput() {
        return $('//*[@id="input_1_4"]');
    }
    get submitButton() {
        return $('gform_submit_button_1');
    }
    get searchInput() {
        return $('input.gLFyf');
    }
    /**
     * define or overwrite page methods
     */

    open() {
        super.open('https://eataxresolutions.com/contact'); //provide your additional URL if any. this will append to the baseUrl to form complete URL
        browser.pause(1000);
    }

    enterFirstName(item) {
        this.firstNameInput.clearValue();
        this.firstNameInput.setValue(item);
        browser.pause(1000);
    }

    enterLastName(item) {
        this.lastNameInput.clearValue();
        this.lastNameInput.setValue(item);
        browser.pause(1000);
    }

    enterEmail(item) {
        this.emailInput.clearValue();
        this.emailInput.setValue(item);
        browser.pause(1000);
    }

    enterPhone(item) {
        this.phoneInput.clearValue();
        this.phoneInput.setValue(item);
        browser.pause(1000);
    }

    enterComment(item) {
        this.commentsInput.clearValue();
        this.commentsInput.setValue(item);
        browser.pause(1000);
    }
}

export default new SubmitForm();
