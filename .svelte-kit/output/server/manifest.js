export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "matrix-colorful/_app",
	assets: new Set([".nojekyll","AVENET.svg","automation.png","bajlando.png","chatbot.png","coding.png","communicate.png","favicon.svg","flux-1-kontext-pro__Minimalistyczna_gra.png","laptop.png","logo-kronos.png","logo-my-deco.webp","logo-po-sl.png","logo-ws.png","logo_rgb.png","new-product.png","rocket.png","scg_logo.png","security.png","settings.png","shopping-cart.png","www_ico.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.GVXLiXZ4.js",app:"_app/immutable/entry/app.B_v7LMON.js",imports:["_app/immutable/entry/start.GVXLiXZ4.js","_app/immutable/chunks/CzRRm8_G.js","_app/immutable/chunks/CPXaUvka.js","_app/immutable/chunks/VsLgT07n.js","_app/immutable/chunks/D1cfsLBA.js","_app/immutable/entry/app.B_v7LMON.js","_app/immutable/chunks/VsLgT07n.js","_app/immutable/chunks/CPXaUvka.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DDpVmsoS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
