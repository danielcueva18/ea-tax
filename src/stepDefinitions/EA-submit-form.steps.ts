import { assert } from 'chai';
import { binding, given, when, then } from 'cucumber-tsflow';
import submitForm from '../pages/EA-submit-form';

@binding()
export class HomepageSearchSteps {
    @given(/^I am on the contact page$/)
    public async givenOnContactPage() {
        submitForm.open();
        const title = browser.getTitle();

        assert.equal(title, 'Contact | EA Tax Resolutions');
    }

    @when(/^I enter "([^"]*)" into the first name field$/)
    public whenIEnterFirstNameText(arg1) {
        submitForm.enterFirstName(arg1);
    }

    @when(/^I enter "([^"]*)" into the last name field$/)
    public whenIEnterLastNameText(arg1) {
        submitForm.enterLastName(arg1);
    }

    @when(/^I enter "([^"]*)" into the email field$/)
    public whenIEnterEmailText(arg1) {
        submitForm.enterEmail(arg1);
    }

    @when(/^I enter "([^"]*)" into the phone number field$/)
    public whenIEnterPhoneNumber(arg1) {
        submitForm.enterPhone(arg1);
    }

    @when(/^I enter "([^"]*)" into the comments field$/)
    public whenIEnterCommentsText(arg1) {
        submitForm.enterComment(arg1);
    }
}
