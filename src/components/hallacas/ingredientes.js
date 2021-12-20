import React from "react";
import {hallacas} from '../../data/Navidad/Hallacas'

const IngredientsList = () =>{
    console.log(hallacas.ingredientes[1].name);
    return(
        <div> 
            {
            hallacas.ingredientes.map((x)=>
                <div>{x.name} - {x.quantity} {x.unit} para {x.componente} </div>
            )
            } 
        </div>
    )
}

export default IngredientsList