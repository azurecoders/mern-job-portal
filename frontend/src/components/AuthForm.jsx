import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";

const AuthForm = ({ isSignup }) => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const [validPassword, setValidPassword] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const isValidData = () => {
    return isSignup
      ? formData.name == "" ||
          formData.email == "" ||
          formData.password == "" ||
          formData.role == "" ||
          validPassword
      : formData.email == "" || formData.password == "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isSignup
        ? "http://localhost:5000/api/auth/signup"
        : "http://localhost:5000/api/auth/login";

      const payload = isSignup
        ? {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role,
          }
        : { email: formData.email, password: formData.password };
      const checkedData = isValidData();
      if (checkedData) {
        alert("Please enter the required fields with proper data.");
      }

      const apiResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await apiResponse.json();
      if (apiResponse.ok) {
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[400px] max-w-[90%] p-3 md:p-6 shadow-md flex flex-col gap-5 rounded-md"
      >
        <h2 className="font-normal text-3xl">
          {isSignup ? "Sign Up" : "Log In"}
        </h2>
        {isSignup && (
          <>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
                className="w-full p-2 border rounded-sm focus:outline-none"
              />
            </div>
            <div>
              <select
                name="role"
                id="role"
                required
                onChange={handleChange}
                className="w-full p-2 border rounded-sm focus:outline-none"
              >
                <option value="" disabled selected>
                  Select a role
                </option>
                <option value="candidate">Candidate</option>
                <option value="employer">Employer</option>
              </select>
            </div>
          </>
        )}
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
            placeholder="Email"
            className="w-full p-2 border rounded-sm focus:outline-none"
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={handleChange}
            value={formData.password}
            placeholder="Password"
            className="w-full p-2 border rounded-sm focus:outline-none"
          />
          {isSignup && (
            <div className="my-2">
              <PasswordChecklist
                rules={["minLength", "specialChar", "number", "capital"]}
                minLength={8}
                value={formData.password}
                onChange={(isValid) => setValidPassword(!isValid)}
              />
            </div>
          )}
        </div>
        <div className="text-right text-sm text-purple-600 hover:underline cursor-pointer">
          <Link to="/forgot-password">Forgot Password</Link>
        </div>
        <button
          disabled={isValidData()}
          className="disabled:opacity-75 disabled:cursor-not-allowed w-full text-center bg-purple-600 p-3 rounded-sm hover:bg-purple-500 text-white transition-all duration-500"
        >
          Submit
        </button>
        <div className="text-center text-sm text-purple-700 hover:underline">
          {isSignup ? (
            <Link to="/login">Already Have an Account? Login</Link>
          ) : (
            <Link to="/signup">Dont Have an Account? Sign Up</Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
