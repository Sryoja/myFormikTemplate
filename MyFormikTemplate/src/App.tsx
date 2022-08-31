import React from 'react';
import './App.css';
import MyForm from "./formik_tests/MyForm";
import MyFormWithFormik from "./MyFormWithFormik/MyFormWithFormik";

//need to import formik_tests and yup

function App() {
  return (
    <div className="App">
        {/*<MyForm />*/}
        <MyFormWithFormik/>
    </div>
  );
}

export default App;
