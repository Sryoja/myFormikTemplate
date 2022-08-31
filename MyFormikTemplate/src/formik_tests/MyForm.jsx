import React from 'react';
import styles from "./formstyles.module.css"
// import {useFormik} from "formik_tests";
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const initialValues = {
    name: "",
    pwd: "",
    email: ""
}
const onSubmit = (values) => {
    console.log(values)
}

const validationSchema = Yup.object({
    name: Yup.string().required("required schema"),
    pwd: Yup.string().required("pwd is required"),
    email: Yup.string().email("Invalid email address").required("Required")
})


function MyForm() {


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            className={styles.formWrapper}>

            {/*<h3>Simple Form</h3>*/}

            <Form className={styles.form}>
                <div className={styles.formControl}>
                    <label htmlFor="name">Name</label>
                    <Field
                        name="name"
                        type="text"
                    />
                    <ErrorMessage component="div" className={styles.error} name="name"/>
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="pwd">Password</label>
                    <Field
                        type="text"
                        name="pwd"/>
                    <ErrorMessage component="div" className={styles.error} name="pwd"/>
                </div>

                <div className={styles.formControl}>
                    <label htmlFor="email">E-mail</label>
                    <Field
                        type="email"
                        name="email"/>
                    <ErrorMessage component="div" className={styles.error} name="email"/>
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}

export default MyForm;