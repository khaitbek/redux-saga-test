import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageLoader } from "../components/Loader/Loader";
import { Provider } from 'react-redux'
import { store } from "../lib/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RootLayout } from "../layouts/root";

const Home = lazy(async () => await import("../pages/Home/Home"));
const About = lazy(async () => await import("../pages/About/About"));
const Profile = lazy(async () => await import("../pages/Profile/Profile"));

const queryClient = new QueryClient();

export function RootProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <RootLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users/:id" element={<Profile />} />
              </Routes>
            </RootLayout>
          </Suspense>
        </BrowserRouter>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}