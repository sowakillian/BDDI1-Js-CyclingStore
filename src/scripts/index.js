import '../assets/styles/index.scss';

import Header from "./components/global/header/header";
import ProductNewsList from "./components/home/product-news/ProductNewsList";
import MainProductList from "./components/home/main-product/MainProductList";
import AllProductsList from "./components/home/all-products/AllProductsList";
import BestSellerList from "./components/home/best-seller/BestSellerList";
import AllProductsLoadMore from "./components/home/all-products/AllProductsLoadMore";
import BestSellerSlider from "./components/home/best-seller/BestSellerSlider";

const header = ((header) => {
    header.preload();
    header.menuMob();
})(Header);

const productnews = ((productnewslist) => {
    productnewslist.init();
    setTimeout(() => {
        productnewslist.slideItem();
    }, 200);
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

const bestsellerslider = ((bestsellerslider) => {
    setTimeout(() => {
        bestsellerslider.rangeSlidesByPackets();
        bestsellerslider.displaySlides();
        bestsellerslider.moveSlides();
    }, 1000);
})(BestSellerSlider);

const allproducts = ((allproducts) => {
    allproducts.init();
})(AllProductsList);

const allproductsloadmore = ((allproductsloadmore) => {
    allproductsloadmore.loadMore();
})(AllProductsLoadMore);


