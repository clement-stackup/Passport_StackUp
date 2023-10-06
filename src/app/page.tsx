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

function App() {
  const [currentAccount, setCurrentAccount] = useState([]);

  async function getPassport() {
    const provider = passportInstance.connectEvm();
    try {
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }

  try {
    getPassport();
  } catch (error) {
    console.log(error);
  }

  return (
    <div className="App">
      <h1>Passport Frontend</h1>
      <div>
        <h2>Accounts</h2>
        <div
          style={{
            padding: "10px",
            color: "black",
          }}
        >{`Wallet address: ${currentAccount}`}</div>
      </div>
    </div>
  );
}
export default App;
