module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/map.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Mapa)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
const DynamicMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/mapLeaflet.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Carregando mapa..."
        }, void 0, false, {
            fileName: "[project]/src/components/map.js",
            lineNumber: 6,
            columnNumber: 18
        }, this)
});
function Mapa({ allMarkers = [] }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicMap, {
        allMarkers: allMarkers
    }, void 0, false, {
        fileName: "[project]/src/components/map.js",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}}),
"[project]/src/components/submitFocos.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SubmitFocos)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$geosearch$2f$dist$2f$geosearch$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-geosearch/dist/geosearch.module.js [app-ssr] (ecmascript)");
'use client';
;
;
function SubmitFocos() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const form = document.getElementById('form-cadastro-foco');
        if (!form) return;
        const handleSubmit = async (e)=>{
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
                const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$geosearch$2f$dist$2f$geosearch$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OpenStreetMapProvider"]();
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
        };
        form.addEventListener('submit', handleSubmit);
        return ()=>{
            form.removeEventListener('submit', handleSubmit);
        };
    }, []);
    return null;
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__edde0ffa._.js.map