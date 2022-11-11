import got from 'got'

//IIFE
(async() => {
    try {
        const response = await got('https://jsonplaceholder.typicode.com/posts')
        console.log(response);
    } catch (error) {
        console.error(error);
    }
})();

(async() => {
    try {
        const { body } = await got.post('https://jsonplaceholder.typicode.com/posts', {
            json: {hii: 'Hii'},
            responseType: 'json'
        })
        console.log(body);
    } catch (error) {
        console.error(error);
    }
})();

// Volvemos en 22:28 arg