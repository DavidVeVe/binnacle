import { getAddServiceOptions } from "./common"
import { getProfileUrl } from "./common"

export const fetchCashOut = async (profileId, data) => {
    const response = await fetch(`${getProfileUrl(profileId)}/`, getAddServiceOptions(data))
}