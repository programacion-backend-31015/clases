
class ProductDTO {

    constructor(data) {
        this.name = data.name
        this.price = data.price
        this.stock = data.stock

        for (const currency of Cotizador.currencies) {
            this[`price_${currency}`] = Cotizador.getPriceFromCurrency(this.price, currency)
        }

    }

}

class Cotizador {

    static VALOR_USD = 5000
    static VALOR_EUR = 5350

    static currencies = ['usd', 'eur']

    static getPriceFromCurrency(price, currency) {
        switch (currency) {
            case 'usd':
                return price * Cotizador.VALOR_USD
            case 'eur':
                return price * Cotizador.VALOR_EUR
            default:
                return price
        }
    }

}

module.exports = ProductDTO