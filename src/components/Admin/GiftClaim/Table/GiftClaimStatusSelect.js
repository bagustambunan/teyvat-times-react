import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { apiUrl } from '../../../../helpers/values';
import { selectToken } from '../../../../store/tokenSlice';

export default function GiftClaimStatusSelect({
  showDefault = true,
  value,
  handleChange,
}) {
  const [statuses, setStatuses] = useState([]);
  const token = useSelector(selectToken);
  const fetchStatuses = () => {
    fetch(`${apiUrl}/gift-claim-statuses`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 200) {
          setStatuses(res.data);
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
    fetchStatuses();
  }, []);

  return (
    <select
      className="form-select"
      name="status"
      value={value}
      onChange={(e) => {
        handleChange(e);
      }}
      required
    >
      {showDefault ? (
        <option value="0">All statuses</option>
      ) : (
        <option value="0">-- Select status --</option>
      )}
      {statuses.map((status) => (
        <option key={status.giftClaimStatusID} value={status.giftClaimStatusID}>
          {status.name}
        </option>
      ))}
    </select>
  );
}
