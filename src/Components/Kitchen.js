import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopping } from "../Redux/Pizza/PizzaSlice";

function Kitchen() {
    const [ingridiant,setTopping] = useState({
        id:0,
        topping:"null"
    })
  const pizza = useSelector((state) => state.pizza);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Orders of today:</h2>
      <br />
      <hr />
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "left",
        }}
      >
        {pizza.map((order, key) => (
          <li key={key} style={{ textAlign: "left" }}>
            <div>
              <h5>Order num : {order.id }</h5>{" "}
            </div>
            <div>
              <h5>Order name:</h5> {order.name}
            </div>
            <div>
              <h5>Order ingridiant:</h5>{" "}
              {order.topping.map((t,k) => (
                <div key={k}>{t} |</div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <div>
        Choose order number:
        <input placeholder="id number" value={ingridiant.id} onChange={(e)=> setTopping({...ingridiant,id:e.target.value})} />
      </div>
      <div>
        Add Ingridiant to order :
        <input placeholder="thon" onChange={(e)=> setTopping({...ingridiant,topping:e.target.value})} />
      </div>
      <button
        onClick={() => dispatch(addTopping(ingridiant))}
      >
        Add Topping
      </button>
    </div>
  );
}

export default Kitchen;
