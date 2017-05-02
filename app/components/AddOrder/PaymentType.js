import React from 'react';

export default class PaymentType extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.emitChanges = this.emitChanges.bind(this);
    }
    onChange(e) {
        const { taskInfo } = this.props.stateAddTask;
        this.emitChanges({...taskInfo, paymentType: e.target.name});
    }
    emitChanges(newFormState) {
        this.props.addTaskInfo(newFormState);
    }
    render() {
        const { stateAddTask } = this.props;
        return (
            <div className="form-group col-md-6">
                <label className="custom-control custom-radio">
                    <input
                        id="radio2"
                        name="PREPAID"
                        type="radio"
                        className="custom-control-input"
                        checked={stateAddTask.taskInfo.paymentType === 'PREPAID'}
                        onChange={this.onChange}
                    />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">Prepaid</span>
                </label>

                <label className="custom-control custom-radio">
                    <input
                        id="radio3"
                        name="COD"
                        type="radio"
                        className="custom-control-input"
                        checked={stateAddTask.taskInfo.paymentType === 'COD'}
                        onChange={this.onChange}
                    />
                    <span className="custom-control-indicator" />
                    <span className="custom-control-description">COD</span>
                </label>
            </div>

        );
    }
}
