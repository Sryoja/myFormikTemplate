import React from 'react';
import styles from "./fieldTypes.module.css";
import {ErrorMessage, Field} from "formik";

const TextareaType = (props) => {
    const {label, name, ...rest} = props
    return (
        <div className={styles.formField}>
            <label htmlFor={name} className={styles.titleLabel}>{label}</label>
            <Field as="textarea" className={styles.textInput} id={name} name={name} {...rest} rows="5"/>
            <ErrorMessage name={name} component="div" className={styles.error}/>
        </div>
    );
};

export default TextareaType;