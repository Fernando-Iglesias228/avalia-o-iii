(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/MapLeaflet.js [app-client] (ecmascript, next/dynamic entry, async loader)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/node_modules_leaflet_dist_leaflet-src_e7e140e9.js",
  "static/chunks/src_components_MapLeaflet_2b571c8f.js",
  {
    "path": "static/chunks/node_modules_leaflet_dist_leaflet_88e19fd3.css",
    "included": [
      "[project]/node_modules/leaflet/dist/leaflet.css [app-client] (css)"
    ]
  },
  "static/chunks/src_components_MapLeaflet_9a254edf.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/src/components/MapLeaflet.js [app-client] (ecmascript, next/dynamic entry)");
    });
});
}}),
}]);