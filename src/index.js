import React from "react";
import ReactDOM from "react-dom";
import Spinner from "react-spinkit";
import Loadable from "react-loadable";
import { Provider } from "mobx-react";
import Frontend from "./store/frontend";

const Prov = props => <Provider store={Frontend}>{props.children}</Provider>;
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
