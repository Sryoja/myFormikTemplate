import React from 'react';
import styles from "./myFormikStyles.module.css"
import {Formik, Form} from "formik"
import * as Yup from "yup"
import FormikField from "./FormikField";

const MyFormWithFormik = () => {
const dropdownOptions = [
    {key: "select an option", value: ""},
    {key: "key for option 1", value: "option 1"},
    {key: "key for option 2", value: "option 2"},
    {key: "key for option 3", value: "option 3"}
]
    const radioOptions = [
    {key: "radio option 1", value: "radio option 1"},
    {key: "radio option 2", value: "radio option 2"},
    {key: "radio option 3", value: "radio option 3"}
]
    const checkboxOptions = [
    {key: "checkbox option 1", value: "check option 1"},
    {key: "checkbox option 2", value: "check option 2"},
    {key: "checkbox option 3", value: "check option 3"}
]
    const initialValues = {
        name: "",
        email: "",
        description: "",
        selectedOption: "",
        radioOption: "",
        checkboxOption: ["check option 2"],
        datePicker: new Date()
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("Enter your name"),
        email: Yup.string().email("email is invalid").required("Email is required"),
        description: Yup.string().max(10, "Maximum length is 10 characters"),
        selectedOption: Yup.string().required( "Select an option"),
        radioOption: Yup.string().required( "Pick any option"),
        checkboxOption: Yup.array().min(1, "You should check something"),
        datePicker: Yup.date().required("Choose a date").nullable()
    })

    const onSubmit = (values, onSubmitProps) => {

        onSubmitProps.setSubmitting(true)
        setTimeout(() => {
            console.log(values)
            onSubmitProps.resetForm()
            onSubmitProps.setSubmitting(false)
        }, 2000)

    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return <Form className={styles.myFormikForm}>
                        <FormikField fieldType="input" name="name" label="name" type="text"/>
                        <FormikField fieldType="input" name="email" label="email" type="email"/>
                        <FormikField fieldType="textarea" name="description" label="description"/>
                        <FormikField fieldType="select" name="selectedOption" label="select an option" options={dropdownOptions}/>
                        <FormikField fieldType="radio" name="radioOption" label="Pick any option:" options={radioOptions}/>
                        <FormikField fieldType="checkbox" name="checkboxOption" label="Check something:" options={checkboxOptions}/>
                        <FormikField fieldType="date" name="datePicker" label="Choose a date:" />
                        <button
                            className={styles.myFormikButton}
                            disabled={!formik.isValid || formik.isSubmitting}
                        >Send</button>
                    </Form>
                }
            }
        </Formik>
    );
};

export default MyFormWithFormik;