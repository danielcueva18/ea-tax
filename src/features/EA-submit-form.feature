Feature: Submitting lead form

    As a user on the contact us page
    I want to submit my contact information
    Because I want to be contacted

    Background:

        Given I am on the contact page

    Scenario: Performing a lead form submittal
        When I enter "Daniel" into the first name field
        When I enter "Cueva" into the last name field
        When I enter "cuevadaniel1@gmail.com" into the email field
        When I enter "8054283110" into the phone number field
        When I enter "I need help with my taxes!" into the comments field
