import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, Path, Polyline } from 'react-leaflet';
import AddButton from './AddButton';

export default class PathHistory extends React.Component { // eslint-disable-line react/prefer-stateless-function
    constructor(props) {
        super(props);
        this.state = {
            lat: 17.4622,
            lng: 78.356,
            zoom: 11,
        };
        this.handleLeafletLoad = this.handleLeafletLoad.bind(this);
    }

      componentDidMount(){

      }
    handleLeafletLoad() {
        if (this.pathMap) {
            this.pathMap.leafletElement.invalidateSize();
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        const { triggerComponent, addOrderComponent } = this.props;
        return (
            <Map
                ref={(map) => { this.pathMap = map; }}
                center={position ? position : [this.state.lat, this.state.lng]}
                zoom={this.state.zoom}
                zoomControl={false}
                className='pathMap'
                style={{ height: '89vh' }}
            >
              <TileLayer
                  url='https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicHJ1ZGh2aXNheXMiLCJhIjoiY2l4aWxnM2xoMDAxMzJ3bzB2ajlpbzJ2eCJ9.L4CdTG9cSB-ADVYQXbH-hw'
              />
              <Marker position={[1,1]}>
                <Popup>
                  <span>PICKUP POINT</span>
                </Popup>
              </Marker>
                {!addOrderComponent &&<AddButton onClick={triggerComponent} style={{ width: '65%', textAlign: 'center' }}> ADD ORDER</AddButton>}
            </Map>
        );
    }
}