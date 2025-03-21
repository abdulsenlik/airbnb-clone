import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface MapProps {
    center?: number[];
}

const Map: React.FC<MapProps> = ({ center }) => {
    const [mapKey, setMapKey] = useState(0);
    const mapRef = useRef<L.Map | null>(null);

    useEffect(() => {
        return () => {
            if (mapRef.current) {
                mapRef.current.remove(); // ✅ Destroy old map instance before re-rendering
                setMapKey((prev) => prev + 1);
            }
        };
    }, [center]);

    return (
        <div key={mapKey} className="h-[35vh] rounded-lg">
            <MapContainer
                whenReady={() => {
                    if (!mapRef.current) {
                        mapRef.current = mapRef.current;
                    }
                }}
                center={(center as L.LatLngExpression) || [51, -0.09]}
                zoom={center ? 4 : 2}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {center && <Marker position={center as L.LatLngExpression} />}
            </MapContainer>
        </div>
    );
};

export default Map;
