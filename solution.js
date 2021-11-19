let averageAmount = [
    {
        "shop": "Paris I",
        "amount": 702.1818181818181
    },
    {
        "shop": "Paris II",
        "amount": 3279.6666666666665
    },
    {
        "shop": "Lyon I",
        "amount": 715.7142857142857
    },
    {
        "shop": "Lyon II",
        "amount": 515.1666666666666
    },
    {
        "shop": "Lille",
        "amount": 648.8571428571429
    },
    {
        "shop": "Bordeaux",
        "amount": 602.5
    }
]

let sortShops = [
    {
        "shop": "Paris II",
        "amount": 3279.6666666666665
    },
    {
        "shop": "Lyon I",
        "amount": 715.7142857142857
    },
    {
        "shop": "Paris I",
        "amount": 702.1818181818181
    },
    {
        "shop": "Lille",
        "amount": 648.8571428571429
    },
    {
        "shop": "Bordeaux",
        "amount": 602.5
    },
    {
        "shop": "Lyon II",
        "amount": 515.1666666666666
    }
]

let image = 'filter: grayscale(1);'


shops.map(s => ({
    shop: s.name,
    amount: parseFloat(s.transactions.reduce((acc, cur) => {
        return acc + cur.amount
    }, 0) / s.transactions.length)
}))

shops.map(s => ({
    shop: s.name,
    amount: parseFloat(s.transactions.reduce((acc, cur) => {
        return acc + cur.amount
    }, 0))
}))
    .sort((a, b) => (a.amount < b.amount) ? 1 : -1)

