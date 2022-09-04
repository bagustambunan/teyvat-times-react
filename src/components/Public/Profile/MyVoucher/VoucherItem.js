import React from 'react';
import { toast } from 'react-toastify';

export default function VoucherItem({ voucher }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(voucher.voucher.code);
    toast.info('Voucher code copied to clipboard');
  };
  return (
    <div>
      <div className={`card mb-3 ${voucher.isActive() ? '' : 'voucher-non-active'}`}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://static.wikia.nocookie.net/gensin-impact/images/4/44/Item_Blessing_of_the_Welkin_Moon.png"
              className="img-fluid rounded-start"
              alt={voucher.voucher.name}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{voucher.voucher.name}</h5>
              <p className="card-text">{voucher.voucher.description}</p>
              <p className="card-text">
                <small className="text-muted">
                  Expired:
                  {voucher.getDateExpired()}
                </small>
              </p>

              {voucher.isActive() ? (
                <button
                  onClick={() => copyToClipboard()}
                  type="button"
                  className="btn btn-light border border-primary border-2"
                >
                  <i className="bi bi-clipboard text-primary me-2" />
                  {voucher.voucher.code}
                </button>
              ) : ('')}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
