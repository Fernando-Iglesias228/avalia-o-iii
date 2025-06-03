import 'leaflet/dist/leaflet.css';

export default function LimparFocos(){
    let markers = [];

    function clearMarkers() {
        markers.forEach(marker => map.removeLayer(marker));
        markers = [];
    }

    return (
    <button onClick={clearMarkers()} className="btn btn-danger">Limpar Todos os Focos</button>
    )
}