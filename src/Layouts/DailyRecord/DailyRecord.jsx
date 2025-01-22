import { useParams } from "react-router";
import { getSingleProfile } from "../../requestHandlers/profiles";
import Table from "../../components/Table";
import { useContext } from "react";
import { ProfilesContext } from "../../App";

const DailyRecord = () => {
  const profile = useContext(ProfilesContext);
  console.log(profile);
  const { profileId } = useParams();
  console.log(getSingleProfile);
  return <Table></Table>;
};

export default DailyRecord;
