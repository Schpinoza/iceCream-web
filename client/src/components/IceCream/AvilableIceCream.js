import { useEffect, useState } from "react";
import Card from "../UI/Card";
import IceCreamItem from "./IceCreamItem/IceCreamItem";
import APIRequests from "../../services/APIRequests.js";

function AvilableIceCream() {
  const [iceCreams, setIceCreams] = useState([]);
  const [isLoadding, setIsLoadding] = useState(true);

  const getIceCreams = async () => {
    const allIceCream = await APIRequests.getIceCreams();
    if (allIceCreams.length > 0) {
      setIsLoadding(false);
      return setIceCreams(allIceCream);
    }
  };

  useEffect(() => {
    getIceCreams();
  }, []);

  return (
    <Card>
      {!isLoadding &&
        iceCreams &&
        iceCreams.map((iceCream) => {
          return <IceCreamItem iceCream={iceCream} key={iceCream._id} />;
        })}
      {isLoadding && <div>Is Loadding...</div>}
    </Card>
  );
}

export default AvilableIceCream;
