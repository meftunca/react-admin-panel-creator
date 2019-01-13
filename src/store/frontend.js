import { observable, action } from "mobx";

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
  @observable profileDrawer = false;

  @action update_profileDrawer = par => (this.profileDrawer = par);
  @action update_login = par => (this.login = par);
  @action update_registerPage = par => (this.registerPage = par);
  @action update_userData = par => (this.userData = par);

  //logOut
  @action logout = () => {
    localStorage.removeItem("data");
    this.login = false;
    this.registerPage = true;
    this.userData = {};
    this.profileDrawer = false;
  };
}

const Frontend = new Store();

export default Frontend;
