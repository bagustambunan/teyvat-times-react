import React from 'react';
import Mora from '../../Mora';
import LinkIcon from '../../LinkIcon';
import { ParseCurrency } from '../../../helpers/Parser';

export default function SubscriptionItem({ subscription }) {
  return (
    <div className="col-12 col-md-3">
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
                    <Mora amount={subscription.moraAmount} />
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
