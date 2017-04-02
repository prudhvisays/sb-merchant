import React from 'react';

export default class DeliveryTime extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.props.setDeliveryTime(e.target.name);
        if(e.target.name === 'deliverNow') {
          const { pickup } = this.props.stateAddTask;
          this.props.pickupChange({ ...pickup, from_date: '' });
        }
    }
    render() {
        const { stateAddTask } = this.props;
        return (
            <div className="form-group">
                <label className="custom-control custom-radio">
                    <input id="radio1" name="deliverNow" type="radio" className="custom-control-input" checked={stateAddTask.deliveryTime === 'deliverNow'} onChange={this.onChange}/>
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">Delivery Now</span>
                </label>
                {/*<label className="custom-control custom-radio">*/}
                    {/*<input id="radio2" name="schedule" type="radio" className="custom-control-input" onChange={this.onChange} checked={stateAddTask.deliveryTime === 'schedule'} />*/}
                    {/*<span className="custom-control-indicator" />*/}
                    {/*<span className="custom-control-description">Schedule Order</span>*/}
                {/*</label>*/}
            </div>
        );
    }
}
