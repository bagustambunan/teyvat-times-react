import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import TierRow from './TierRow';
import { selectToken } from '../../../store/tokenSlice';

export default function TierTable() {
  const [tiers, setTiers] = useState([]);

  const token = useSelector(selectToken);
  const fetchTiers = () => {
    fetch('http://localhost:8080/pub/tiers', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
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
    <table className="table table-striped w-100">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Mora Required</th>
        </tr>
      </thead>
      <tbody>
        {tiers.map((tier, index) => (
          <TierRow key={tier.postTierID} tier={tier} i={index + 1} />
        ))}
      </tbody>
    </table>
  );
}
