type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined
};

export type RouteId = "/";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/.nojekyll" | "/AVENET.svg" | "/automation.png" | "/bajlando.webp" | "/favicon.svg" | "/laptop.png" | "/logo-kronos.png" | "/logo-my-deco.webp" | "/logo-po-sl.webp" | "/logo_rgb.png" | "/logo_ws.webp" | "/new-product.png" | "/rocket.png" | "/scg_logo.png" | "/security.png" | "/settings.png" | "/shopping-cart.png" | "/www_ico.png";