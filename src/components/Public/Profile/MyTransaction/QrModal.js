import { QRCodeSVG } from "qrcode.react";
import React from "react";
import { baseUrl } from "../../../../helpers/values";
import LinkIcon from "../../../LinkIcon";

export default function QrModal({ transaction }) {
  const link = `${baseUrl}/payment/${transaction.transactionID}`;
  return (
    <>
      <div
        className="modal fade"
        id="qrModal"
        tabindex="-1"
        aria-labelledby="qrModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="qrModalLabel">
                Payment
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="d-flex align-items-center justify-content-center flex-column gap-3">
                <div>
                  <QRCodeSVG value={link} size="200" />
                </div>
                <div>
                  <a href={link} target="_blank">
                    Or click here
                  </a>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
