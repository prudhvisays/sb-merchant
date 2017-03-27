import React from 'react';
import DropdownStyle from './DropdownStyle';

const Dropdown = (props) => {
    return (
        <DropdownStyle className="dropdown">
            <i className={props.isOpen ? 'material-icons active' : 'material-icons'} onClick={props.onToggle}>
                {props.icon}
            </i>
            <ul className={props.isOpen ? 'active' : null}>
                {
                    props.data.map((item, i) => {
                        return (
                            <li key={i} className={i === props.optionSelected ? 'selected' : null}
                                onClick={() => props.onSelect(i,item.title)}>
                                <div className="d-flex flex-row mb-1">
                                    <i className="material-icons mr-2" style={{ fontSize: '1.5rem'}}>{item.icon}</i>
                                    <div>{item.title}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </DropdownStyle>
    )
};

export default Dropdown;