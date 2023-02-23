import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const MainPage = React.lazy(() => import("./pages/main/MainContainer"));
const SwapPage = React.lazy(() => import("./pages/swap/SwapContainer"));

export const AppRoutes: FC = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={"/"} />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/swap" element={<SwapPage />} />
    </Routes>
  );
};
