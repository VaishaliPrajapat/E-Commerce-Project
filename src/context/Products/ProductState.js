import React, { createContext} from "react";
//import S3 from 'react-aws-s3';
export const ProductContext= createContext();

// ? used useContext for accessing data throughout the component hierarchy

const ProductState =(props)=>{
    var arrayOfObj = require('../../data.json');  
    
  //  for change priceR to PriceO
  const undefinedPriceRArr= arrayOfObj.filter(e=>e.priceR===undefined);
  const includePriceRArr=arrayOfObj.filter(e=>e.priceR);
     const replaceKeyForPriceR = undefinedPriceRArr.map(({
         priceO: priceR,
         ...rest
       }) => ({  
             priceR,
             ...rest
       }));
    const mergeArrayOfObj=[...includePriceRArr,...replaceKeyForPriceR] 
    return(
        <ProductContext.Provider value={{arrayOfObj, mergeArrayOfObj}}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductState;