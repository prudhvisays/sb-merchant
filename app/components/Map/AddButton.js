import styled from 'styled-components';

const AddButton = styled.div`
    background: #6bc9c5;
    position: absolute;
    z-index: 9999;
    bottom: 15px;
    margin: 1em 3em;
    color: #fff;
    font-size: 2rem;
    line-height: 3rem;
    padding: 0 1em;
    white-space: nowrap;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 12px 15px 20px 0 rgba(46,61,73,.15);
    transition:transform 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s, opacity 1s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
    &:hover {
      box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      transition: box-shadow .3s ease;
    }
`;

export default AddButton;
