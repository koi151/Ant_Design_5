import { Button, Modal, Tooltip, message } from "antd";
import { EditOutlined } from '@ant-design/icons';
import { useState } from "react";
import RoomForm from "../CreateRoom/RoomForm/roomForm";

function EditRoom({record, onReload}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  }

  const handleModalCancel = () => {
    // form.resetFields();
    setIsModalOpen(false);
  }
  
  return (
    <>
      {contextHolder}
      <Tooltip title="Edit info" color="blue">
        <Button 
          type="primary" ghost
          icon={<EditOutlined />}
          record={record}
          className="ml-20"
          onClick={handleModalOpen}
        />
      </Tooltip>

      <Modal title="Edit Room" open={isModalOpen} onCancel={handleModalCancel} 
             width={800} footer={null}>
        <RoomForm recordGiven={record} onReload={onReload} 
                  messageApi={messageApi} />  
      </Modal>
    </>
  )
}

export default EditRoom;