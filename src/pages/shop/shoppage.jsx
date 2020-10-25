import React from "react";
import {Route} from "react-router-dom";
import CategoryPage from "../category/category";
import CollectionsOverview from "../../components/collections-overview/collections-overview";

const ShopPage = ({match}) => {
    return (
        <div className="shop-page">
            <h1>Collection</h1>
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:categotyId`} component={CategoryPage} />
        </div>
    );
};

export default ShopPage;