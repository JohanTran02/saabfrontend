import { FeatureGroup } from "react-leaflet";
import MapMarker from "./MapMarker";
import { useBaseStore } from "./BaseStore";

export default function BasesLayer() {
    const bases = useBaseStore((state) => (state.bases));
    return (
        <FeatureGroup>
            {
                bases.map((base) => <MapMarker key={base.id} {...base} />)
            }
        </FeatureGroup>
    )
}