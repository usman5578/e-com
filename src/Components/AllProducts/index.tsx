'use client'
import { Component } from "react";
import { ProductType } from "../utils/ProductDataTypes";
import Card from "../views/Card";

interface propsType {
    response:Array<ProductType>
}

export default class AllProductsCompo extends Component<{ProductData:propsType}>{
    getData =()=>{
        console.log(this.props.ProductData) 
    }
    render(){
        return (
            <div className="grid grid-cols-3" onClick={this.getData}>{this.props.ProductData.response.map((items:any, index:number)=>(
                <div key={index} >
                    <Card  singleProductData={items}/>
                </div>
            ))}</div>
        )
    }
}