import { del, get, patch, post } from "../utils/request"

export const createRoom  = async (options) => {
  const result = await post("rooms", options);
  return result;
}

export const updateRoom = async (id, options) => {
  const result = await patch(`rooms/${id}`, options);
  return result;
}

export const deleteRoom = async (id) => {
  const result = await del(`rooms/${id}`);
  return result;
}

export const getRoomList  = async () => {
  const result = await get("rooms");
  return result;
}

