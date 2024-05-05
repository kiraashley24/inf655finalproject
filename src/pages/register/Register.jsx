import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import React from 'react'

const Register = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;
  
    // navigate
    const navigate = useNavigate();
  
    // User Register State
    const [userRegister, setUserRegister] = useState({
      username: "",
      email: "",
      password: "",
      user: "customer",
    });

    const userRegisterFunction = async () => {
        // validation
        if (
          userRegister.username === "" ||
          userRegister.email === "" ||
          userRegister.password === ""
        ) {
          toast.error("All Fields are required");
        }
    
        setLoading(true);
        try {
          // create user object
          const user = {
            username: userRegister.username,
            email: userRegister.email,
            password: userRegister.password, // Make sure to hash the password before saving
            user: userRegister.user,
            time: Date.now(),
            date: new Date().toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            }),
          };
           // Send a POST request to your back-end server
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(response.body);

      if (!response.ok) {
        throw new Error("Response is not OK");
      }

      const data = await response.json();

      setUserRegister({
        username: "",
        email: "",
        password: "",
      });

      toast.success("Register Successfully");

      setLoading(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Login Form  */}
      <div className="login_Form bg-pink-50 px-1 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">
        {/* Top Heading  */}
        <div className="mb-5">
          <h2 className="text-center text-2xl font-bold text-pink-500 ">
            Register
          </h2>
        </div>

        {/* Input One  */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Full username"
            value={userRegister.username} // Add this line
            onChange={(e) =>
              setUserRegister({ ...userRegister, username: e.target.value })
            } // And this line
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Input Two  */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email Address"
            value={userRegister.email} // Add this line
            onChange={(e) =>
              setUserRegister({ ...userRegister, email: e.target.value })
            } // And this line
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Input Three  */}
        <div className="mb-5">
          <input
            type="password"
            placeholder="Password"
            value={userRegister.password} // Add this line
            onChange={(e) =>
              setUserRegister({ ...userRegister, password: e.target.value })
            } // And this line
            className="bg-pink-50 border border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-200"
          />
        </div>

        {/* Register Button  */}
        {/* Register Button  */}
        <div className="mb-5">
          <button
            type="button"
            onClick={userRegisterFunction} // Add this line
            className="bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md "
          >
            Register
          </button>
        </div>

        <div>
          <h2 className="text-black">
            Have an account{" "}
            <Link className=" text-pink-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
