import Vue from "vue";
import Vuex from "vuex";

import Menu from "../assets/data/menu.json";

//import coffee from "./modules/coffee";

Vue.use(Vuex);

export default new Vuex.Store({
  /*modules: {
    coffee: coffee
  },*/
  state: {
    menu: Menu,
    cart: []
  },
  mutations: {
    /*getMenu(state, menu) {
      state.menu = menu;
    }*/
    addCartItem(state, id) {
      state.cart.find(item => item.id == id).amount++;
    },
    minCartItem(state, id) {
      state.cart.find(item => item.id == id).amount--;
    },
    removeCartItem(state, id) {
      state.cart = state.cart.filter(item => item.id !== id);
    }
  },
  actions: {
    /*async GetMenu(ctx) {
      ctx.commit("getMenu", Menu.menu);
    }*/
    plusAmount({ commit }, id) {
      commit("addCartItem", id);
    },
    minusAmount({ commit }, id) {
      commit("minCartItem", id);
    },
    deleteCartItem({ commit }, id) {
      commit("removeCartItem", id);
    }
  }
});
