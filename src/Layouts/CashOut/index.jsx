import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import {
  getSingleProfile,
  getProfileUrl
} from "../../requestHandlers/profiles";
import Text from "../../components/Text";
import { getCurrentDate } from "../helper";

export default function CashOut() {
  const { profileId } = useParams();
  const [dayPrice, setDayPrice] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await getSingleProfile(getProfileUrl(profileId));
      const priceCollection = response.data.currentServices.map(
        (item) => item.price
      );
      const profilePrice = priceCollection.reduce((acc, curr) => {
        return (acc += curr);
      });
      setDayPrice(profilePrice);
    };
    getData();
  }, []);

  return (
    <section>
      <Link to={"/"}>Inicio</Link>
      <Text element="h1">{getCurrentDate()}</Text>
      <Text element="h2">Total a pagar</Text>
      <Text element="h3">{`$${dayPrice}`}</Text>
    </section>
  );
}
