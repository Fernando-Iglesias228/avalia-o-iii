(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/map.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Mapa)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
'use client';
;
;
const DynamicMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/components/MapLeaflet.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/MapLeaflet.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Carregando mapa..."
        }, void 0, false, {
            fileName: "[project]/src/components/map.js",
            lineNumber: 6,
            columnNumber: 18
        }, this)
});
_c = DynamicMap;
function Mapa({ allMarkers = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicMap, {
        allMarkers: allMarkers
    }, void 0, false, {
        fileName: "[project]/src/components/map.js",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c1 = Mapa;
var _c, _c1;
__turbopack_context__.k.register(_c, "DynamicMap");
__turbopack_context__.k.register(_c1, "Mapa");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/submitFocos.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SubmitFocos)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$geosearch$2f$dist$2f$geosearch$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-geosearch/dist/geosearch.module.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SubmitFocos() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubmitFocos.useEffect": ()=>{
            const form = document.getElementById('form-cadastro-foco');
            if (!form) return;
            const handleSubmit = {
                "SubmitFocos.useEffect.handleSubmit": async (e)=>{
                    e.preventDefault();
                    const formData = new FormData(form);
                    const imageFile = formData.get('add-img');
                    try {
                        let imageUrl = null;
                        if (imageFile && imageFile.size > 0) {
                            const uploadFormData = new FormData();
                            uploadFormData.append('file', imageFile);
                            const uploadResponse = await fetch('/api/upload', {
                                method: 'POST',
                                body: uploadFormData
                            });
                            if (!uploadResponse.ok) {
                                throw new Error('Falha no upload da imagem');
                            }
                            const uploadData = await uploadResponse.json();
                            imageUrl = uploadData.url;
                        }
                        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$geosearch$2f$dist$2f$geosearch$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OpenStreetMapProvider"]();
                        const endereco = formData.get('addrs-foco');
                        const results = await provider.search({
                            query: endereco
                        });
                        if (results.length === 0) {
                            throw new Error('Endereço não encontrado');
                        }
                        const { x: lng, y: lat } = results[0];
                        const focoData = {
                            nome: formData.get('name'),
                            endereco,
                            tipo: formData.get('tipo-foco'),
                            imagem: imageUrl,
                            lat,
                            lng
                        };
                        const response = await fetch('/api/focos', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(focoData)
                        });
                        if (!response.ok) {
                            throw new Error('Erro ao registrar foco');
                        }
                        alert('Foco registrado com sucesso!');
                        form.reset();
                        window.location.reload();
                    } catch (error) {
                        console.error('Erro:', error);
                        alert('Erro: ' + error.message);
                    }
                }
            }["SubmitFocos.useEffect.handleSubmit"];
            form.addEventListener('submit', handleSubmit);
            return ({
                "SubmitFocos.useEffect": ()=>{
                    form.removeEventListener('submit', handleSubmit);
                }
            })["SubmitFocos.useEffect"];
        }
    }["SubmitFocos.useEffect"], []);
    return null;
}
_s(SubmitFocos, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SubmitFocos;
var _c;
__turbopack_context__.k.register(_c, "SubmitFocos");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_9553af01._.js.map