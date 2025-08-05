

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.-aYg2UT6.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/VsLgT07n.js"];
export const stylesheets = [];
export const fonts = [];
