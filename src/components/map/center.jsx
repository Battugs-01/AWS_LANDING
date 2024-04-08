import { useEffect } from "react";
import { useMap } from "react-leaflet";

export default function ChangeView({ center }) {
  const map = useMap();

  useEffect(() => {
    if (center) {
      map.setView(center, 9);
    }
  }, [center, map]);
  return null;
}
