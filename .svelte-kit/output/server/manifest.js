export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "matrix-colorful/_app",
	assets: new Set([".DS_Store",".nojekyll","AVENET.svg","automation.png","bajlando.png","chatbot.png","coding.png","communicate.png","favicon.svg","flux-1-kontext-pro__Minimalistyczna_gra.png","laptop.png","logo-kronos.png","logo-my-deco.webp","logo-po-sl.png","logo-ws.png","logo_rgb.png","new-product.png","rocket.png","scg_logo.png","security.png","settings.png","shopping-cart.png","www_ico.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".webp":"image/webp"},
	_: {
		client: {start:"_app/immutable/entry/start.Cy2MblVu.js",app:"_app/immutable/entry/app.BQcCMqYq.js",imports:["_app/immutable/entry/start.Cy2MblVu.js","_app/immutable/chunks/CE6xAfTd.js","_app/immutable/chunks/jvEm6Jub.js","_app/immutable/chunks/9IweV_D1.js","_app/immutable/chunks/DxG1ksZa.js","_app/immutable/entry/app.BQcCMqYq.js","_app/immutable/chunks/9IweV_D1.js","_app/immutable/chunks/jvEm6Jub.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/D9kC2uMI.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
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
