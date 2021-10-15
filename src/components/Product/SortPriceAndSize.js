import React,{useContext} from "react";
import { NavDropdown } from "react-bootstrap";
import "../../scss/product.scss"
import  { ProductContext } from "../../context/Products/ProductState";

const SortPriceAndSize=(props)=>{
  const {mergeArrayOfObj}= useContext(ProductContext)

  
  //display list of clothing sizes 
  let listOfSizes=[]
  for(let i=0;i<mergeArrayOfObj.length;i++){
      const keys= Object.values(mergeArrayOfObj[i].sizes)
      keys.forEach(e=>{
        if(!(listOfSizes.includes(e))){
            listOfSizes.push(e)
        }
      }) 
    }

    // Sort list of Sizes by alphabetically and numbers
    let alphabetSizes =[];
    let numberSize=[];
    let mergeAlphabetAndNumberArray=[];
    for(let value of listOfSizes){
     if(value.includes("S") || value.includes("X") || value.includes("M") || value.includes("L") ){
       alphabetSizes.push(value);
     }
     else{
      numberSize.push(value);
     }
     numberSize.sort((a,b)=>(a-b))
     mergeAlphabetAndNumberArray=alphabetSizes.concat(numberSize);
    }
  
 
  return(   
  <> 
  {/* Dropdown menu for filter by price */}
  <div className="sort">
   <NavDropdown value="test" title={props.text ? props.text : "Sort by: "} className="dropdown_menu" id="basic-nav-dropdown">
          <NavDropdown.Item className="list">What's New</NavDropdown.Item>
          <NavDropdown.Item className="list">Popularity</NavDropdown.Item>
          <NavDropdown.Item className="list">Better Discount</NavDropdown.Item>
          <NavDropdown.Item className="list" onClick={(e)=>props.sortLowToHigh(e.target.textContent)}>Price:Low to High</NavDropdown.Item>
          <NavDropdown.Item className="list" onClick={(e)=>props.sortHighToLow(e.target.textContent)}>Price:High to Low</NavDropdown.Item>
   </NavDropdown>

{/* Select bar for filter by Sizes */}
  <div className="filter_size">
      <label htmlFor="Size" className="size_label">Size:</label>
          <select onClick={props.sortBySize} >
            { mergeAlphabetAndNumberArray !== undefined &&  mergeAlphabetAndNumberArray.map((size,index) => {
            return (
          <option key={index}>{size}</option>
            );
            })
            }
      </select>  
  </div> 
</div> 
  </>
);
}
export default SortPriceAndSize;