import React from "react";
import Layout from "../Components/Layout";
import Banner from "../Components/Banner";
import Features from "../Components/Features";

function Home() {
  return (
    <Layout>
      <main>
        <Banner />
        <Features />
      </main>
    </Layout>
  );
}

export default Home;
