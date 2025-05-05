"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductList from "./components/ProductList";
import { ClipLoader } from "react-spinners";
import Footer from "./components/Footer";
function Page() {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (!savedToken) {
      router.replace("/login");
    } else {
      setToken(savedToken);
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ClipLoader size={50} color="#123abc" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex lg:flex-row">
        <Products />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
