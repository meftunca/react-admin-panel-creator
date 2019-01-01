import {observable,action} from "mobx"


class Store {

    @observable id = 0;
}

const Frontend = new Store();

export default Frontend