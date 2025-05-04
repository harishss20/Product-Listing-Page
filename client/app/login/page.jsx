"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { getLogin } from "../../API/LoginAPI.js";
import { ToastContainer, toast } from "react-toastify";
function LoginPage() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await getLogin(user, password);
    if (token) {
      router.replace("/");
      toast.success("Login is success");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center flex-col text-black">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-4 w-80 border rounded"
      >
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="px-2 py-1 mt-1 border-2 rounded"
          onChange={(e) => setUser(e.target.value)}
        />

        <label htmlFor="password" className="pt-4">
          Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="px-2 py-1 mt-1 border-2 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="mt-6 bg-gray-800 text-white py-2 rounded hover:bg-gray-600"
        >
          Login In
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
