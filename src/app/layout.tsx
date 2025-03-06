"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Sidebar from "./components/Sidebar";
import Header from "./components/header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="d-flex flex-column bg-light ">
          <div className="bg-dark text-light py-2 fixed-top">
            <Header />
          </div>

          <div className="d-flex flex-grow-1 bg-light mt-5">
            <div className="w-250 text-white vh-100 position-fixed">
              <Sidebar />
            </div>

            <div className="flex-grow-1 m-5 p-5 justify-content-center align-items-center overflow-y-auto">
              <Provider store={store}>{children}</Provider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
