import * as Yup from "yup";

export const Today = new Date().toISOString().slice(0, 10);

export interface FormProps {
  firstName: string;
  lastName: string;
  address: string;
  stage: string;
  type: string;
  size: string;
  time: string;
  deadline: string;
  budget: string;
  comments: string;
}

export const INITIAL_DETAILED_CONTACT_FORM_VALUES: FormProps = {
  firstName: "",
  lastName: "",
  address: "",
  stage: "Not applicable",
  type: "Web desing",
  size: "Small change or bug fixing",
  time: "As needed",
  deadline: Today,
  budget: "Less than USD 50",
  comments: "",
};

export const BUDGETS: string[] = [
  "Less than USD 50",
  "USD 50 to 100",
  "USD 100 to 250",
  "USD 250 to 500",
  "USD 500 to 1000",
  "USD 1000 to 1500",
  "More than 1500",
];
export const TIME_AVAILABILITY: string[] = [
  "As needed",
  "Part time",
  "Full time",
];

export const PROJECT_SIZES: string[] = [
  "Small change or bug fixing",
  "Medium Size Changes",
  "Large Size Changes",
  "Custom App",
  "Other",
];

export const PROJECT_TYPES: string[] = [
  "Web desing",
  "Web development",
  "E-Commerce",
  "Other",
];

export const DEVELOPMENT_STAGE: string[] = [
  "Not applicable",
  "I have an idea",
  "I have the design",
  "I have specifications",
];

export const detailedContactFormValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(4, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(4, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  address: Yup.string().email("Invalid email!").required("Required!"),
  stage: Yup.string()
    .required("Required!")
    .oneOf(DEVELOPMENT_STAGE, "Invalid option!"),
  type: Yup.string()
    .required("Required!")
    .oneOf(PROJECT_TYPES, "Invalid option!"),
  size: Yup.string()
    .required("Required!")
    .oneOf(PROJECT_SIZES, "Invalid option!"),
  time: Yup.string()
    .required("Required!")
    .oneOf(TIME_AVAILABILITY, "Invalid option!"),
  deadline: Yup.date()
    .min(Today, "The date needs to be after today!")
    .required("Required!"),
  budget: Yup.string().required("Required!").oneOf(BUDGETS, "Invalid option!"),
  comments: Yup.string()
    .min(1, "Too Short!")
    .max(1500, "All caracters was used!")
    .required("Required"),
});

export const renderSelectOptions = (options: string[]) => {
  return options.map((option) => {
    return (
      <option key={`${option}`} value={`${option}`}>
        {option}
      </option>
    );
  });
};
