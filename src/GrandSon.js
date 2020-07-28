import React, { useEffect, useState } from "react";
import axios from "axios";

const GrandSon = ({ number }) => {
  const [star, setStar] = useState(0);
  useEffect(() => {
    const load = async () => {
      const res = await axios.get("https://api.github.com/repos/zeit/next.js");
      setStar(res.data.stargazers_count);
    };
    load();
  }, []);

  return (
    <div style={{ backgroundColor: "red" }}>
      <h3>孫です</h3>
      <div>{number}</div>
      <h2>スター: {star}</h2>
    </div>
  );
};

export default GrandSon;
