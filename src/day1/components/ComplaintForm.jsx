import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import api from "../services/api";

const ComplaintForm = ({ getRequests }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    roomNo: Yup.string().required("Room Number is required"),
    priority: Yup.string().required("Priority is required"),
  });

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        category: "",
        roomNo: "",
        priority: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);

        const newComplaint = {
          ...values,
          status: "Open",
          createdAt: new Date().toISOString(),
        };

        api
          .post("/requests", newComplaint)
          .then((res) => {
            console.log("Complaint submitted successfully", res.data);
            resetForm();
            getRequests();
          })
          .catch((err) => {
            console.error("Error submitting complaint", err);
          });
      }}
    >
      {() => (
        <Form className="card p-4 shadow">
          <h2 className="mb-4">Complaint Form</h2>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <Field
              type="text"
              name="title"
              placeholder="Title"
              className="form-control"
            />
            <ErrorMessage
              name="title"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <Field
              as="textarea"
              name="description"
              placeholder="Description"
              className="form-control"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Category</label>
            <Field as="select" name="category" className="form-select">
              <option value="">Select Category</option>
              <option value="Electrical">Electrical</option>
              <option value="Plumbing">Plumbing</option>
              <option value="Cleaning">Cleaning</option>
              <option value="Internet">Internet</option>
            </Field>
            <ErrorMessage
              name="category"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Room Number</label>
            <Field
              type="text"
              name="roomNo"
              placeholder="Room Number"
              className="form-control"
            />
            <ErrorMessage
              name="roomNo"
              component="div"
              className="text-danger"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Priority</label>
            <Field as="select" name="priority" className="form-select">
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </Field>
            <ErrorMessage
              name="priority"
              component="div"
              className="text-danger"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ComplaintForm;
