import React from 'react';
import styles from "./fieldTypes.module.css";
import {ErrorMessage, Field} from "formik";

const CheckboxType = (props) => {
    const {label, name, options, ...rest} = props
    return (
        <div className={styles.formField}>
            <label className={styles.titleLabel}>{label}</label>
            <Field
                as="radio"
                id={name}
                name={name}
                {...rest}
                className={styles.textInput}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <label className={styles.radioLabel}>{option.key}
                                        <input
                                            type="checkbox"
                                            id={option.value}
                                            {...field}
                                            value={option.value} //у field есть свое value, но это общее value всего <Field/>, поэтому важно его следом переопределить на специфичное для каждого радио инпута
                                            checked={field.value.includes(option.value)}
                                        />
                                    </label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component="div" className={styles.error}/>
        </div>
    );
};

export default CheckboxType;