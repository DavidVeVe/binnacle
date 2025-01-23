import Button from "../../../components/Button";

const START_NEW_SERVICE = "Iniciar servicio";
const CANCEL_NEW_SERVICE = "Cancelar";

export default function NewServiceForm() {
  return (
    <form>
    
      <Button>{START_NEW_SERVICE}</Button>
      <Button>{CANCEL_NEW_SERVICE}</Button>
    </form>
  );
}
