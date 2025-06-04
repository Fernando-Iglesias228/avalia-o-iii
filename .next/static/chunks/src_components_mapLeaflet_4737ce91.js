(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/mapLeaflet.js [app-client] (ecmascript, next/dynamic entry, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_037cfbd6._.js",
  "static/chunks/src_components_mapLeaflet_774528d3.js",
  {
    "path": "static/chunks/node_modules_5fb760f2._.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)",
      "[project]/node_modules/leaflet-geosearch/dist/geosearch.css [app-client] (css)"
    ],
    "moduleChunks": [
      "static/chunks/node_modules_leaflet_dist_leaflet_css_f9ee138c._.single.css",
      "static/chunks/node_modules_leaflet-geosearch_dist_geosearch_css_f9ee138c._.single.css"
    ]
  },
  "static/chunks/src_components_mapLeaflet_7c9c2db9.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/components/mapLeaflet.js [app-client] (ecmascript, next/dynamic entry)");
    });
});
}}),
}]);