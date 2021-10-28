import axios from 'axios';

class item {
    serverPath = 'https://git.heroku.com/limitless-retreat-60716.git';
    getCatalogs = async () => {
        try {
            const response = await axios.get(serverPath + '/api/getCatalogs');
            return response;
        } catch (error) {
            console.log(error);
        }
    };
    getProducts = async () => {
        try {
            const response = await axios.get(serverPath + '/api/getProducts');
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    getProductsForCatalog = async (id) => {
        try {
            const response = await axios.post(
                serverPath + '/api/getProductsForCatalog',
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
            const response = await axios.post(serverPath + '/api/sendMessage', {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                message: message,
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    };
}

export default new item();
