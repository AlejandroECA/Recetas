import React from "react";
import {hallacas} from '../../data/Navidad/Hallacas'

const IngredientsList = () =>{

    // var set = new Set()
    // hallacas.ingredientes.map( x => set.add(x.name));
    // console.log(set);


    const total = hallacas.ingredientes.reduce((total,currentVal,index,arr) => { 

        var number = (total.findIndex(e => e.name === currentVal.name))

        // console.log(number);

        if(number !== -1){
            if(total[number].unit===currentVal.unit){
                total[number].quantity = Number(total[number].quantity) + Number(currentVal.quantity)
            }
            else{
                total[number].quantity = (total[number].quantity) +' and '+ (currentVal.quantity) 
                total[number].unit = (total[number].unit) +' and '+ (currentVal.unit) 
                total[number].final = total[number].final +' and '+ currentVal.quantity+' '+currentVal.unit

            }
        }
        else 
            total = [...total,{ name: currentVal.name, quantity:Number(currentVal.quantity), unit: currentVal.unit , final: currentVal.quantity+'  '+currentVal.unit }]

        return total
    },[])

    // console.log(total);

    const Categorize = ({array,name,variable}) => {

        return(
        <div>
        <h1>Para {name}:</h1> 
        {
            array.ingredientes.filter(x => x.componente === variable).map(x=>
                <div key={x.id}> {x.name} -  {x.quantity} {x.unit} </div>
            )
        }
        </div>
        )
    }

// 0: "Guiso"
// 1: "adorno"
// 2: "masa"
// 3: "envoltura"
// 4: "caldo"

    return(
        <div> 
            <h1>Total a comprar</h1>
            {total.map(x=>
                <div>{x.name} = {x.final}</div>
            )}
            <Categorize 
                array = {hallacas}
                name ={'El Caldo'}
                variable = {'caldo'}
            />
            <Categorize 
                array = {hallacas}
                name ={'El Guiso'}
                variable = {'Guiso'}
            />
            <Categorize 
                array = {hallacas}
                name ={'La Masa'}
                variable = {'masa'}
            />
            <Categorize 
                array = {hallacas}
                name ={'El Adorno'}
                variable = {'adorno'}
            />
            <Categorize 
                array = {hallacas}
                name ={'La Envoltura'}
                variable = {'envoltura'}
            />

        </div>
    )
}

export default IngredientsList