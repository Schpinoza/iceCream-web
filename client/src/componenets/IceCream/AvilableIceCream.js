import { useEffect, useState } from "react";
import Card from "../UI/Card";
import IceCreamItem from "./IceCreamItem/IceCreamItem";

import httpService from "../../services/htmlService.js"


const formatIceCreams = (iceCreams)=>{
  const formattedIceCreams =[]
      for(const key in iceCreams){
        formattedIceCreams.push({
          key:iceCreams[key]._id,
          id:iceCreams[key]._id,
          name:iceCreams[key].name,
          price:iceCreams[key].price,
          supplyAmount:iceCreams[key].supplyAmount,
        })
      }
      return  formattedIceCreams

}


function AvilableIceCream() {
  const [iceCreams, setIceCreams] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);
  
  const getIceCreams = async()=>{
    const rawIceCreams = await httpService.getIceCreams()
    const formattedIceCreams = formatIceCreams(rawIceCreams)
    setIceCreams(formattedIceCreams)
    setIsLoadding(false)
  }
  

  useEffect(() => {
    getIceCreams()
  }, []);

  return (
      <Card>
        {!isLoadding && iceCreams.map((iceCream) => {
          return (
            <IceCreamItem
              iceCream={iceCream}
              key={iceCream.id}
            />
          );
        })}
        {isLoadding && <div>Is Loadding...</div>}
      </Card>
  );
}

export default AvilableIceCream;
