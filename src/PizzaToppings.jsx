import React from 'react'
import { useState } from 'react';

const pizzaToppings = [
    {
        id: "o",
        topping: "onion",
    },
    {
        id: "m",
        topping: "margherita",
    },
    {
        id: "j",
        topping: "jalapeno",
    },
    {
        id: "p",
        topping: "pineapple",
    },
];


function PizzaToppings() {
    const [toppings, setToppings] = useState(pizzaToppings);
    function removeTopping(topping) {
        setToppings(toppings.filter(i => i !== topping))
    }
    return (<ul>
        {
            toppings.map((item) => (
                <li key={item.id}>
                    <label htmlFor={item.topping}>{item.topping}</label>
                    <input type="text" name={item.topping} id={item.id} defaultValue={item.topping} />
                    <button onClick={() => removeTopping(item)}>X</button>
                </li>
            )
            )
        }
    </ul>)
}

export default PizzaToppings