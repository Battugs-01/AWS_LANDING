import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ChangeView from "./center";
import ChooseMarker from "./choose_marker";

const CENTER_MAP = [47.9201606, 106.9154933];

const LeafletMap = ({ markers = [], position }) => {
  return (
    <MapContainer
      center={CENTER_MAP}
      zoom={13}
      style={{ width: "600px", height: "400px" }}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {markers.map((marker) => (
        <Marker
          key={marker.name}
          position={[marker.latitude, marker.longitude]}
          icon={
            new L.DivIcon({
              className: `marker_icon marker_color_${
                marker?.color ? marker.color : "red"
              }`,
            })
          }
          eventHandlers={{
            click: () => {
              if (marker.onClick) marker.onClick();
            },
          }}
        >
          <Popup>{marker.name}</Popup>
        </Marker>
      ))}
      <ChooseMarker position={position} />
      <ChangeView
        center={
          (position?.val[0] !== 0 && position?.val[1] !== 0 && position?.val) ||
          CENTER_MAP
        }
      />
    </MapContainer>
  );
};

export default LeafletMap;
