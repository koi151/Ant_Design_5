// GET API FUNCTION
import { get } from '../utils/request'

export const getUtilsRoom = async () => {
  const result = await get("utilsRoom");
  return result;
};