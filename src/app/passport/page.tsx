"use client";
import React, { useEffect, useState } from "react";
import { config, passport } from "@imtbl/sdk";

const passportInstance = new passport.Passport({
  baseConfig: new config.ImmutableConfiguration({
    environment: config.Environment.SANDBOX,
  }),
  clientId: "UnJJoSuUrqS6SE39A9GZ5sHTEJbUe0Zi",
  redirectUri: "http://localhost:3000/passport",
  logoutRedirectUri: "http://localhost:3000",
  audience: "platform_api",
  scope: "openid offline_access email transact",
});

export default function Passport() {
  useEffect(() => {
    window.addEventListener("load", function () {
      passportInstance.loginCallback();
    });
  }, []);

  return (
    <main>
      <h2>Passport Page</h2>
    </main>
  );
}
