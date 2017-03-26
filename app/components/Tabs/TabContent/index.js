import React from 'react';
import OrderContent from './OrderContent';
import AccordStyle from './AccordStyle';
import './Accord.css';

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
    const sections = this.props.data && this.props.data.map((i) => (
      <div key={i._id}>
        <div
          className="title row"
          onClick={this.click.bind(null, i._id)}
        >
         <span className="col-3">
             #{i.id}
         </span>
         <AccordStyle status={i.status} className="col-3 title-text">
           {i.status}
         </AccordStyle>

          <span className="col-3 title-text">
            {i.pilot ? i.pilot.user.firstName + ' (' +  i.pilot.user.mobileNumber + ')'  : ''}
          </span>

          <span className="col-3 title-text">
           {i.final_cost}
         </span>
       </div>
          { i.open && <div className={i.open
         ? "content content-open"
         : "content"}
        >
          <div className={i.open
            ? "content-text content-text-open"
            : "content-text"}
          > {<OrderContent data={i}/>}
          </div>
        </div> }
      </div>
    ));

    return (
      <div className="accordion">
        {sections}
      </div>
    );
   }
}
