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
"[project]/src/components/enderecoAutoComplete.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>EnderecoAutoComplete)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function EnderecoAutoComplete() {
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (query.length < 3) {
            setSuggestions([]);
            return;
        }
        const timeout = setTimeout(()=>{
            const bbox = "-54.75,-20.6,-54.45,-20.3";
            const url = `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=10&bbox=${bbox}`;
            fetch(url).then((res)=>res.json()).then((data)=>{
                const rawSuggestions = data.features || [];
                const uniqueMap = new Map();
                rawSuggestions.forEach((sug)=>{
                    const { name, street, city, country } = sug.properties;
                    const full = [
                        name,
                        street,
                        city,
                        country
                    ].filter(Boolean).join(", ");
                    if (!uniqueMap.has(full)) {
                        uniqueMap.set(full, sug);
                    }
                });
                setSuggestions(Array.from(uniqueMap.values()));
            }).catch((err)=>{
                console.error("Erro ao buscar sugestões:", err);
                setSuggestions([]);
            });
        }, 300);
        return ()=>clearTimeout(timeout);
    }, [
        query
    ]);
    const handleSelect = (suggestion)=>{
        const { name, street, city, country } = suggestion.properties;
        const full = [
            name,
            street,
            city,
            country
        ].filter(Boolean).join(", ");
        setQuery(full);
        setSuggestions([]);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-3 position-relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "addrs-foco",
                className: "form-label",
                children: "Endereço do foco: *"
            }, void 0, false, {
                fileName: "[project]/src/components/enderecoAutoComplete.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                className: "form-control",
                id: "addrs-foco",
                name: "addrs-foco",
                required: true,
                autoComplete: "off",
                value: query,
                onChange: (e)=>setQuery(e.target.value)
            }, void 0, false, {
                fileName: "[project]/src/components/enderecoAutoComplete.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            suggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "list-group position-absolute w-100 z-3",
                style: {
                    maxHeight: 200,
                    overflowY: "auto"
                },
                children: suggestions.map((sug, i)=>{
                    const { name, street, city, country } = sug.properties;
                    const full = [
                        name,
                        street,
                        city,
                        country
                    ].filter(Boolean).join(", ");
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "list-group-item list-group-item-action",
                        onClick: ()=>handleSelect(sug),
                        children: full
                    }, i, false, {
                        fileName: "[project]/src/components/enderecoAutoComplete.js",
                        lineNumber: 71,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/enderecoAutoComplete.js",
                lineNumber: 66,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/enderecoAutoComplete.js",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__02b2fcd7._.js.map