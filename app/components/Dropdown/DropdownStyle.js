import styled from 'styled-components';

const DropDownStyle = styled.div`
    position: relative;
    .material-icons {
    font-size: 2rem;
        &:hover {
            color: #6bc9c5;
        }
        &.active {
            color: #6bc9c5;
        }
    }
    ul {
        display: none;
        padding: 0.5em 0.5em;
        z-index: 999;
             &.active {
            display: block;
            position: absolute;
            background-color: #f9f9f9;
            min-width: 160px;
            overflow: auto;
            boxShadow: 6px 6px 12px 0 rgba(46,61,73,0.15);
            right: 0;
        }
    li {
        color: black;
        text-decoration: none;
        display: block;
        &:hover {
            background-color: #f1f1f1;
            color: #6bc9c5;
        }
        }
    }
    
`;

export default DropDownStyle;
