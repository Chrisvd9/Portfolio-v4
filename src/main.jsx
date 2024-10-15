import React, { StrictMode, Suspense, createRef } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { ThemeProvider } from "./store/ThemeStore.jsx";
import Loader from "./components/ui/Loader.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./index.css";
import ScrollToTop from "./components/navigation/ScrollToTop.jsx";
import { Toaster } from "sonner";

const Home = React.lazy(() => import("./views/Home.jsx"));
const About = React.lazy(() => import("./views/About.jsx"));
const Contact = React.lazy(() => import("./views/Contact.jsx"));
const Works = React.lazy(() => import("./views/Works.jsx"));

const routes = [
  { path: "/", element: <Home />, nodeRef: createRef() },
  { path: "/about", element: <About />, nodeRef: createRef() },
  { path: "/contact", element: <Contact />, nodeRef: createRef() },
  { path: "/works", element: <Works />, nodeRef: createRef() },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: <Suspense fallback={<Loader />}>{route.element}</Suspense>,
    })),
  },
]);

function PageLayout() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <div className="min-h-screen flex items-center justify-center">
      <ScrollToTop />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div ref={nodeRef} className="w-full">
            {currentOutlet}
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
        <Toaster closeButton position="top-center" />
      </I18nextProvider>
    </ThemeProvider>
  </StrictMode>
);
