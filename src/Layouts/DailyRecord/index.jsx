import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProfile } from "../../requestHandlers/profiles";
import { SERVER_URL } from "../../common/constants/profile";
import Table from "../../components/Table";
import Text from "../../components/Text";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import FallBackDailyRecord from "./Fallback";

const getProfileUrl = (id) => `${SERVER_URL}/profile/${id}`;

const DAILY_RECORD_TEXT = "Estos son tus servicios de hoy:";
const CASHOUT_TEXT = "Hacer corte";
const NEW_SERVICE_TEXT = "Nuevo servicio";

export default function DailyRecord() {
  const { profileId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [isVisible, setIsModalVisible] = useState(false);

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
    console.log("cash out handler");
  };

  const avatarName = <Text element="span">{profileData?.name || ""}</Text>;

  const showModalHandler = (event, value) => {
    console.log("clicked showModalHandler")
    event.stopPropagation();
    setIsModalVisible((prevState) => value || !prevState);
  };

  console.log(profileData?.currentServices);

  const DailyRecordContent =
    profileData?.currentServices.length > 0 ? (
      <>
        <Text element="h1">{DAILY_RECORD_TEXT}</Text>
        <Table data={profileData?.currentServices || []} />
      </>
    ) : (
      <FallBackDailyRecord />
    );

  return (
    <>
      <Modal isVisible={isVisible} showModalHandler={showModalHandler}>
        {"this is modal content test"}
      </Modal>
      <section className="dailyrecord__container">
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
    </>
  );
}
