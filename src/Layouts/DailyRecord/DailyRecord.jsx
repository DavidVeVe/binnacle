import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProfile } from "../../requestHandlers/profiles";
import Table from "../../components/Table";
import { SERVER_URL } from "../../common/constants/profile";

const getProfileUrl = (id) => `${SERVER_URL}/profile/${id}`;

export default function DailyRecord() {
  const { profileId } = useParams();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getSingleProfile(getProfileUrl(profileId));
      setProfileData(response.data);
    };
    getData();
  }, []);

  return <Table data={profileData?.currentServices || []} />;
}
