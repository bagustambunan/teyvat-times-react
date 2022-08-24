import React, { useEffect, useState } from 'react'

export default function TierSelect() {
  const [tiers, setTiers] = useState([]);

  const getToken = () => localStorage.getItem("token");
  const fetchTiers = () => {
    fetch("http://localhost:8080/pub/tiers", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setTiers(res.data);
        }
        if (res.statusCode !== 200) {
          toast.error(`Error: ${res.message}`);
        }
      })
      .catch((err) => {
        toast.error(`Error: ${err.message}`);
      });
  };

  useEffect(() => {
    fetchTiers();
  }, []);

  return (
    <select className="form-select" name="tier">
      <option value="0">All tiers</option>
      {tiers.map((tier) => (
        <option key={tier.postTierID} value={tier.postTierID}>{tier.name}</option>
      ))}
    </select>
  )
}
