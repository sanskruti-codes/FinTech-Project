import React, { useEffect, useState } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const token = localStorage.getItem("token");

    console.log("TOKEN:", token);

    if (!token) {

      window.location.href =
        "http://localhost:3000/login";

    } else {

      setLoading(false);

    }

  }, []);

  if (loading) {

    return <h1>Loading...</h1>;

  }

  return (

    <>

      <TopBar />

      <Dashboard />

    </>

  );

};

export default Home;