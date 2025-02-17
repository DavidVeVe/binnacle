import { useEffect, useState, useReducer } from "react";
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
import TimerLayout from "../TimerLayout";
import { newServiceFormReducer } from "../reducers/dailyRecordReducer";

const getProfileUrl = (id) => `${SERVER_URL}/profile/${id}`;

const DAILY_RECORD_TEXT = "Estos son tus servicios de hoy:";
const CASHOUT_TEXT = "Hacer corte";
const NEW_SERVICE_TEXT = "Nuevo servicio";
const HOME = "Inicio";

const getSddServiceOptions = (data) => {
  return {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  };
};

export default function DailyRecord() {
  const { profileId } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [view, setView] = useState("record");
  const [serviceHoursState, dispatch] = useReducer(newServiceFormReducer, {
    hours: 0,
    minutes: 0
  });

  const startServiceHandler = async (e) => {
    e.preventDefault();

    const today = new Date();
    today.setTime(today.getTime());

    const bodyObj = {
      ...serviceHoursState,
      date: today,
      startTime: today.getTime()
    };

    try {
      const response = await fetch(
        `${SERVER_URL}/profile/${profileId}/addService`,
        getSddServiceOptions({ id: profileId, data: bodyObj })
      );

      if (response.ok) {
        dispatch({
          type: "startService",
          payload: {
            minutes: +minutes,
            hours: +hours,
            endTime: response.endTime
          }
        });
        showModalHandler();
        setView("timer");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <NewServiceForm
        showModalHandler={showModalHandler}
        serviceTime={serviceHoursState}
        startServiceHandler={startServiceHandler}
        dispatchInputHandler={dispatch}
      />
    </Modal>
  );
  console.log(serviceHoursState);
  const getMainContent = (view) => {
    switch (view) {
      case "record":
        return (
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
      case "timer":
        // return <TimerLayout setViewCB={setView} serviceTime={} />;
        return (
          <TimerLayout setViewCB={setView} serviceTime={serviceHoursState} />
        );
      default:
        break;
    }
  };

  const MainContent = getMainContent(view);

  return (
    <>
      {ModalComponent}
      {MainContent}
    </>
  );
}
