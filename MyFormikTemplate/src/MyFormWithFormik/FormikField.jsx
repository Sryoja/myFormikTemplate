import React from 'react';
import InputType from "./fieldTypes/InputType";
import TextareaType from "./fieldTypes/TextareaType";
import SelectType from "./fieldTypes/SelectType";
import RadioType from "./fieldTypes/RadioType";
import CheckboxType from "./fieldTypes/CheckboxType";
import DatePicker from "./fieldTypes/DatePickerType";

function FormikField(props) {

    const {fieldType, ...rest} = props

    switch (fieldType) {
        case "input": return <InputType {...rest}/>
        case "textarea": return <TextareaType {...rest}/>
        case "select": return <SelectType {...rest}/>
        case "radio": return <RadioType {...rest}/>
        case "checkbox": return <CheckboxType {...rest}/>
        case "date": return <DatePicker {...rest}/>
        default: return null;
    }
}

export default FormikField;