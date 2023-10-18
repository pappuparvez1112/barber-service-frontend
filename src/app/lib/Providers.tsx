"use client";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Provider } from "react-redux";
import StyledComponentsRegistry from "./AndRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Provider store={store}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Provider>
    </SessionProvider>
  );
};

export default Providers;
