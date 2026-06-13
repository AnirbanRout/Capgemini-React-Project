import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import api from "../../day1/services/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const schema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    api
      .get(`/users?email=${values.email}`)
      .then((response) => {
        const user = response.data?.[0];

        if (user && user.password === values.password) {
          login(user);

          if (user.role === "admin") {
            navigate("/admin-dashboard");
          } else {
            navigate("/student-dashboard");
          }
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Something went wrong");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="container mt-4" style={{ maxWidth: "400px" }}>
          <h3 className="mb-3">Login</h3>

          <div className="mb-3">
            <label>Email</label>
            <Field className="form-control" type="email" name="email" />
            <ErrorMessage name="email" component="p" className="text-danger" />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <Field className="form-control" type="password" name="password" />
            <ErrorMessage
              name="password"
              component="p"
              className="text-danger"
            />
          </div>

          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
