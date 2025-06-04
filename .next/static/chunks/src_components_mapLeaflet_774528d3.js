(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/mapLeaflet.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MapLeaflet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$geosearch$2f$dist$2f$geosearch$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-geosearch/dist/geosearch.module.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: '/images/marker-icon-2x.png',
    iconUrl: '/images/marker-icon.png',
    shadowUrl: '/images/marker-shadow.png'
});
function MapLeaflet({ allMarkers = [], onMarkerDelete }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapLeaflet.useEffect": ()=>{
            const map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].map('map').setView([
                -20.4697,
                -54.6201
            ], 13);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$geosearch$2f$dist$2f$geosearch$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenStreetMapProvider"]();
            const searchControl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$geosearch$2f$dist$2f$geosearch$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GeoSearchControl"]({
                provider,
                style: 'bar',
                showMarker: true,
                autoClose: true
            });
            map.addControl(searchControl);
            const dengueIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].icon({
                iconUrl: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
                iconSize: [
                    32,
                    32
                ],
                iconAnchor: [
                    16,
                    32
                ],
                popupAnchor: [
                    0,
                    -32
                ]
            });
            allMarkers.forEach({
                "MapLeaflet.useEffect": (marker)=>{
                    const hasImage = marker.imagem && marker.imagem !== 'null';
                    const popupContent = `
        <div class="leaflet-popup-content-wrapper">
          <div class="leaflet-popup-content">
            <b>Foco de Dengue</b><br>
            <small>${marker.nome || 'Não informado'}</small><br>
            <small>${marker.endereco}</small><br>
            <small>Tipo: ${marker.tipo}</small><br>
            ${marker.data_registro ? `<small>Registrado em: ${new Date(marker.data_registro).toLocaleDateString()}</small>` : ''}
            <div class="d-flex gap-2 mt-2">
              ${hasImage ? `
                <button 
                  class="btn btn-sm btn-primary view-btn flex-grow-1" 
                  data-id="${marker.id}"
                  data-image="${marker.imagem}"
                >
                  Ver Foto
                </button>
              ` : ''}
              <button 
                class="btn btn-sm btn-danger delete-btn flex-grow-1" 
                data-id="${marker.id}"
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      `;
                    const leafletMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                        marker.lat,
                        marker.lng
                    ], {
                        icon: dengueIcon
                    }).addTo(map).bindPopup(popupContent);
                    leafletMarker.on('popupopen', {
                        "MapLeaflet.useEffect": ()=>{
                            const viewBtn = document.querySelector(`.view-btn[data-id="${marker.id}"]`);
                            if (viewBtn) {
                                viewBtn.addEventListener('click', {
                                    "MapLeaflet.useEffect": (e)=>{
                                        e.stopPropagation();
                                        const imageUrl = viewBtn.getAttribute('data-image');
                                        window.open(imageUrl, '_blank');
                                    }
                                }["MapLeaflet.useEffect"]);
                            }
                            const deleteBtn = document.querySelector(`.delete-btn[data-id="${marker.id}"]`);
                            if (deleteBtn) {
                                deleteBtn.addEventListener('click', {
                                    "MapLeaflet.useEffect": async (e)=>{
                                        e.stopPropagation();
                                        if (confirm('Tem certeza que deseja remover este foco?')) {
                                            try {
                                                const response = await fetch(`/api/focos/${marker.id}`, {
                                                    method: 'DELETE'
                                                });
                                                if (response.ok) {
                                                    if (onMarkerDelete) onMarkerDelete(marker.id);
                                                    leafletMarker.remove();
                                                    map.closePopup();
                                                } else {
                                                    throw new Error('Falha ao remover foco');
                                                }
                                            } catch (error) {
                                                console.error('Erro ao remover marcador:', error);
                                                alert('Erro ao remover foco: ' + error.message);
                                            }
                                        }
                                    }
                                }["MapLeaflet.useEffect"]);
                            }
                        }
                    }["MapLeaflet.useEffect"]);
                }
            }["MapLeaflet.useEffect"]);
            if (allMarkers.length > 0) {
                const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].featureGroup(allMarkers.map({
                    "MapLeaflet.useEffect": (m)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].marker([
                            m.lat,
                            m.lng
                        ])
                }["MapLeaflet.useEffect"]));
                map.fitBounds(group.getBounds().pad(0.2));
            }
            return ({
                "MapLeaflet.useEffect": ()=>{
                    map.remove();
                }
            })["MapLeaflet.useEffect"];
        }
    }["MapLeaflet.useEffect"], [
        allMarkers,
        onMarkerDelete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "map",
        style: {
            height: '500px',
            width: '100%'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/mapLeaflet.js",
        lineNumber: 123,
        columnNumber: 10
    }, this);
}
_s(MapLeaflet, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = MapLeaflet;
var _c;
__turbopack_context__.k.register(_c, "MapLeaflet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/mapLeaflet.js [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/mapLeaflet.js [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_components_mapLeaflet_774528d3.js.map