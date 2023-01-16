const products = [
    {
        id:'1',
        name:'Volkswagen Tiguan Tdi 2.0 Sport Y Styl',
        category:'SUV',
        img:'https://www.karvi.com.ar/blog/wp-content/uploads/2021/03/Tiguan-850x502.jpg',
        stock: 5,
        price: 1000,
        description:'Podrás optar por una motorización 250 TSI de 150cv con caja DSG de 6 velocidades y tracción delantera o por el poderoso motor 350 TSI de 220 cv con caja DSG de 7 velocidades y tracción integral.'
    },
    {
        id:'2',
        name:'Ford Focus III 2.0 Sedan Se Plus Mt',
        category:'Sedan',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_785931-MLA53333867143_012023-F.webp',
        stock: 6,
        price: 3000,
        description:'blablabla'
    },
    {
        id:'3',
        name:'Audi A3 Sportback 2.0 T Fsi Stronic 200cv',
        category:'Hatchback',
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_609681-MLA50149450477_052022-F.webp',
        stock: 2,
        price: 2000,
        description:'blablabal'
    }
]

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}

export const getProductById = (id) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id ))
        },500)
    })
}

