import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { getSingleProfile } from "../../requestHandlers/profiles";
import { SERVER_URL } from "../../common/constants/profile";
import Table from "../../components/Table";
import Text from "../../components/Text";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import FallBackDailyRecord from "./Fallback";
import NewServiceForm from "./NewServiceForm";

const getProfileUrl = (id) => `${SERVER_URL}/profile/${id}`;

const DAILY_RECORD_TEXT = "Estos son tus servicios de hoy:";
const CASHOUT_TEXT = "Hacer corte";
const NEW_SERVICE_TEXT = "Nuevo servicio";
const HOME = "Inicio";

export default function DailyRecord() {
  const { profileId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await getSingleProfile(getProfileUrl(profileId));
      setProfileData(response.data);
    };
    getData();
  }, []);

  const newServiceBtnHandler = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  const cashoutHandler = () => {
    // console.log("cash out handler");``
  };

  const avatarName = <Text element="span">{profileData?.name || ""}</Text>;

  const showModalHandler = (event, value) => {
    setIsModalVisible((prevState) => value || !prevState);
  };

  const DailyRecordContent =
    profileData?.currentServices.length > 0 ? (
      <>
        <Text element="h1">{DAILY_RECORD_TEXT}</Text>
        <Table data={profileData?.currentServices || []} />
      </>
    ) : (
      <FallBackDailyRecord />
    );

  const ModalComponent = (
    <Modal isModalVisible={isModalVisible} showModalHandler={showModalHandler}>
      <NewServiceForm showModalHandler={showModalHandler} profileId />
    </Modal>
  );

  const MainContent = (
    <section className="dailyrecord__container">
      <Link to="/">{HOME}</Link>
      <Avatar textComponent={avatarName} />

      {DailyRecordContent}

      <section className="dailyrecord__buttons">
        <Button buttonType="button" onClick={newServiceBtnHandler}>
          {NEW_SERVICE_TEXT}
        </Button>
        <Button buttonType="button" onClick={cashoutHandler}>
          {CASHOUT_TEXT}
        </Button>
      </section>
    </section>
  );

  return (
    <>
      {ModalComponent}
      {MainContent}
    </>
  );
}
