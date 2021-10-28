import axios from 'axios';

class item {
    serverPath = 'https://limitless-retreat-60716.herokuapp.com';
    getCatalogs = async () => {
        try {
            const response = await axios.get(
                this.serverPath + '/api/getCatalogs'
            );
            return response;
        } catch (error) {
            console.log(error);
        }
    };
    getProducts = async () => {
        try {
            const response = await axios.get(
                this.serverPath + '/api/getProducts'
            );
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    getProductsForCatalog = async (id) => {
        try {
            const response = await axios.post(
                this.serverPath + '/api/getProductsForCatalog',
                {
                    catalogId: id,
                }
            );
            return response;
        } catch (error) {
            console.log(error);
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
            console.log(error);
        }
    };
}

export default new item();
