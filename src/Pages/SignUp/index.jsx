import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { userService } from "../../Services";
import { signupUserSchema } from "../../Services/user";
import Header from "../../Components/Header/index";
import Footer from "../../Components/Footer/index";
import PreloadingPage from "../../Components/PreloadingPage/index";
import PageBanner from "../../Components/PageBanner/index";

const SignUp = () => {
  // Loading page
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);
  // End of loading page

  const _handleSubmit = (values) => {
    userService
      .signUp(values)
      .then((res) => {
        console.log(res);
        alert("Sign Up Successfully! Please login to start browsing courses.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <Header />
          <PageBanner title="Sign Up" />
          <div className="w-50 mx-auto">
            <h1 className="display-4 text-center">Create New User Account</h1>
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                email: "",
                maNhom: "GP01",
              }}
              validationSchema={signupUserSchema}
              onSubmit={_handleSubmit}
              render={(formikProps) => (
                <Form>
                  <div className="form-group">
                    <label>Username: </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="taiKhoan"
                      onChange={formikProps.handleChange}
                    ></Field>
                    <ErrorMessage name="taiKhoan">
                      {(msg) => <div className="alert alert-dander">{msg}</div>}
                    </ErrorMessage>
                  </div>
                  <div className="form-group">
                    <label>Password: </label>
                    <Field
                      type="password"
                      className="form-control"
                      name="matKhau"
                      onChange={formikProps.handleChange}
                    ></Field>
                    <ErrorMessage name="matKhau" />
                  </div>
                  <div className="form-group">
                    <label>Full name: </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="hoTen"
                      onChange={formikProps.handleChange}
                    ></Field>
                    <ErrorMessage name="hoTen" />
                  </div>
                  <div className="form-group">
                    <label>Email: </label>
                    <Field
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={formikProps.handleChange}
                    ></Field>
                    <ErrorMessage name="email" />
                  </div>
                  <div className="form-group">
                    <label>Phone number: </label>
                    <Field
                      type="text"
                      className="form-control"
                      name="soDT"
                      onChange={formikProps.handleChange}
                    ></Field>
                    <ErrorMessage name="soDT" />
                  </div>
                  <div className="form-group">
                    <label>Group ID: </label>
                    <Field
                      component="select"
                      className="form-control"
                      name="maNhom"
                      onChange={formikProps.handleChange}
                    >
                      <option>GP01</option>
                      <option>GP02</option>
                      <option>GP03</option>
                      <option>GP04</option>
                      <option>GP05</option>
                      <option>GP06</option>
                      <option>GP07</option>
                      <option>GP08</option>
                      <option>GP09</option>
                      <option>GP10</option>
                    </Field>
                    <div className="text-center">
                      <button className="sign-up__button btn-secondary">
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default SignUp;
