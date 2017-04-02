import styled from 'styled-components';
import { Map } from 'react-leaflet';
const MapStyle = styled(Map)`
  height: 89vh;
  .my-div-icon {
  background:red;
  border:4px solid rgba(255,255,255,0.5);
  color:blue;
  font-weight:bold;
  text-align:center;
  border-radius:50%;
  line-height:30px;
  }
`;

export default MapStyle;
