import React, { useState, useEffect, useContext } from "react";
import ProductCardS from "./ProductCards";
import SortPriceAndSize from "./SortPriceAndSize";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../scss/product.scss";
import { ProductContext } from "../../context/Products/ProductState";

const List = () => {
  const { arrayOfObj, mergeArrayOfObj } = useContext(ProductContext);

  const [isFirstRender, setIsFirstRender] = useState(true);
  const [arrayOfObjState, setArrayOfObjState] = useState(arrayOfObj);
  const [mergeArrayOfObjState, setMergeArrayOfObjState] =useState(mergeArrayOfObj);
  const [sizeSelected, setSizeSelected] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("Sort by: ");
  const [targetSizeValue, setTargetSizeValue] = useState(" ");

  //this function works for to sort price by low to high and returns new array of objects
  const sortPriceLowToHigh = () => {
    setDropDownValue("Price: Low to High");

    setMergeArrayOfObjState(
      mergeArrayOfObjState.sort((a, b) => {
        return a.priceR - b.priceR;
      })
    );
  };

  //this function works for to sort price by high to low and returns new array of objects
  const sortPriceHighToLow = () => {
    setDropDownValue("Price: High to Low");

    setMergeArrayOfObjState(
      mergeArrayOfObjState.sort((a, b) => {
        return b.priceR - a.priceR;
      })
    );
  };

  //this function works for to filter products by size and returns new array of objects
  const filterProductsBySize = (event) => {
    setTargetSizeValue(event.target.value);
    setSizeSelected(true);

    setMergeArrayOfObjState(
      mergeArrayOfObj.filter((e) => e.sizes.includes(event.target.value))
    );
  };

  useEffect(() => {
    if (sizeSelected === true) {
      setIsFirstRender(false);
      switch (dropDownValue) {
        case "Price: Low to High":
          sortPriceLowToHigh();
          break;
        case "Price: High to Low":
          sortPriceHighToLow();
          break;
        default:
          break;
      }
      setSizeSelected(false);
    }
  },);

  if (dropDownValue === "Sort by: " && isFirstRender === true) {
    return (
      <>
        <SortPriceAndSize
          text={dropDownValue}
          sortLowToHigh={sortPriceLowToHigh}
          sortHighToLow={sortPriceHighToLow}
          sortBySize={filterProductsBySize}
          data={arrayOfObjState}
        />
        <div className="cardList">
          {arrayOfObj !== undefined &&
            arrayOfObj.map((currentObj,index) => {
              return <ProductCardS key={index} dataObj={currentObj} />;
            })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <SortPriceAndSize
          text={dropDownValue}
          sortLowToHigh={sortPriceLowToHigh}
          sortHighToLow={sortPriceHighToLow}
          sortBySize={filterProductsBySize}
          data={mergeArrayOfObjState}
        />
        <div className="cardList">
          {mergeArrayOfObjState !== undefined &&
            mergeArrayOfObjState.map((currentObj,index) => {
              return <ProductCardS key={index} dataObj={currentObj} />;
            })}
        </div>
      </>
    );
  }
};

export default List;
