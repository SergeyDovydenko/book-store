import React from "react";

import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { BookPage } from "pages/BookPage";
import { FavoritePage } from "pages/FavoritePage";
import { MainPage } from "pages/MainPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/books/:id" element={<BookPage />} />
      <Route path="/favorites" element={<FavoritePage />} />
    </>
  )
);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
