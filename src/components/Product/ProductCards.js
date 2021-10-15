import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";


// Display products with Image, brand Name, Description and Price
const ProductCardS=props=>{
  let priceDisplay;
  if(props.dataObj.priceO && props.dataObj.priceR){
    priceDisplay=<span><span className="priceRFont">€{props.dataObj.priceR}</span>  <strike>€{props.dataObj.priceO}</strike></span>
    }
    else if(props.dataObj.priceR=== undefined){  
        priceDisplay= <span className="priceRFont">{props.dataObj.priceO}</span>
      }else{
         priceDisplay= <span className="priceRFont">{props.dataObj.priceR}</span>
      }
  return(
        <Card className="cardItem">
          <Card.Img  variant="top" src={props.dataObj.images[0]}
          onMouseOver={e => (e.currentTarget.src = props.dataObj.images[1])}
          onMouseOut={e=>(e.currentTarget.src=props.dataObj.images[0])} /> 
        <Card.Body>
        <hr></hr>
          <Card.Title className="brandName">{props.dataObj.brand}</Card.Title>
          <Card.Text className="brandDes"> 
          {props.dataObj.description}</Card.Text>
          <Card.Text className="priceTag">
          {priceDisplay}
          </Card.Text>
      </Card.Body>        
      </Card> 
    )
}

export default ProductCardS;