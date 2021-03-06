import React from 'react';
import OrderContentStyle from './OrderContentStyle';

export default class OrderContent extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
    }
    render () {
        const { data } = this.props;
        return (
            <OrderContentStyle className="row">
                <div className="col-12">
                    <div className="d-flex flex-row">
                        <div className="col-md-4 hidden-md-down d-flex flex-column">
                            <div className="content-subtitle">Title</div>
                            <div className="content-title">{data.title}</div>
                        </div>
                        <div className="col-md-4 hidden-lg-up d-flex flex-column">
                          <div className="content-subtitle">Cost</div>
                          <div className="content-title">{data.final_cost}</div>
                        </div>
                        <div className="col-md-3 d-flex flex-column">
                            <div className="content-subtitle">Final Kms</div>
                            <div className="content-title">{data.distance_picked_to_delivery_in_meters}</div>
                        </div>
                        <div className="col-md-3 d-flex flex-column">
                            <div className="content-subtitle">Payment Type</div>
                            <div className="content-title">{data.paymentType}</div>
                        </div>
                      { data.status.toLowerCase() === 'completed' && <div className="col-md-2 d-flex flex-column">
                          <div className="content-subtitle">Cash Collected</div>
                          <div className="content-title">{data.cash_collected ? 'Yes' : 'No'}</div>
                        </div>  }
                    </div>
                    <hr/>
                    <div className="d-flex flex-row">
                        <div className="col-md-5 d-flex flex-column">
                            <div className="d-flex flex-column">
                                <div>
                                    <div className="content-subtitle">Name</div>
                                    <div className="content-title">{data.to_name}</div>
                                </div>
                                <div>
                                    <div className="content-subtitle">Phone</div>
                                    <div className="content-title">{data.to_phone}</div>
                                </div>
                                <div>
                                    <div className="content-subtitle">Email</div>
                                    <div className="content-title">{data.to_email ? data.to_email : '-'}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 d-flex flex-column">
                            <div className="content-subtitle">Address</div>
                            <div className="content-title">{data.to_address}</div>
                        </div>
                    </div>
                </div>
            </OrderContentStyle>
        );
    }
}
