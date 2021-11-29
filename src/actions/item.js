import axios from 'axios';

class item {
    serverPath = 'https://node-server-it-lab.herokuapp.com';
    //serverPath = 'http://localhost:8888';
    getCatalogs = async () => {
        try {
            const response = await axios.get(
                this.serverPath + '/api/getCatalogs'
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    getProducts = async () => {
        try {
            const response = await axios.get(
                this.serverPath + '/api/getProducts'
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    getProduct = async (id) => {
        try {
            const response = await axios.get(
                this.serverPath + '/api/getProduct/' + id
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    getProductsForCatalog = async (id) => {
        try {
            const response = await axios.get(
                this.serverPath + '/api/getProductsForCatalog/' + id
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    addProduct = async (product) => {
        try {
            const response = await axios.post(
                this.serverPath + '/api/addProduct',
                {
                    about: product.about,
                    name: product.name,
                    price: product.price,
                    url: product.url,
                }
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    addCatalog = async (catalog) => {
        try {
            const response = await axios.post(
                this.serverPath + '/api/addCatalog',
                {
                    title: catalog.title,
                    url: catalog.url,
                    products: catalog.products,
                }
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    updateProduct = async (prod) => {
        try {
            const response = await axios.put(
                this.serverPath + '/api/updateProduct',
                {
                    product: prod,
                }
            );
            alert('Продукт обновлен');
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    updateCatalog = async (item) => {
        try {
            const response = await axios.put(
                this.serverPath + '/api/updateCatalog',
                {
                    catalog: item,
                }
            );
            alert('Продукт обновлен');
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    deleteProduct = async (id) => {
        try {
            const response = await axios.delete(
                this.serverPath + '/api/deleteProduct/' + id
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    deleteCatalog = async (id) => {
        try {
            const response = await axios.delete(
                this.serverPath + '/api/deleteCatalog/' + id
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    sendMail = async (email, name, phoneNumber, message) => {
        try {
            const response = await axios.post(
                this.serverPath + '/api/sendMessage',
                {
                    name: name,
                    email: email,
                    phoneNumber: phoneNumber,
                    message: message,
                }
            );
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    uploadFiles = async (files) => {
        try {
            const formData = new FormData();
            files.forEach((file) => {
                formData.append('file', file);
            });
            const response = await axios.post(
                this.serverPath + '/api/loadFiles',
                formData
            );
            alert('Файлы загружены на сервер!');
            return response;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
    getImg = async () => {
        try {
            const res = await axios.get(this.serverPath + '/api/getImg');
            let files = [];
            res.data.forEach((element) => {
                files.push(this.serverPath + '/img/' + element);
            });
            return files;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };

    getFiles = async () => {
        try {
            const res = await axios.get(this.serverPath + '/api/getFiles');
            console.log(res.data);
            let files = [];
            res.data.forEach((element) => {
                files.push(this.serverPath + '/' + element);
            });
            return files;
        } catch (error) {
            console.log(error.response);
            alert(error.response.data.message);
        }
    };
}

export default new item();
