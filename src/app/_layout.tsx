import { Slot } from "expo-router";
import React from "react";
import { AuthProvider } from "../contexts/authContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
