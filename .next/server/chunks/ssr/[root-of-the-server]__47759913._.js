module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/MapaDengue/Mapa/page.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MapLeaflet)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$geosearch$2f$dist$2f$geosearch$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-geosearch/dist/geosearch.module.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: '/images/marker-icon-2x.png',
    iconUrl: '/images/marker-icon.png',
    shadowUrl: '/images/marker-shadow.png'
});
function MapLeaflet({ allMarkers = [], onMarkerDelete }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const map = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].map('map').setView([
            -20.4697,
            -54.6201
        ], 13);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$geosearch$2f$dist$2f$geosearch$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OpenStreetMapProvider"]();
        const searchControl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$geosearch$2f$dist$2f$geosearch$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeoSearchControl"]({
            provider,
            style: 'bar',
            showMarker: true,
            autoClose: true,
            retainZoomLevel: false,
            animateZoom: true
        });
        map.addControl(searchControl);
        const dengueIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].icon({
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
        allMarkers.forEach((marker)=>{
            const popupContent = `
        <div class="leaflet-popup-content-wrapper">
          <div class="leaflet-popup-content">
            <b>Foco de Dengue</b><br>
            <small>${marker.nome || 'Não informado'}</small><br>
            <small>${marker.endereco}</small><br>
            <small>Tipo: ${marker.tipo}</small><br>
            ${marker.data_registro ? `<small>Registrado em: ${new Date(marker.data_registro).toLocaleDateString()}</small>` : ''}
            <div class="d-grid gap-2 mt-2">
              <button 
                class="btn btn-sm btn-danger delete-btn" 
                data-id="${marker.id}"
                style="width: 100%"
              >
                Remover Foco
              </button>
            </div>
          </div>
        </div>
      `;
            const leafletMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].marker([
                marker.lat,
                marker.lng
            ], {
                icon: dengueIcon
            }).addTo(map).bindPopup(popupContent);
            leafletMarker.on('popupopen', ()=>{
                const deleteBtn = document.querySelector(`.delete-btn[data-id="${marker.id}"]`);
                if (deleteBtn) {
                    deleteBtn.addEventListener('click', async (e)=>{
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
                    });
                }
            });
        });
        if (allMarkers.length > 0) {
            const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].featureGroup(allMarkers.map((m)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].marker([
                    m.lat,
                    m.lng
                ])));
            map.fitBounds(group.getBounds().pad(0.2));
        }
        return ()=>{
            map.remove();
        };
    }, [
        allMarkers,
        onMarkerDelete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "map",
        style: {
            height: '500px',
            width: '100%'
        }
    }, void 0, false, {
        fileName: "[project]/src/app/MapaDengue/Mapa/page.js",
        lineNumber: 105,
        columnNumber: 10
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__47759913._.js.map