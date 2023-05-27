import React, { useEffect, useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Userpool from "../../Userpool";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../images/logo.svg";
import authImg from "../../images/login-img.svg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import FormTemplates from "../Layout/FormTemplates";

import ReactFlagsSelect from "react-flags-select";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Input from "../Layout/inputs/Input";
import Button from "../Layout/buttons/Button";


// interface LoginFormProps {
//   onSubmit: (email: string, password: string) => void;
// }

const Login = () => {

  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState<any>();

  const [values, setValues] = useState({
    email: "",
    password: ""
  })


  const [formValid, setFormValid] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState(false);

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
    console.log("hello")
  }

  return (
    <>
      <FormTemplates
        title="Login to your account"
      >
        <form onSubmit={handleSubmit} className=" mt-3">
          <div className="">
            <Input
              type="email"
              title="Email address"
              text="email"
              value={values.email}
              fn={(e: any) => setValues({ ...values, email: e.target.value })}
              err=""
            />
          </div>

          <div className="mt-6">
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

          {/* <div className="mt-5">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-black-soft"
            >
              Country of Residence
            </label>
            <div className="mt-2">
              <ReactFlagsSelect
                selected={country}
                onSelect={(code) => setCountry(code)}
                searchable
                selectButtonClassName="search-input"
              />
            </div>
          </div> */}

          {/* <div className="mt-5">
            <label
              htmlFor="businessName"
              className="block text-sm font-medium text-black-soft"
            >
              Phone Number
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                placeholder="Enter phone number"
                // value={setPhone}
                onChange={setPhone}
                defaultCountry="US"
              />
            </div>
          </div> */}

          {/* <div className="mt-2">
            <Link
              to="/auth/reset-password"
              className="text-[#323232d9] text-sm underline underline-offset-2"
            >
              Reset Password?
            </Link>
          </div> */}

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
              New user?{" "}
              <Link
                to="/auth/register"
                className="underline text-[14px] underline-offset-2"
              >
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </FormTemplates>
      <ToastContainer />
    </>
  );
};

export default Login;
