import React from "react";
import { useFormik } from "formik";

function Form(props) {
  const validate = (values) => {
    const errors = {};
    if (!values.text) {
      errors.text = "Required";
    } else if (values.text.length > 15) {
      errors.text = "Must be 15 characters or less";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      text: "",
      textarea: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div
      className={`form-control ${
        formik.errors.text && "form-control--invalid"
      }`}
    >
      <form onSubmit={formik.handleSubmit} className="place-form">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          id={props.id}
          name="text"
          placeholder={props.placeholder}
          type={props.type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.text && formik.errors.text ? (
          <div>{formik.errors.text}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
