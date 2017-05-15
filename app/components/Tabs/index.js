import React from 'react';
import { connect } from 'react-redux';
import Tabs from './Tabs';
import TabContent from './TabContent';
import TabStyles from './TabStyles';

const tabList = [
    { 'id': 1, 'name': 'Orders'},
    { 'id': 2, 'name': 'InProgress'},
    { 'id': 3, 'name': 'Completed'},
    { 'id': 4, 'name': 'Failed'}
];

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
        const{ orderList, openAccordion, selectedItem} = this.props
        return (
            <TabStyles style={{ height: '89vh', overflow: 'hidden' }}>
               <Tabs
                   tabList={this.state.tabList}
                   currentTab={this.state.currentTab}
                   changeTab={this.changeTab}
               />
                <div style={{ background: '#eee',  boxShadow: '6px 6px 12px 0 rgba(46,61,73,0.15)', lineHeight: '2rem'}}>
                    <div style={{ padding: '0 2em' }}><div className="table-head row">
                      <div className="col-12">
                        <div className="d-flex flex-row">
                          <div className="col-md-3 col-sm-4">Order Id</div>
                          <div className="col-md-3 col-sm-4">Status</div>
                          <div className="col-md-3 col-sm-4">Pilot</div>
                          <div className="col-md-3 hidden-md-down">Cost</div>
                        </div>
                      </div>
                    </div>
                </div>
                </div>
                <div className="accord">
                    <TabContent data={orderList} openAccordion={openAccordion} selectedItem={selectedItem}/>
                </div>
            </TabStyles>
        );
    }
}


export default OrderTabs;
