import { observable, action } from "mobx";
import Axios from "axios";
const location =
  process.env.NODE_ENV === "development"
    ? window.location.origin + ":3001"
    : "";

class Store {
  constructor() {
    let data = localStorage.getItem("data");
    if (data != undefined && data != null) {
      this.login = true;
      this.registerPage = false;
      this.userData = data;
    }
  }

  @observable login = false;
  @observable registerPage = true;
  @observable userData = {};

  @action update_login = par => (this.login = par);
  @action update_registerPage = par => (this.registerPage = par);
  @action update_userData = par => (this.userData = par);

  //default data
  @action construct() {
    Axios.post("/get-user-data").then(({ data }) => {
      for (let [k, v] of Object.entries(data)) {
        localStorage.setItem(k, JSON.stringify(v));
      }
      if (data.data != undefined && data.data != null) {
        this.login = true;
        this.registerPage = false;
        this.userData = data.data;
      }
    });
  }

  //logOut
  @action logout = () => {
    localStorage.removeItem("data");
    this.login = false;
    this.registerPage = true;
    this.userData = {};
    this.profileDrawer = false;
    window.location.reload();
  };
}

const Frontend = new Store();

export default Frontend;
