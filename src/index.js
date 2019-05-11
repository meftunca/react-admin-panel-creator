import React from "react";
import ReactDOM from "react-dom";
import Spinner from "react-spinkit";
import Loadable from "react-loadable";
import { Provider } from "mobx-react";
import Frontend from "./store/frontend";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as serviceWorker from "./serviceWorker";
import { registerServiceWorker } from "./register-firebase-sw";
import { initializedFirebaseApp } from "./firebase-sw";
const theme = createMuiTheme(require("./theme.json"));

const Prov = props => (
  <MuiThemeProvider theme={theme}>
    <Provider store={Frontend}>{props.children}</Provider>
  </MuiThemeProvider>
);
const LoadableComponent = Loadable({
  loader: () => import("./backend/router/index"),
  loading: () => (
    <div className="loaderScreen">
      <Spinner name="line-scale-pulse-out" color="orange" />
    </div>
  )
});
registerServiceWorker();
Loadable.preloadReady().then(() => {
  ReactDOM.render(
    <Prov>
      <LoadableComponent />
    </Prov>,
    document.getElementById("root")
  );
});
serviceWorker.unregister();
initializedFirebaseApp;
