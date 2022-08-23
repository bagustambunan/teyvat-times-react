import React, { useEffect, useState } from "react";
import TierRow from "./TierRow";

export default function TierTable() {
  const [tiers, setTiers] = useState([]);

  const getToken = () => localStorage.getItem("token");
  const fetchPosts = () => {
    fetch("http://localhost:8080/pub/tiers", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.error) {
          setTiers(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <table className="table table-striped w-100">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Coins Required</th>
        </tr>
      </thead>
      <tbody>
        {tiers.map((tier, index) => (
          <TierRow key={tier.tierID} tier={tier} i={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
