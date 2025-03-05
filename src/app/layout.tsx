"use client"; 

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="d-flex flex-column vh-100 bg-light">
          <h1>Apply to Jobs</h1>
          <div className="d-flex flex-grow-1 bg-light mt-5 fixed-top">
            <Sidebar />
            <div className="flex-grow-1 p-3 justify-content-center align-items-center">
              <Provider store={store}>{children}</Provider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
