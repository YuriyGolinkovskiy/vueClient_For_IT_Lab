import axios from 'axios';
import { getDatabase, ref, onValue } from 'firebase/database';
import item from '../actions/item';

export default {
    state: {
        catalogs: [],
        products: [],
        dialogVisible: false,
        currentPhoto: {},
        currentCategoryId: 1,
        currentProducts: [],
        currentProduct: {},
        currentProductsCategory: {
            promotionProducts: { index: [1, 6, 3], products: [] },
            topProducts: { index: [5, 4, 8], products: [] },
            bestCostProducts: { index: [7, 9, 2], products: [] },
        },
    },
    mutations: {
        setCatalogs(state) {
            var buff = [];
            item.getCatalogs().then((res) => {
                res.data.forEach((element) => {
                    buff.push(element);
                });
            });

            // const db = getDatabase();
            // const dbRef = ref(db, '/catalogs');

            // onValue(
            //     dbRef,
            //     (snapshot) => {
            //         snapshot.forEach((childSnapshot) => {
            //             const childKey = childSnapshot.key;
            //             const childData = childSnapshot.val();
            //             childData.id = Number(childKey);
            //             buff.push(childData);
            //         });
            //     },
            //     {
            //         onlyOnce: true,
            //     }
            // );
            state.catalogs = buff;
        },
        showDialog(state) {
            state.dialogVisible = true;
        },
        hideDialog(state) {
            state.dialogVisible = false;
        },
        setCurrentPhoto(state, payload) {
            state.currentPhoto = payload;
        },
        setCurrentProducts(state, categoryId) {
            state.currentCategoryId = categoryId;
            var products = [];
            item.getProductsForCatalog(categoryId).then((res) => {
                res.data.forEach((element) => {
                    products.push(element);
                });
            });
            // const db = getDatabase();
            // const dbRef = ref(db, '/products');

            // onValue(
            //     dbRef,
            //     (snapshot) => {
            //         snapshot.forEach((childSnapshot) => {
            //             const childKey = childSnapshot.key;
            //             const childData = childSnapshot.val();
            //             if (childData.categoryId === categoryId) {
            //                 childData.id = Number(childKey);
            //                 products.push(childData);
            //             }
            //         });
            //     },
            //     {
            //         onlyOnce: true,
            //     }
            // );
            state.currentProducts = products;
        },
        setProducts(state) {
            var products = [];
            item.getProducts().then((res) => {
                res.data.forEach((element) => {
                    products.push(element);
                });
            });
            // const db = getDatabase();
            // const dbRef = ref(db, '/products');
            // onValue(
            //     dbRef,
            //     (snapshot) => {
            //         snapshot.forEach((childSnapshot) => {
            //             const childKey = childSnapshot.key;
            //             const childData = childSnapshot.val();

            //             childData.id = Number(childKey);
            //             products.push(childData);
            //         });
            //         state.loading = true;
            //     },
            //     {
            //         onlyOnce: true,
            //     }
            // );
            state.products = products;
        },
        setCurrentProduct(state, id) {
            state.currentProducts.forEach((element) => {
                if (element.id == id) {
                    state.currentProduct = element;
                }
            });
        },
        setProduct(state, id) {
            state.products.forEach((element) => {
                if (element.id == id) {
                    state.currentProduct = element;
                }
            });
        },
        setCurrentCategoryProducts(state) {
            let c1 = [],
                c2 = [],
                c3 = [];

            state.currentProductsCategory.promotionProducts.index.forEach(
                (index) => {
                    c1.push(state.products[index - 1]);
                }
            );
            state.currentProductsCategory.topProducts.index.forEach((index) => {
                c2.push(state.products[index - 1]);
            });
            state.currentProductsCategory.bestCostProducts.index.forEach(
                (index) => {
                    c3.push(state.products[index - 1]);
                }
            );
            state.currentProductsCategory.promotionProducts.products = c1;
            state.currentProductsCategory.topProducts.products = c2;
            state.currentProductsCategory.bestCostProducts.products = c3;
        },
    },
    getters: {
        getAllCatalogs(state) {
            return state.catalogs;
        },
        getDialogVisible(state) {
            return state.dialogVisible;
        },
        getCurrentPhoto(state) {
            return state.currentPhoto;
        },
        getProductsInCategory(state) {
            return state.currentProducts;
        },
        getProductById(state) {
            return state.currentProduct;
        },
        getCurrentCategoryId(state) {
            return state.currentCategoryId;
        },
        getCurrentCategoryProducts(state) {
            return state.currentProductsCategory;
        },
    },
    actions: {
        setData(context) {
            axios
                .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then((response) =>
                    context.commit('setCatalogs', response.data)
                );
        },
    },
};
