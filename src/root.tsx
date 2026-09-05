import { StrictMode } from "react";
import { Outlet, Scripts, ScrollRestoration, Meta, Links, type LinksFunction } from "react-router";
import { Provider } from "@/components/ui/provider";
import favicon from "@/assets/qp.jpg";

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/jpeg", href: favicon },
];

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <StrictMode>
          <Provider>
            <Outlet />
          </Provider>
        </StrictMode>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
