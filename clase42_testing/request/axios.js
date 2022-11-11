const axios = require('axios')

axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: { name: 'r2' },
    headers: { key: 'asdasd' }
})
    .then(response => console.log(response))
    .catch(e => console.error(e))
    .finally(() => console.log('END'))

axios.post(
    'https://jsonplaceholder.typicode.com/posts', 
    {aaa: 'Berrs'},
    {
        params: { name: 'r2' },
        headers: { key: 'asdasd' }
    }
)
    .then(response => console.log(response))
    .catch(e => console.error(e))
    .finally(() => console.log('END'))