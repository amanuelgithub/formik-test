import React from "react";
import { Formik } from 'formik'
import { TextField } from "@mui/material";

const App: React.FC = () => {
  return <div className="App">
    <Formik initialValues={{firstName:'Amanuel'}} onSubmit={(data) => {console.log(data)}}  >
      {
        ({values, handleChange, handleBlur, handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <TextField name="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
          </form>
        )
      }
    </Formik>
  </div>;
};

export default App;
