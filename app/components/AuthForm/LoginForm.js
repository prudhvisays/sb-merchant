import styled from 'styled-components';

const LoginForm = styled.section`
width: 320px;
height: 420px;
position: relative;
top: -3em;
border-radius: 4px;
box-shadow: 8px 10px 20px 0 rgba(46,61,73,0.15);
.input-group-addon {
    background-color: transparent;
        .material-icons {
        color: #6bc9c5;
    }
   }
.login-button{
   background: #6bc9c5;
   font-size: 1.5rem;
   color: #fff;
   width: 100%;
   margin-top: 23px;
   line-height: 2.6rem;
   text-align: center;
   box-shadow: 8px 10px 20px 0 rgba(46,61,73,0.15);
   border-radius: 3px;
   outline: none;
   transition: all 0.1s linear;
   &:hover{
     background-color: rgba(107, 201, 197, 0.84);
     box-shadow: 2px 4px 8px 0 rgba(46,61,73,0.2);
   }
 }
 .login-footer {
    background : #f7f7f7;
    height: 30vh;
    box-shadow: inset 0px 2px 14px 0 rgba(46,61,73,0.15);
 }
`;

export default LoginForm;
