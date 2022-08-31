import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./fieldTypes.module.css";
import {ErrorMessage, Field} from "formik";

const DatePickerType = (props) => {
    const {label, name, options, ...rest} = props

    return (
        <div className={styles.formField}>
            <label htmlFor={name} className={styles.titleLabel}>{label}</label>
            <Field
                name={name}
                className={styles.textInput}
            >
                {
                    ({form, field}) => {
                        const {setFieldValue} = form
                        const {value} = field
                        return <DatePicker
                            dateFormat="dd/MM/yyyy"
                            calendarStartDay={1}
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={val => setFieldValue(name, val)}
                        />
                    }
                }
            </Field>
            <ErrorMessage name={name} component="div" className={styles.error}/>
        </div>
    );
};

export default DatePickerType;