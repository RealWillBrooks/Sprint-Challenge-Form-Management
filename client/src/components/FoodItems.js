import React from 'react';


const FoodItems = (props) => {
    
          return(
              <div className="foodItem">
                <h1>{props.name}</h1>
                <h2>{props.course}</h2>
                <h3>{props.tech}</h3>
              </div>
          )
      }

export default FoodItems;