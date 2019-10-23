import '../assets/styles/index.scss';

import ProductNewsList from "./components/home/product-news/ProductNewsList";
import MainProductList from "./components/home/main-product/MainProductList";
import AllProductsList from "./components/home/all-products/AllProductsList";
import BestSellerList from "./components/home/best-seller/BestSellerList";
import AllProductsLoadMore from "./components/home/all-products/AllProductsLoadMore";

const productnews = ((productnewslist) => {
    productnewslist.init();
})(ProductNewsList);

const mainproduct = ((mainproductlist) => {
    mainproductlist.init();
    setTimeout(() => {
        mainproductlist.slideItem();
    }, 200);
})(MainProductList);

const bestseller = ((bestsellerlist) => {
    bestsellerlist.init();
})(BestSellerList);

const allproducts = ((allproducts) => {
    allproducts.init();
})(AllProductsList);

const allproductsloadmore = ((allproductsloadmore) => {
    allproductsloadmore.loadMore();
})(AllProductsLoadMore);


