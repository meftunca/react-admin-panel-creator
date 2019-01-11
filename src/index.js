import React from "react";
import ReactDOM from "react-dom";
import Spinner from "react-spinkit";
import Loadable from "react-loadable";
import { Provider } from "mobx-react";
import Frontend from "./store/frontend";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme();

// install();

const Prov = props => (
  <MuiThemeProvider theme={theme}>
    <Provider store={Frontend}>{props.children}</Provider>
  </MuiThemeProvider>
);
const LoadableComponent = Loadable({
  loader: () => import("./backend/router/index"),
  loading: () => (
    <div className='loaderScreen'>
      <Spinner name='line-scale-pulse-out' color='fuchsia' />
    </div>
  ),
  delay: 10000,
  timeout: 15000
});

Loadable.preloadReady().then(() => {
  ReactDOM.render(
    <Prov>
      <LoadableComponent />
    </Prov>,
    document.getElementById("root")
  );
});
serviceWorker.unregister();
