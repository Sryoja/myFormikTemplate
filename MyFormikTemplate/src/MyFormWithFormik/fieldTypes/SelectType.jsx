import React from 'react';
import styles from "./fieldTypes.module.css";
import {ErrorMessage, Field} from "formik";

const SelectType = (props) => {
    const {label, name, options, ...rest} = props
    return (
        <div className={styles.formField}>
            <label htmlFor={name} className={styles.titleLabel}>{label}</label>
            <Field as="select" id={name} name={name} {...rest} className={styles.textInput} >
                {options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.key}
                        </option>
                    )
                })}
            </Field>
            <ErrorMessage name={name} component="div" className={styles.error}/>
        </div>
    );
};

export default SelectType;