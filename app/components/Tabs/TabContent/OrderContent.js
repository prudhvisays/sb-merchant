import React from 'react';
import AccordStyle from './AccordStyle';
import './Accord.css';

export default class OrderContent extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
    }
    render () {
        const { data } = this.props;
        return (
            <div className="row">
                <div className="col-4">
                    <div>{data.title}</div>
                </div>
                <div className="col-6"></div>
            </div>
        );
    }
}
