import React from "react";
import ShopData from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collection: ShopData
        }
    }

    render(){
        const {collection} = this.state;

        return (<div className="shop-page">
           {
            collection.map(({id, ...otherCollectionProps}) => (
              <CollectionPreview key={id} {...otherCollectionProps} />
            ))
            }
        </div>);
    }
}

export default ShopPage;