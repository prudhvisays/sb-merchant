import React from 'react';
import OrderContent from './OrderContent';
import AccordStyle from './AccordStyle';
import './Accord.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TopList extends React.Component { //eslint-disable-line
constructor(props) {
  super(props);
  this.state = {
    accordionItems: [],
  }
  this.click = this.click.bind(this);
}
  // componentWillMount () {
  // 	let accordion = [];
  //
  // 	this.props.data.forEach((i) => {
  //     accordion.push({
  //       title: i.title,
  //       content: i.content,
  //       open: false
  //     });
  //   });
  //
	// 	this.setState({
  //     accordionItems: accordion,
  //   });
  // }

  // click (i) {
  // 	const newAccordion = this.state.accordionItems.slice();
  //   const index = newAccordion.indexOf(i)
  //
  //   newAccordion[index].open = !newAccordion[index].open;
  //   this.setState({accordionItems: newAccordion});
  // }

  click(id) {
    this.props.openAccordion(id);
  }

	render () {
  const { selectedItem } = this.props;
    const sections = this.props.data && this.props.data.map((i) => (
      <div key={i._id}>
        <div
          className="title row"
          onClick={this.click.bind(null, i._id)}>
          <div className="col-12" style={{ padding: 0 }}>
            <div className="d-flex flex-row">
              <div className="col-md-3 col-sm-4">
                #{i.id}
              </div>
              <AccordStyle status={i.status} className="col-md-3 col-sm-4 title-text">
                {i.status}
              </AccordStyle>

              <div className="col-md-3 col-sm-4 title-text">
                <div className="ink-flex vertical">
                  <div style={{ margin: '0' }}>{i.pilot ? i.pilot.user ? i.pilot.user.firstName : '-' : '-'}</div>
                  <div style={{ fontSize: '0.8rem', margin: '0' }}>({i.pilot ? i.pilot.user ? i.pilot.user.mobileNumber : '-' : '-'})</div>
                </div>
              </div>

              <div className="col-md-3 hidden-md-down title-text">
                {i.final_cost}
              </div>
            </div>
          </div>
       </div>
        <ReactCSSTransitionGroup transitionName="content" transitionEnterTimeout={550} transitionLeaveTimeout={180}>
          { selectedItem === i._id && <div className="content content-open"
        >
          <div className="content-text content-text-open"
          > {<OrderContent data={i}/>}
          </div>
        </div> }
        </ReactCSSTransitionGroup>
      </div>
    ));

    return (
      <div className="accordion">
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={550} transitionLeaveTimeout={550}>
        {sections}
        </ReactCSSTransitionGroup>
      </div>
    );
   }
}
