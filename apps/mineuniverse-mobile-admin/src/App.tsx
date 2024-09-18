import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StatusList } from "./status/StatusList";
import { StatusCreate } from "./status/StatusCreate";
import { StatusEdit } from "./status/StatusEdit";
import { StatusShow } from "./status/StatusShow";
import { ModsList } from "./mods/ModsList";
import { ModsCreate } from "./mods/ModsCreate";
import { ModsEdit } from "./mods/ModsEdit";
import { ModsShow } from "./mods/ModsShow";
import { SettingsList } from "./settings/SettingsList";
import { SettingsCreate } from "./settings/SettingsCreate";
import { SettingsEdit } from "./settings/SettingsEdit";
import { SettingsShow } from "./settings/SettingsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"MineuniverseMobile"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Status"
          list={StatusList}
          edit={StatusEdit}
          create={StatusCreate}
          show={StatusShow}
        />
        <Resource
          name="Mods"
          list={ModsList}
          edit={ModsEdit}
          create={ModsCreate}
          show={ModsShow}
        />
        <Resource
          name="Settings"
          list={SettingsList}
          edit={SettingsEdit}
          create={SettingsCreate}
          show={SettingsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
