import React from 'react';
import OrderContentStyle from './OrderContentStyle';
import './Accord.css';

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
                        <div className="col-5 d-flex flex-column">
                            <div className="content-subtitle">Title</div>
                            <div className="content-title">{data.title}</div>
                        </div>
                        <div className="col-5 d-flex flex-column">
                            <div className="content-subtitle">Description</div>
                            <div className="content-title">{data.description}</div>
                        </div>
                        <div className="col-2 d-flex flex-column">
                            <div className="content-subtitle">Payment Type</div>
                            <div className="content-title">{data.paymentType}</div>
                        </div>
                    </div>
                    <hr/>
                    <div className="d-flex flex-row">
                        <div className="col-5 d-flex flex-column">
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
                        <div className="col-7 d-flex flex-column">
                            <div className="content-subtitle">Address</div>
                            <div className="content-title">{data.to_address}</div>
                        </div>
                    </div>
                </div>
            </OrderContentStyle>
        );
    }
}
