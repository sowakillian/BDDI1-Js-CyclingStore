import '../assets/styles/index.scss';

import BestSellerSlider from "./components/home/best-seller/BestSellerSlider";


import ProductNewsList from "./components/home/product-news/ProductNewsList";
import MainProductList from "./components/home/main-product/MainProductList";

const productnews = ((productnewslist) => {
    productnewslist.init();
})(ProductNewsList);

const mainproduct = ((mainproductlist) => {
    mainproductlist.init();
    //mainproductlist.slideItem();
})(MainProductList);


