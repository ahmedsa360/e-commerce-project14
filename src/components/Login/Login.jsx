import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";

export default function Login() {
  let { userToken, setUserToken } = useContext(UserContext);

  let navigate = useNavigate();
  const [errapi, seterrapi] = useState("");
  const [isloading, setisloading] = useState(false);

  function handleRegister(formvalues) {
    setisloading(true);
    axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", formvalues)
      .then(function (res) {
        if (res.data.message == "success") {
          navigate("/")
          setisloading(false)
          localStorage.setItem("userToken" , res?.data?.token)
          setUserToken(res?.data?.token)
        }
        
      })
      .catch(function (err) {
        seterrapi(err?.response?.data?.message)(setisloading(false));
      });
  }

  let validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("invalid email format")
      .required("email is required"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        /^[A-Za-z0-8]{6,9}$/,
        "password at least is 6 characters and at most is 9 characters"
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: handleRegister,
    validationSchema,
  });

  return (
    <>
      <p className=" text-xl text-red-600 text-center">{errapi}</p>
      <h2 className=" container relative top-7 ">Login Now</h2>
      <form className="max-w-sm container mt-10" onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.email && formik.touched.email ? (
          <p className=" text-lg text-red-600">{formik.errors.email}</p>
        ) : null}

        <div className="mb-3">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.password && formik.touched.password ? (
          <p className=" text-lg text-red-600">{formik.errors.password}</p>
        ) : null}

        <button
          type="submit"
          className="text-black  hover:bg-green-600 bg-green-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center   block ms-auto "
        >
          {isloading == true ? (
            <i className="fas fa-spinner fa-spin text-lg "></i>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
}
