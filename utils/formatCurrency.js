export const formatCurrency = (amount = 0, currency = 'ISK') =>
    new Intl.NumberFormat('is', {
        style: 'currency',
        currency,
        minimumIntegerDigits: 4,
    }).format(amount);
