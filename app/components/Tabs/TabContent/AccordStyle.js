import styled from 'styled-components';

const AccordStyle = styled.div`
.accordion {
   /*-webkit-box-shadow: 0px 13px 23px -13px rgba(0,0,0,0.5);*/
   width: 100%;
   background-color: transparent;
   margin: auto;
   margin-top: 1em;
}

.title {
  /*width: 100%;*/
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,.07);;
  /*padding: 0.2em 0.5em;*/
  padding-bottom: 0;
  color: #333;
  text-transform: capitalize;
  /*letter-spacing: 1px;*/
  text-align: left;
  line-height: 2;
  position: relative;
  margin-top: 0.3em;
  transition: all .2s ease-in;
  &::before {
  top: 0;
  height: 100%;
  content: "";
  position: absolute;
  left: 0;
  width: 10%;
  border-left: .2em solid ${props => props.status ===  'COMPLETED' ? '#46BBB6' : props.status ===  'FAILED' ? '#C9302C' :  '#EC971F' };;
  }
}

/*.title-text {
  margin-left: 10px;
}*/

.title:hover {
  cursor: pointer;
  background-color: rgba(0,0,0, .2);
}

.content {
  width: 100%;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  text-align: left;
}

.content-open {
  background-color: #fafafa;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);
}

.content-text {
  padding: 15px;
  visibility: hidden;
  opacity: 0;
  overflow: auto;
}

.content-text-open {
  visibility: visible;
  opacity: 1;
  color: #333;
}

.fa-angle-down {
  font-size: 20px;
  color: rgba(255,255,255, .5);
  transition: all .6s cubic-bezier(0.080, 1.090, 0.320, 1.275);
}

.fa-rotate-180 {
  color: rgba(255,255,255, 1);
}

.arrow-wrapper {
  position: absolute;
  margin-left: 375px;
}

.example-enter {
  opacity: 0.01;
  transform: translateY(16px);
}

.example-enter.example-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 550ms cubic-bezier(0.080, 1.090, 0.320, 1.275);
}

.example-leave {
  opacity: 1;
  transform: translateY(0);
}

.example-leave.example-leave-active {
  opacity: 0.01;
  transform: translateY(16px);
  transition: all 550ms cubic-bezier(0.080, 1.090, 0.320, 1.275);
}

.content-enter {
  opacity: 0.01;
  transform: translateY(80px);
  background-color: transparent;
}

.content-enter.content-enter-active {
  opacity: 1;
  transform: translateY(0);
  background-color: rgba(0,0,0, .1);
  transition: all 550ms cubic-bezier(0.080, 1.090, 0.320, 1.275);
}

.content-leave {
  opacity: 1;
  height: 10px;
  background-color: rgba(0,0,0, .1);
}

.content-leave.content-leave-active {
  opacity: 0.01;
  height: 0px;
  background-color: transparent;
  transition: all 180ms linear;
}
  
  .title-text.title-status {
  color : ${props => props.status ===  'COMPLETED' ? '#46BBB6' : props.status ===  'FAILED' ? '#C9302C' :  '#EC971F' };
  }
 `;

export default AccordStyle;
