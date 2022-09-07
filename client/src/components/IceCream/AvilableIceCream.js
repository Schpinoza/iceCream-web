import { useEffect, useState } from "react";
import Card from "../UI/Card";
import IceCreamItem from "./IceCreamItem/IceCreamItem";
import APIRequests from "../../services/APIRequests.js";

function AvilableIceCream() {
  const [iceCreams, setIceCreams] = useState([]);
  const [isLoadding, setIsLoadding] = useState(false);

  const getIceCreams = async () => {
    const allIceCream = await APIRequests.getIceCreams();
    setIceCreams(allIceCream);
    setIsLoadding(false);
  };

  useEffect(() => {
    getIceCreams();
  }, []);

  return (
    <Card>
      {!isLoadding &&
        iceCreams.map((iceCream) => {
          return <IceCreamItem iceCream={iceCream} key={iceCream._id} />;
        })}
      {isLoadding && <div>Is Loadding...</div>}
    </Card>
  );
}

export default AvilableIceCream;
