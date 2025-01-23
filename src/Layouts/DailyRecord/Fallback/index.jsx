import Text from "../../../components/Text";

const NO_SERVICES_TEXT = "Aun no tienes servicios el día de hoy.";

export default function FallBackDailyRecord() {
  return <Text element="h1">{NO_SERVICES_TEXT}</Text>;
}
