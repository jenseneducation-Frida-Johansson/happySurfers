import Vue from "vue";
import Vuex from "vuex";

import * as API from "../API/api.js";

//import Menu from "../assets/data/menu.json";

//import coffee from "./modules/coffee";

Vue.use(Vuex);

export default new Vuex.Store({
  /*modules: {
    coffee: coffee
  },*/
  state: {
    menu: [],
    cart: [],
    order: {},
    totalPrice: 0,
    itemsNr: 0,
    user: null,
    history: [],
    showCart: true,
    bgColor: {
      color: "pink"
    }
  },
  mutations: {
    showMenu(state, data) {
      //console.log("get menu");
      state.menu = data;
      //console.log(state.menu);
    },
    addCartItem(state, id) {
      const findItem = state.cart.find(item => item.id == id);
      findItem.amount++;
      findItem.sumprice += findItem.price;
      state.totalPrice += findItem.price;
      state.itemsNr++;
    },
    minCartItem(state, id) {
      const findItem = state.cart.find(item => item.id == id);
      findItem.amount--;
      findItem.sumprice -= findItem.price;
      state.totalPrice -= findItem.price;
      state.itemsNr--;
    },
    removeCartItem(state, id) {
      const itemPrice = state.cart.find(item => item.id == id).price;
      state.totalPrice -= itemPrice;
      state.itemsNr--;
      state.cart = state.cart.filter(item => item.id !== id);
    },
    menuItemAdd(state, item) {
      state.cart.push(item);
      state.totalPrice += item.price;
      state.itemsNr++;
    },
    placeOrder(state, order) {
      state.order = order;
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();
      var date = yyyy + "-" + mm + "-" + dd;
      const orderDetail = {
        id: Date.now(),
        orderNr: order.orderNr,
        orderPrice: state.totalPrice,
        date: date
      };
      state.history.push(orderDetail);
      localStorage.setItem("userHistory", JSON.stringify(state.history));
    },
    cleanCart(state) {
      state.cart = [];
      state.totalPrice = 0;
      state.itemsNr = 0;
    },
    saveUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    }
  },
  actions: {
    async getMenu({ commit }) {
      //console.log("start fetch");
      const data = await API.getMenu();
      commit("showMenu", data);
      //console.log(data);
    },
    plusAmount({ commit }, id) {
      commit("addCartItem", id);
    },
    minusAmount({ commit }, id) {
      commit("minCartItem", id);
    },
    deleteCartItem({ commit }, id) {
      commit("removeCartItem", id);
    },
    addMenuItem({ commit }, addItem) {
      let findItem = this.state.cart.find(item => item.id === addItem.id);
      if (findItem) {
        commit("addCartItem", addItem.id);
      } else {
        commit("menuItemAdd", addItem);
      }
    },
    async getorder({ commit }) {
      const order = await API.pushOrder();
      commit("placeOrder", order);
      commit("cleanCart");
    },
    signUp({ commit }, user) {
      commit("saveUser", user);
    }
  }
});
