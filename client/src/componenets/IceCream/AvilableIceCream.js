import { useEffect, useState } from "react";
import Card from "../UI/Card";
import IceCreamItem from "./IceCreamItem/IceCreamItem";
import { useDispatch } from "react-redux";
import { addIceCream} from "../../store";
const axios = require('axios');


function AvilableIceCream() {
  const dispatch = useDispatch()
  const [iceCream, setIceCream] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);
  
  async function getIceCream() {
    try {
      const response = await axios.get("/v1/iceCream");
      const data = await response.data
      const loadedItems =[]
      for(const key in data){
        loadedItems.push({
          key:data[key]._id,
          id:data[key]._id,
          name:data[key].name,
          price:data[key].price,
          supplyAmount:data[key].supplyAmount,
        })
        setIceCream(loadedItems)
      }
      setIsLoadding(false)
  
    
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getIceCream()
  }, []);

  const handleSubmit = (product, amount) => {
    const item={
      ...product,
      amount:amount
    }
    dispatch(addIceCream(item))
  };
  return (
      <Card>
        {!isLoadding && iceCream.map((product) => {
          return (
            <IceCreamItem
              onClick={(amount) => {
                handleSubmit(product , amount);
              }}
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price}
              supplyAmount={product.supplyAmount}
            />
          );
        })}
        {isLoadding && <div>Is Loadding...</div>}
      </Card>
  );
}

export default AvilableIceCream;
