export const API = {
    topPage: {
        find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
        findProduct: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
        pageByAliace: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/'
    },
    review: {
        sendReview: process.env.NEXT_PUBLIC_DOMAIN + '/api/review/create-demo'
    }
}
