
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\n<html lang=\"pl\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <title>matix-colorful</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box !important;\n      }\n\n      html,\n      body {\n        height: 100%;\n      }\n\n      body {\n        display: table;\n        width: 100%;\n        height: 100%;\n        background-color: #171717;\n        color: #000;\n        line-height: 1.6;\n        position: relative;\n        font-family: sans-serif;\n        overflow-x: hidden;\n      }\n\n      .lines {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100vw;\n        height: 100vh;\n        pointer-events: none;\n        z-index: 0;\n      }\n\n      .line {\n        position: absolute;\n        width: 2px;\n        background: rgba(255, 255, 255, 0.12); /* Dodaj lekko widoczną linię */\n        pointer-events: none;\n        border-radius: 1px;\n      }\n      .line::after,\n      .line::before {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        width: 100%;\n        height: 40vh; /* Większa wysokość dla gradientu */\n        pointer-events: none;\n        opacity: 0.7;\n        z-index: 1;\n      }\n\n      .line::after {\n        top: -40vh;\n        background: linear-gradient(\n          to bottom,\n          rgba(255, 255, 255, 0) 0%,\n          #fff 60%,\n          rgba(255, 255, 255, 0.1) 100%\n        );\n        animation: drop-down 7s linear infinite;\n        animation-delay: calc(var(--i, 0) * 0.7s);\n      }\n\n      .line::before {\n        bottom: -40vh;\n        background: linear-gradient(\n          to top,\n          rgba(255, 255, 255, 0) 0%,\n          #fff 60%,\n          rgba(255, 255, 255, 0.1) 100%\n        );\n        animation: drop-up 8s linear infinite;\n        animation-delay: calc(var(--i, 0) * 0.9s);\n      }\n\n      @keyframes drop-down {\n        0% {\n          top: -50vh;\n          opacity: 0.7;\n        }\n        10% {\n          opacity: 1;\n        }\n        90% {\n          opacity: 1;\n        }\n        100% {\n          top: 150vh;\n          opacity: 0.7;\n        }\n      }\n\n      @keyframes drop-up {\n        0% {\n          bottom: -50vh;\n          opacity: 0.7;\n        }\n        10% {\n          opacity: 1;\n        }\n        90% {\n          opacity: 1;\n        }\n        100% {\n          bottom: 150vh;\n          opacity: 0.7;\n        }\n      }\n\n      .line.horizontal {\n        width: 120vw !important;\n        height: 2px !important;\n        left: -10vw !important;\n        top: unset;\n        background: rgba(255, 255, 255, 0.12);\n      }\n      .line.horizontal::after,\n      .line.horizontal::before {\n        display: block;\n        content: \"\";\n        position: absolute;\n        top: 0;\n        height: 100%;\n        width: 40vw;\n        pointer-events: none;\n        opacity: 0.7;\n        z-index: 1;\n      }\n\n      .line.horizontal::after {\n        left: -40vw;\n        background: linear-gradient(\n          to right,\n          rgba(255, 255, 255, 0) 0%,\n          #fff 60%,\n          rgba(255, 255, 255, 0.1) 100%\n        );\n        animation: slide-right 7s linear infinite;\n        animation-delay: calc(var(--i, 0) * 0.7s);\n      }\n\n      .line.horizontal::before {\n        right: -40vw;\n        background: linear-gradient(\n          to left,\n          rgba(255, 255, 255, 0) 0%,\n          #fff 60%,\n          rgba(255, 255, 255, 0.1) 100%\n        );\n        animation: slide-left 8s linear infinite;\n        animation-delay: calc(var(--i, 0) * 0.9s);\n      }\n\n      @keyframes slide-right {\n        0% {\n          left: -120vw;\n          opacity: 0.7;\n        }\n        10% {\n          opacity: 1;\n        }\n        90% {\n          opacity: 1;\n        }\n        100% {\n          left: 120vw;\n          opacity: 0.7;\n        }\n      }\n\n      @keyframes slide-left {\n        0% {\n          left: 120vw;\n          opacity: 0.7;\n        }\n        10% {\n          opacity: 1;\n        }\n        90% {\n          opacity: 1;\n        }\n        100% {\n          left: -120vw;\n          opacity: 0.7;\n        }\n      }\n    </style>\n    <link rel=\"icon\" href=\"" + assets + "/favicon.svg\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n    <link\n      href=\"https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap\"\n      rel=\"stylesheet\"\n    />\n    " + head + "\n  </head>\n  <body data-sveltekit-preload-data=\"hover\">\n    <div class=\"lines\">\n      <!-- Linie pionowe -->\n      <div class=\"line\" style=\"left:10vw; top:-10vh; height:120vh; transform:rotate(-4deg);\"></div>\n      <div class=\"line\" style=\"left:25vw; top:-10vh; height:120vh; transform:rotate(8deg);\"></div>\n      <div class=\"line\" style=\"left:80vw; top:-10vh; height:120vh; transform:rotate(-4deg);\"></div>\n      <div class=\"line\" style=\"left:50vw; top:-30vh; height:160vh; transform:rotate(-50deg);\"></div>\n      <div class=\"line\" style=\"left:15vw; top:-15vh; height:160vh; transform:rotate(-60deg);\"></div>\n      <div class=\"line\" style=\"left:40vw; top:-10vh; height:120vh; transform:rotate(2deg);\"></div>\n      <div class=\"line\" style=\"left:70vw; top:-10vh; height:120vh; transform:rotate(-22deg);\"></div>\n      <div class=\"line\" style=\"left:55vw; top:-20vh; height:140vh; transform:rotate(40deg);\"></div>\n      <!-- <div class=\"line\" style=\"left:60vw; top:-10vh; height:120vh; transform:rotate(0deg);\"></div> -->\n      <!-- Linie poziome -->\n      <div class=\"line horizontal\" style=\"top:20vh; left:-10vw; width:120vw; height:2px; transform:rotate(-2deg);\"></div>\n      <div class=\"line horizontal\" style=\"top:50vh; left:-10vw; width:120vw; height:2px; transform:rotate(3deg);\"></div>\n      <div class=\"line horizontal\" style=\"top:80vh; left:-10vw; width:120vw; height:2px; transform:rotate(-1deg);\"></div>\n    </div>\n    <div style=\"display: contents\">" + body + "</div>\n  </body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "135kc1c"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let handleValidationError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		handleValidationError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
