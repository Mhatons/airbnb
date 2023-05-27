import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Userpool from "../../Userpool";
import logo from "../../images/logo.svg";
import authImg from "../../images/login-img.svg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import ReactFlagsSelect from "react-flags-select";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormTemplates from "../Layout/FormTemplates";
import Input from "../Layout/inputs/Input";
import Button from "../Layout/buttons/Button";

const Register = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    phone: ""
  })
  const [formValid, setFormValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const isAnyValueEmpty = Object.values(values).some(value => value === "");

    if (isAnyValueEmpty) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [values]);

  function handleSubmit() {
    console.log(values)
  }

  return (
    <FormTemplates
      title="Register account"
    >
      <form onSubmit={handleSubmit} className=" mt-6">
        <Input
          title="First name"
          type="text"
          text="first name"
          value={values.firstName}
          fn={(e: any) => setValues({ ...values, firstName: e.target.value })}
          err=""
        />

        <Input
          title="Last name"
          type="text"
          text="last name"
          value={values.lastName}
          fn={(e: any) => setValues({ ...values, lastName: e.target.value })}
          err=""
        />

        <div className="mt-5">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-black-soft"
          >
            Country of Residence
          </label>
          <ReactFlagsSelect
            selected={values.country}
            onSelect={(code) => setValues({ ...values, country: code })}
            searchable
            selectButtonClassName="search-input"
          />
        </div>

        <Input
          title="Email"
          type="email"
          text="email address"
          value={values.email}
          fn={(e: any) => setValues({ ...values, email: e.target.value })}
          err=""
        />

        <Input
          title="Mobile number"
          type="number"
          text="phone number"
          value={values.phone}
          fn={(e: any) => setValues({ ...values, phone: e.target.value })}
          err={""}
        />

        <div className="mt-5">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-black-soft mb-2"
          >
            Password
          </label>

          <div
            className="flex mt-2 border border-1 border-slate-600 rounded-md justify-between pr-3 py-1 bg-white">
            <input
              className=" w-[90%] h-9 border-none outline-none"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              placeholder="Password (min of 8 characters)"
              required
            />
            <button
              type="button"
              onClick={toggleShowPassword}
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5 text-gray-700" />
              ) : (
                <EyeIcon className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-7">
          <Button
            fn={null}
            text="Log in"
            styles={` w-full py-2 rounded-md text-[14px] font-semibold ${formValid ? "bg-orange-300" : "bg-orange-100"}`}
            disabled={!formValid}

          />
        </div>

        <div className="mt-9 text-center">
          <p className="text-black-soft text-sm ">
            Returning user?{" "}
            <Link
              to="/auth/login"
              className="underline underline-offset-2"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </FormTemplates>
  );
};

export default Register;
