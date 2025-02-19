import { useEffect, useState, useReducer } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  getSingleProfile,
  getProfileUrl,
  postNewService
} from "../../requestHandlers/profiles";
import Table from "../../components/Table";
import Text from "../../components/Text";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import FallBackDailyRecord from "./Fallback";
import NewServiceForm from "./NewServiceForm";
import TimerLayout from "./TimerLayout";
import { newServiceFormReducer } from "../reducers/dailyRecordReducer";
import { getCurrentDate } from "./helper";

const DAILY_RECORD_TEXT = "Estos son tus servicios de hoy:";
const CASHOUT_TEXT = "Hacer corte";
const NEW_SERVICE_TEXT = "Nuevo servicio";
const HOME = "Inicio";

export default function DailyRecord() {
  const { profileId } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newService, dispatch] = useReducer(newServiceFormReducer, {
    hours: 0,
    minutes: 0,
    room: 0,
    view: "record",
    error: false,
    errorType: "",
    isLoading: false
  });

  //Retrieve profile data
  useEffect(() => {
    const getData = async () => {
      const response = await getSingleProfile(getProfileUrl(profileId));
      setProfileData(response.data);
    };
    getData();
  }, []);

  const today = new Date();
  today.setTime(today.getTime());

  const bodyObj = {
    ...newService,
    date: today,
    startTime: today.getTime(),
    date: getCurrentDate()
  };

  const startServiceHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await postNewService(profileId, bodyObj);

      if (newService.minutes > 0 || newService.hours > 0) {
        dispatch({
          type: "startService",
          payload: {
            minutes: newService.minutes,
            hours: newService.hours,
            endTime: response.endTime,
            view: "timer"
          }
        });
        showModalHandler();
      } else {
        dispatch({
          type: "error",
          payload: {
            error: true,
            errorType: "formValues"
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const newServiceBtnHandler = () => {
    setIsModalVisible((prevState) => !prevState);
  };

  const cashoutHandler = () => {
    console.log(profileData);
    navigate(`/profile/${profileId}/cash-out`);
  };

  const showModalHandler = (event, value) => {
    setIsModalVisible((prevState) => value || !prevState);
  };

  const endServiceCB = () => {
    dispatch({ type: "cancel" });
  };

  const cancelNewService = (e) => {
    e.preventDefault();
    showModalHandler();
  };

  const avatarName = <Text element="span">{profileData?.name || ""}</Text>;

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
        newService={newService}
        startServiceHandler={startServiceHandler}
        dispatchInputHandler={dispatch}
        cancelNewService={cancelNewService}
      />
    </Modal>
  );

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
        return (
          <TimerLayout
            endServiceCB={endServiceCB}
            newService={newService}
            profileData={profileData}
          />
        );
      default:
        break;
    }
  };

  const MainContent = getMainContent(newService.view);

  return (
    <>
      {ModalComponent}
      {MainContent}
    </>
  );
}
