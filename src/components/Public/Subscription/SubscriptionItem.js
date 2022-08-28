import React from "react";
import Mora from "../../../components/Mora";
import LinkIcon from "../../../components/LinkIcon";
import ParseCurrency from "../../../helpers/Parser"

export default function SubscriptionItem({ subscription }) {
  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title my-3 text-center">{subscription.name}</h5>

          <div className="my-5">
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Duration</th>
                  <td>1 month</td>
                </tr>
                <tr>
                  <th scope="row">Mora</th>
                  <td>
                    <Mora amount={subscription.coinsAmount} />
                  </td>
                </tr>
                <tr>
                  <th scope="row">Price</th>
                  <td>{ParseCurrency(subscription.price)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <LinkIcon link={`/purchase/${subscription.subscriptionID}`} text="Buy" icon="bi-cart" />
          </div>
        </div>
      </div>
    </div>
  );
}
