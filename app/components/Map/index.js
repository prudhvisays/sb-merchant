import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, Path, Polyline } from 'react-leaflet';
import AddButton from './AddButton';
import auth from '../../Api/Auth';

export default class PathHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
            lat: 17.4622,
            lng: 78.356,
            zoom: 11,
        };
        this.handleLeafletLoad = this.handleLeafletLoad.bind(this);
        this.getBounds = this.getBounds.bind(this);
    }

      componentDidMount(){
          if (auth.loggedIn() && JSON.parse(localStorage.getItem('sessionData')).username === 'merchant') {
              const session = JSON.parse(localStorage.getItem('sessionData'));
              const pLat = session.customer.location.coordinates[1];
              const pLng = session.customer.location.coordinates[0];
              this.props.pickupCord({ pLat, pLng });
          }
      }
    handleLeafletLoad() {
        if (this.pathMap) {
            this.pathMap.leafletElement.invalidateSize();
        }
    }

    getBounds() {
          if(this.pathMap) {
              return this.pathMap.leafletElement.getBounds
          }
    }
    render() {
        const { pickupCordState, deliveryCordState } = this.props;
        const position = [pickupCordState.pLat, pickupCordState.pLng];
        const deliveryPos = [deliveryCordState.dLat, deliveryCordState.dLng];
        const { triggerComponent, addOrderComponent } = this.props;
        return (
            <Map
                ref={(map) => { this.pathMap = map; }}
                center={position[0] ? position : [this.state.lat, this.state.lng]}
                zoom={this.state.zoom}
                zoomControl={false}
                className='pathMap'
                style={{ height: '89vh' }}
            >
              <TileLayer
                  url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJ1ZGh2aXNheXMiLCJhIjoiY2l4aWxnM2xoMDAxMzJ3bzB2ajlpbzJ2eCJ9.L4CdTG9cSB-ADVYQXbH-hw'
              />
              <Marker position={position[0] ? position : [1,1]}>
                <Popup>
                  <span>PICKUP POINT</span>
                </Popup>
              </Marker>
                { deliveryPos[0] && <Marker position={deliveryPos[0] ? deliveryPos : [1,1]}>
                <Popup>
                  <span>PICKUP POINT</span>
                </Popup>
              </Marker> }
                {!addOrderComponent &&<AddButton onClick={triggerComponent} style={{ width: '65%', textAlign: 'center' }}> ADD ORDER</AddButton>}
            </Map>
        );
    }
}