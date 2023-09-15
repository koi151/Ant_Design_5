import { useEffect, useState } from "react";
import { deleteRoom, getRoomList } from "../../../services/roomServer";
import { Badge, Button, Popconfirm, Table, Tag, notification } from "antd";
import { DeleteOutlined, StarOutlined } from '@ant-design/icons'
import EditRoom from "../EditRoom/editRoom";

function RoomListTable() {
  const [rooms, setRooms] = useState([]);
  const [api, contextHolder] = notification.useNotification();

  const fetchAPI = async () => {
    const response = await getRoomList();
    setRooms(response.reverse());
  }

  useEffect(() => {
    fetchAPI();
  }, [])

  const handleReload = () => {
    fetchAPI();
  }

  const handleDeleteRow = async (record) => {
    const response = await deleteRoom(record.id);
    if (response) {
      api.success({
        message: `Row Deleted !`,
        description: <>You have deleted room <strong>{record.roomName}</strong></>,
      });
      handleReload();
    } else {
      api.error({
        message: `Failed to delete row !`,
        description: <>Delete failed, can not delete room <strong>{record.roomName}</strong></>,
      });
    }
  }

  const tableItems = [
    {
      title: 'Room name',
      dataIndex: 'roomName',
      key: 'roomName'
    },
    {
      title: 'Room Quantity',
      dataIndex: 'roomQuantity',
      key: 'roomQuantity',
    },
    {
      title: 'Customer Notes',
      dataIndex: 'notes',
      key: 'notes',
      render: (_, record) => (
        <>
          {record.notes ? (
            <>{record.notes}</>
          ) : (
            <>None</>
          )}
        </>
      )
    },
    {
      title: 'Description',
      dataIndex: 'utils',
      key: 'utils',
      render: (_, record) => (
        <>
          {record.utils.map((des, index) => (
            <div className="description" key={index}>
              {des}  
            </div>
          ))}
        </>
      )
    },
    {
      title: 'Room Type',
      dataIndex: 'VIPRoom',
      key: 'VIPRoom',
      render: (_, record) => (
        <>
          {record.VIPRoom === undefined || !record.VIPRoom ? (
            <Tag color="gray" style={{width: '5rem', textAlign: 'center'}}>Standard</Tag>
          ) : (
            <Tag color="gold"
                style={{width: '5rem', textAlign: 'center'}}
                icon={<StarOutlined />}
            >
              VIP
            </Tag>
          )}
        </>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_, record ) => (
        <>
          {record.status === undefined || !record.status ? (
            <Badge text="Out of room" color="red"/>
          ) : (
            <Badge text="Room available" color="green"/>
          )}
        </>
      )
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (_, record) => (
        <>        
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDeleteRow(record)}>
            <Button danger icon={<DeleteOutlined />}/>
          </Popconfirm>
          <EditRoom record={record} onReload={handleReload}/>
        </>
      )
    }
  ]

  return (
    <>
      {contextHolder}
      {rooms.length > 0 ? (
        <>
          <Table 
            dataSource={rooms} 
            columns={tableItems}
            rowKey="id"
          />;
        </>
      ) : (
        <div className="loading-theme">
          Loading...
        </div>
      )}
    </>
  )
}

export default RoomListTable;