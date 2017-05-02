import React from 'react';
import { connect } from 'react-redux';
import Tab from './Tab';
import NavTabStyle from './NavTabStyle';

class Tabs extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(tab) {
        this.props.changeTab(tab);
    }
    render() {
        return (
            <NavTabStyle className="d-flex pl-4">
               {this.props.tabList.map(tab => (
                    <Tab
                        key={tab.id}
                        handleClick={() => { this.handleClick(tab); }}
                        name={tab.name}
                        isCurrent={(this.props.currentTab === tab.id)}
                    />
                ))}
            </NavTabStyle>
        );
    }
}


export default Tabs;
