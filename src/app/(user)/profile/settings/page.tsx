import { getOwnUserInfo } from "@/services/user/api.server";
import SettingsForm from "./SettingsForm/SettingsForm";
const EditProfile = async () => {
  const userInfo = await getOwnUserInfo();

  return <SettingsForm userInfo={userInfo} />;
};

export default EditProfile;
