import { observable, action } from "mobx";

class Store {
  @observable id = 0;
  @observable remember_token = "";
  @observable login = false;
  @observable registerPage = true;
}

const Frontend = new Store();

export default Frontend;
