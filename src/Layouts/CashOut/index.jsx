import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { getSingleProfile } from "../../requestHandlers/profiles";
import Text from "../../components/Text";
import { getCurrentDate } from "../helper";
import Button from "../../components/Button";

export default function CashOut() {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const [dayPrice, setDayPrice] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await getSingleProfile(profileId);
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

  const goBackHandler = () => {
    navigate(-1);
  };

  const cashOutHandlder = async () => {};

  return (
    <section>
      <Link to={"/"}>Inicio</Link>
      <Button onClick={goBackHandler}>Go back</Button>
      <Text element="h1">{getCurrentDate()}</Text>
      <Text element="h2">Total a pagar</Text>
      <Text element="h3">{`$${dayPrice}`}</Text>
      <Button onClick={cashOutHandlder}>Hacer corte</Button>
    </section>
  );
}
