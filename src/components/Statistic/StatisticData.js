import React, { useContext } from "react";
import { ProductContext } from "../../context/Products/ProductState";

// ? this function works for to find the brand which has the most products that cost less than 40
const brandByCostLessThan40 = (mergeArrayOfObj) => {
  //productData returns a new array of objects which has the priceR less than 40
  const productData = mergeArrayOfObj.filter((e) => e.priceR < 40);

  //sameBrand returns object with same brand name and its counter
  const sameBrand = productData.reduce((current, currentData) => {
    current[currentData.brand] = (current[currentData.brand] || 0) + 1;
    return current;
  }, {});

  //sameBrand gives an array of same brand counter
  const brandArray = Object.values(sameBrand);
  //maxValue gives max value from brandArray
  const maxValue = Math.max(...brandArray);

  // it returns brand name which has most products
  return Object.keys(sameBrand).find(
    (key) =>  sameBrand[key] === maxValue
  );
};

// ? this function works for to find the brand which offers the largest selection of sizes to the customer
const brandByLargestSelectionOfSizes = (mergeArrayOfObj) => {
  //here it return new array of objects with the largest selection of sizes, and push in newProductData
  let max = 0,
  newProductData = [];
  mergeArrayOfObj.forEach((obj) => {
    if (obj.sizes.length > max) {
      max = obj.sizes.length;
      newProductData = [obj];
    } else if (obj.sizes.length === max) {
      newProductData.push(obj);
    }
  });

  // sameBrand returns Objects with brand name and counter for same brand and return brand name and counter for same brand
  const sameBrand = newProductData.reduce((current, currentData) => {
    current[currentData.brand] = (current[currentData.brand] || 0) + 1;
    return current;
  }, {});
 
  // it returns keys name of objSameBrand
  return Object.keys(sameBrand);
};



const StatisticData = () => {
  const { mergeArrayOfObj } = useContext(ProductContext);

  return (
    <>
      <div className="statisticData">
        <h3>
          The brand which has the most products that cost less than 40 euros
        </h3>
        <ul>
          <li>
            <h5>{brandByCostLessThan40(mergeArrayOfObj)}</h5>
          </li>
        </ul>
      </div>

      <div className="statisticData">
        <h3>
          The brand which offers the largest selection of sizes to the customer
        </h3>
        <ul>
          {brandByLargestSelectionOfSizes(mergeArrayOfObj).map((brandName) => {
            return (
              <li>
                <h5>{brandName}</h5>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default StatisticData;
