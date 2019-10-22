import '../assets/styles/index.scss';

//import BestSellerSlider from "./components/home/best-seller/BestSellerSlider";

import ProductNewsList from "./components/home/product-news/ProductNewsList";
import MainProductList from "./components/home/main-product/MainProductList";
import AllProductsList from "./components/home/all-products/AllProductsList";
import BestSellerList from "./components/home/best-seller/BestSellerList";

const productnews = ((productnewslist) => {
    productnewslist.init();
})(ProductNewsList);

const mainproduct = ((mainproductlist) => {
    mainproductlist.init();
    //mainproductlist.slideItem();
})(MainProductList);

const bestseller = ((bestsellerlist) => {
    bestsellerlist.init();
})(BestSellerList);

const allproducts = ((allproducts) => {
    allproducts.init();
})(AllProductsList);


