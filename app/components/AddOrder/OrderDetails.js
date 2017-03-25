import React from 'react';

export default class OrderDetails extends React.Component { //eslint-disable-line
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.calendarChange = this.calendarChange.bind(this);
        this.emitChanges = this.emitChanges.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.infoChange = this.infoChange.bind(this);
        this.changeState = this.changeState.bind(this);
    }
    onChange(e) {
        const { delivery } = this.props.stateAddTask;
        this.emitChanges({ ...delivery, [e.target.name]: e.target.value });
    }
    calendarChange(date) {
        const { pickup } = this.props.stateAddTask;
        const Date = moment(date[0]).utc().format();
        this.emitChanges({ ...pickup, from_date: Date });
    }
    emitChanges(newFormState) {
        this.props.deliveryChange(newFormState);
    }
    infoChange(e) {
        const { taskInfo } = this.props.stateAddTask;
        this.changeState({ ...taskInfo, [e.target.name]: e.target.value})
    }
    changeState(newInfoState) {
        this.props.addTaskInfo(newInfoState);
    }
    onOpen() {
        const { pickup } = this.props.stateAddTask;
        const Date = moment().add(15,'m').utc().format();
        this.emitChanges({ ...pickup, from_date: Date });
    }
    render() {
        const { stateAddTask } = this.props;
        return (
            <div className="card p-2">
                <div className="form-group">
                    <label htmlFor="orderTitle">Enter Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="orderTitle"
                        placeholder="Title"
                        name="title"
                        value={stateAddTask.taskInfo.title}
                        onChange={this.infoChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="orderDescription">Description</label>
                    <textarea
                        className="form-control"
                        id="orderDescription"
                        rows="3"
                        name="description"
                        value={stateAddTask.taskInfo.description}
                        onChange={this.infoChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="orderName">Enter Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="orderName"
                        placeholder="Name"
                        name="to_name"
                        onChange={this.onChange}
                        value={stateAddTask.delivery.to_name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="orderDescription">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="orderNumber"
                        placeholder="Enter Phone Number"
                        name="to_phone"
                        onChange={this.onChange}
                        value={stateAddTask.delivery.to_phone}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="orderEmail">Email Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="orderEmail"
                        placeholder="Enter Email Address"
                        name="to_email"
                        onChange={this.onChange}
                        value={stateAddTask.delivery.to_email}
                    />
                </div>
            </div>
        );
    }
}
