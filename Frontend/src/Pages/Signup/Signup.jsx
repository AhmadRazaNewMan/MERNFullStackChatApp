import React from "react";
import GenderCheck from "./GenderCheck";

function Signup() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className="   p-6 w-full bg-gray-400 rounded-lg bg-clip-padding 
    backdrop-filter backdrop-blur-lg bg-opacity-0 border"
      >
        <h className="text-3xl font-semibold text-center text-gray-300">
          Signup to <span className=" text-violet-300 ">Famchat</span>
        </h>
        <form action="">
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base  text-gray-300 label-text">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="John Doe "
              className="w-full input input-borderd h-10"
              id="username"
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base  text-gray-300 label-text">
                User Name
              </span>
            </label>
            <input
              type="text"
              placeholder="johndoe@ "
              className="w-full input input-borderd h-10"
              id="username"
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base  text-gray-300 label-text">
                Password
              </span>
            </label>
            <input
              type="passwors"
              placeholder="Enter your Password .."
              className="w-full input input-borderd h-10"
              id="username"
            />
          </div>
          <div>
            <label htmlFor="username" className="label p-2">
              <span className="text-base text-gray-300 label-text">
                Confirm Password
              </span>
            </label>
            <input
              type="passwors"
              placeholder="Confirm Your password here.... "
              className="w-full input input-borderd h-10"
              id="username"
            />
          </div>

          <GenderCheck />

          <a
            href="#"
            className="text-sm  text-gray-100 hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account? Log in.
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
