import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const {login,loading} = useLogin()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await login(username,password)

    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="   p-6 w-full bg-gray-400 rounded-lg bg-clip-padding 
            backdrop-filter backdrop-blur-lg bg-opacity-0 border">
                <h className="text-3xl font-semibold text-center text-gray-300">
                    Login <span className="  text-gray-100 text-3xl font-semibold ">Famchat</span>
                </h>
                <form action="" onSubmit={handleSubmit}>
                    <div >
                        <label htmlFor="username" className="label p-2">
                            <span className="text-base  text-gray-100 label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username " className="w-full input input-bordered h-10" 
                         id="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <div >
                        <label htmlFor="username" className="label p-2">
                            <span className="text-base  text-gray-100 label-text">Password</span>
                        </label>
                        <input type="passwors" placeholder="Enter your Password " className="w-full input input-borderd h-10"  id="username"
                         value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <Link to='/signup' className="text-sm  text-gray-100 hover:underline hover:text-blue-600 mt-2 inline-block">
                        Dont have an account?
                    </Link>
                 <div>
                    <button className="btn btn-block btn-sm mt-2" disabled={loading}>
                        {
                            loading ? <span className="loading loading-spinner"></span> :"Login"
                        }
                    </button>
                 </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
