const minimist = require('minimist')
const ProductsAPI = require('./api/products.api')

const argv = minimist(process.argv.slice(2))
const {cmd, type, id, name, price, stock} = argv

const productsAPI = new ProductsAPI(type)

async function exec() {

    try {
        console.log(cmd);
        switch (cmd.toLowerCase()) {
            case 'find':
                console.log(await productsAPI.find(id));
                break;
            case 'add':
                console.log(await productsAPI.add({
                    name, price, stock
                }));
                break;
            default:
                break;
        }
    } catch(error) {
        console.log(error);
    } finally {
        console.log('finished');
        process.exit()
    }

}

exec()

// Volvemos 22:56 arg.