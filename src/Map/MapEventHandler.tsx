import { useMapEvents } from 'react-leaflet';
import { useMapStore } from './MapStore';

 export function MapClickHandler() {
  const setCoordinates = useMapStore((state) => state.setCoordinates);

  useMapEvents({
    click: (e) => {
      setCoordinates(e.latlng.lat, e.latlng.lng);
      console.log(`Clicked at: ${e.latlng.lat}, ${e.latlng.lng}`);
    },
  });

  return null;
}