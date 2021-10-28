import Vue from 'vue';
import catalogModule from './catalogModule';

export default {
    state: {
        cart: [],
        cartCount: 0,
    },
    mutations: {
        addToCart(state, item) {
            let found = state.cart.find((product) => product.id == item.id);
            if (found) {
                found.quantity++;
                found.totalPrice = found.quantity * found.price;
            } else {
                state.cart.push(item);

                Vue.set(item, 'quantity', 1);
                Vue.set(item, 'totalPrice', item.price);
            }
            state.cartCount++;
        },
        removeFromCart(state, item) {
            let index = state.cart.indexOf(item);

            if (index > -1) {
                let product = state.cart[index];
                state.cartCount -= product.quantity;

                state.cart.splice(index, 1);
            }
        },
        setCartProduct(state, id) {
            state.cart.forEach((element) => {
                if (element.id == id) {
                    catalogModule.state.currentProduct = element;
                }
            });
        },
    },
    getters: {
        getCart(state) {
            return state.cart;
        },
        getCartCount(state) {
            return state.cartCount;
        },
    },
    actions: {},
};
