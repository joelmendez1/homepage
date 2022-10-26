import { Form, Formik } from "formik";
import emailjs from "@emailjs/browser";

import {
  BUDGETS,
  detailedContactFormValidationSchema,
  DEVELOPMENT_STAGE,
  INITIAL_DETAILED_CONTACT_FORM_VALUES,
  PROJECT_SIZES,
  PROJECT_TYPES,
  renderSelectOptions,
  TIME_AVAILABILITY,
} from "./contact-form-utils";

import { Button } from "../core-components/button";
import { FormField } from "../core-components/form-field";

import "./detailed-contact-form.scss";

export const DetailedContactForm = () => {
  const sendMail = (event: any) => {
    console.log(event);
    emailjs
      .send("service_xjv5rvh", "template_44ivu2o", event, "r3VCf_dPvKsJ-MTYg")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <Formik
      initialValues={INITIAL_DETAILED_CONTACT_FORM_VALUES}
      validationSchema={detailedContactFormValidationSchema}
      // onSubmit={(values, { resetForm }) => {
      //   console.log("submited!", values);
      //   resetForm({ values: INITIAL_DETAILED_CONTACT_FORM_VALUES });
      // }}
      onSubmit={sendMail}
    >
      {() => (
        <Form className="detailed-contact-form">
          <FormField
            label="First Name"
            name="firstName"
            labelClassName="detailed-contact-form__label"
            fieldClassName="detailed-contact-form__input"
          />

          <FormField
            label="Last Name"
            name="lastName"
            labelClassName="detailed-contact-form__label"
            fieldClassName="detailed-contact-form__input"
          />

          <FormField
            label="Email Address"
            name="address"
            labelClassName="detailed-contact-form__label"
            fieldClassName="detailed-contact-form__input"
            type="email"
          />

          <FormField
            label="What stage of development are currently in?"
            name="stage"
            labelClassName="detailed-contact-form__label"
            fieldClassName="detailed-contact-form__input"
            as="select"
          >
            {renderSelectOptions(DEVELOPMENT_STAGE)}
          </FormField>

          <FormField
            label="Project type"
            name="type"
            labelClassName="detailed-contact-form__label"
            fieldClassName="detailed-contact-form__input"
            as="select"
          >
            {renderSelectOptions(PROJECT_TYPES)}
          </FormField>

          <FormField
            label="Project Size"
            name="size"
            labelClassName="detailed-contact-form__label"
            fieldClassName="detailed-contact-form__input"
            as="select"
          >
            {renderSelectOptions(PROJECT_SIZES)}
          </FormField>

          <FormField
            label="Time availability"
            name="time"
            labelClassName="detailed-contact-form__label"
            fieldClassName="detailed-contact-form__input"
            as="select"
          >
            {renderSelectOptions(TIME_AVAILABILITY)}
          </FormField>

          <FormField
            label="Time Deadline"
            name="deadline"
            labelClassName="detailed-contact-form__label"
            fieldClassName="detailed-contact-form__input"
            type="date"
          />

          <FormField
            label="Budget"
            name="budget"
            labelClassName="detailed-contact-form__label"
            fieldClassName="detailed-contact-form__input"
            as="select"
          >
            {renderSelectOptions(BUDGETS)}
          </FormField>

          <FormField
            label="Comments"
            name="comments"
            labelClassName="detailed-contact-form__label"
            fieldClassName="detailed-contact-form__textarea"
            as="textarea"
          />

          <Button
            type="submit"
            className="detailed-contact-form__submit-button"
          >
            Send
          </Button>
        </Form>
      )}
    </Formik>
  );
};
