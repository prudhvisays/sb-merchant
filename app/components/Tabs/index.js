import React from 'react';
import { connect } from 'react-redux';
import Tabs from './Tabs';
import TabContent from './TabContent';

const tabList = [
    { 'id': 1, 'name': 'Orders'},
    { 'id': 2, 'name': 'InProgress'},
    { 'id': 3, 'name': 'Completed'},
    { 'id': 4, 'name': 'Failed'}
];
const data = [
    { '_id': 12, 'name': 'PRudhvi'},
    { '_id': 14, 'name': 'pawan'},
]
class OrderTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabList: tabList,
            currentTab: 1,
        }
        this.changeTab = this.changeTab.bind(this);
    }
    changeTab(tab) {
        console.log(tab)
        this.setState({ currentTab: tab.id })
        this.props.tabSelection(tab.name)
    }
    render() {
        const{ orderList, openAccordion } = this.props
        return (
            <div style={{ height: '89vh', overflow: 'hidden' }}>
               <Tabs
                   tabList={this.state.tabList}
                   currentTab={this.state.currentTab}
                   changeTab={this.changeTab}
               />
                <div style={{ background: '#eee',  boxShadow: '6px 6px 12px 0 rgba(46,61,73,0.15)', lineHeight: '2rem'}}>
                    <div style={{ padding: '0 3em'}}><div className="table-head row">
                        <div className="col-4">Order Details</div>
                        <div className="col-2">Status</div>
                        <div className="col-2">Value</div>
                        <div className="col-4">Driver Details</div>
                    </div>
                </div>
                </div>
                <div style={{ padding: '0 3em'}}>
                    <TabContent data={orderList} openAccordion={openAccordion} />
                </div>
            </div>
        );
    }
}


export default OrderTabs;
