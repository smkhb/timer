import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefatultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefatultLayout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  );
}
