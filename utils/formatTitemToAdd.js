export const formatItemToAdd = (p, price, size, color) => {
    return {
        id: price.id,
        price: price.unit_amount_decimal.slice(0, -2),
        currency: price.currency.toUpperCase(),
        prodId: p.id,
        name: p.name,
        size: size,
        color: color,
        image: p.images[0]
    }
}
