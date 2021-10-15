import React from "react";
import { Link } from "react-router-dom";
import StatisticData from "../components/Statistic/StatisticData";
import ProductState from "../context/Products/ProductState";



const Statistic=()=>{
    return(
      <>
      <li>
        <ul>
          <Link to="/statistic"></Link>
        </ul>
      </li> 
      <div>
      <ProductState>
      <h1 className="headingOfStatistic">Statistic</h1>
      <StatisticData /> 
      </ProductState>
      </div>
      </>
    )
}

export default Statistic;