import styled from 'styled-components';

const AccordStyle = styled.span`
  color : ${props => props.status ===  'COMPLETED' ? '#46BBB6' : props.status ===  'FAILED' ? '#C9302C' :  '#EC971F' };
 `;

export default AccordStyle;
