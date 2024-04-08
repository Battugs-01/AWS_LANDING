import L from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const ChooseMarker = ({ position }) => {
  const map = useMapEvents({
    click: (e) => {
      position?.set([e.latlng.lat, e.latlng.lng]);
      map.flyTo([e.latlng.lat, e.latlng.lng], map.getZoom());
      map.locate();
    },
  });

  return position?.val !== null &&
    position?.val[0] !== 0 &&
    position?.val[1] !== 0 ? (
    <Marker
      position={position?.val || [0, 0]}
      icon={
        new L.DivIcon({
          className: `marker_icon marker_color_blue`,
        })
      }
    >
      <Popup>Та сонгосон</Popup>
    </Marker>
  ) : null;
};

export default ChooseMarker;
