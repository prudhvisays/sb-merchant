import styled from 'styled-components';

const AppHeaderStyle = styled.div`
  background: #263238;
  box-shadow: 0 -5px 4px 9px #777;
  z-index: 9999;
  .logo{
    width: 50px;
    height: 50px;
  }
  a{
        color: #fff;
        &:hover{
            color: #6bc9c5;
        }
  }
  .nav-title {
    color: #fff;
  }
   .nav-item.active {
    color: #6bc9c5;
  }
`;

export default AppHeaderStyle;
