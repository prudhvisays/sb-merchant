import styled from 'styled-components';

const AddOrderStyle = styled.section`
    background: #fff;
    height: 89vh;
   input {
    border-radius: .142857143em
    box-shadow: 0 0.25em 0.5em 0 rgba(46,61,73,.12);
    transition: box-shadow .3s ease,border .3s ease;
    &:focus {
    box-shadow: 0 0 0.75em 0.25em rgba(70, 187, 182,.35);
    }
    &:hover {
    box-shadow: 0 0.125em 0.5em 0 rgba(70, 187, 182,.06);
   }
`;

export default AddOrderStyle;
