export const formatItemToAdd = (p, price, size) => {
    return {
        id: price.id,
        price: price.unit_amount_decimal.slice(0, -2),
        currency: price.currency.toUpperCase(),
        prodId: p.id,
        name: p.name,
        size: size,
        image: p.images[0]
    }
}
