import React from 'react';
import { connect } from 'react-redux';
import TabStyle from './TabStyle';
class Tab extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        e.preventDefault();
        this.props.handleClick();
    }
    render() {
        return (
                <TabStyle className={this.props.isCurrent ? 'nav-link active' : 'nav-link'} onClick={this.handleClick}>
                    {this.props.name}
                </TabStyle>
        );
    }
}


export default Tab;
