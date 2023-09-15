import { Card, message } from "antd";
import { useEffect, useState } from "react";
import { getUtilsRoom } from "../../../services/utilsRoomService";
import RoomForm from "./RoomForm/roomForm";
import './createRoom.scss'

function CreateRoom() {
  const [options, setOptions] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getUtilsRoom();
      if (response) setOptions(response);
      console.log(response);
    }
    fetchAPI();
  }, [])

  return (
    <>
      {contextHolder}
      <Card className="create-room-wrapper">
        <h2 className="create-room-title">Create New Room</h2>
        <RoomForm options={options} messageApi={messageApi}/>
      </Card>
    </>
  )
}

export default CreateRoom;
