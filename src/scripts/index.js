import '../assets/styles/index.scss';

import MainProductSlider from "./components/home/main-product/MainProductSlider";
import BestSellerSlider from "./components/home/best-seller/BestSellerSlider";

import ProductNewsList from "./components/home/product-news/ProductNewsList";

const productnews = ((productnewslist) => {
    productnewslist.init();
})(ProductNewsList);