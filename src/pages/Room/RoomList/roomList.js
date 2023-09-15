import { useEffect, useState } from "react";
import { getRoomList } from "../../../services/roomServer";
import { Badge, Card, Col, Row, Collapse } from "antd";
import './roomList.scss';

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await getRoomList();
      setRooms(response);
    }
    fetchAPI();
  }, [])

  const collapsedItems = [
    {
      key: '1',
      label: 'This is panel header 1',
      children: <p>Sample content 1</p>,
    },
    {
      key: '2',
      label: 'This is panel header 2',
      children: <p>Sample content 2</p>,
    },
    {
      key: '3',
      label: 'This is panel header 3',
      children: <p>Sample content 3</p>,
    },
  ];
  

  return (
    <>
      {rooms ? (
        <div className="room-list-wrapper">
          <Row gutter={[20, 20]} className="mt-20">
            {rooms.map(room => (
            <Col xxl={12} xl={12} lg={12} md={12} key={room.id}>
              <Badge.Ribbon 
                text={room.VIPRoom ? "VIP Room" : "Standard Room"}
                color={room.VIPRoom ? "gold" : "grey"}
              >
                <Card title='Room info:'>
                  <div className="room" key={room.id}>
                    <div className="room__title">
                      Room name: <b>{room.roomName}</b>
                  </div>
                  <div className="room__quantity">
                    Room quantity: <b>{room.roomQuantity}</b>
                  </div>
                  <div className="room__num-peple">
                    Number of people: <b>{room.numberOfPeople}</b>
                  </div>
                    {room.status === false ? (
                      <Badge color='red' text='Out of room'></Badge> 
                    ) : (
                      <Badge color='green' text='Room available'></Badge>
                    )}
                    </div>
                </Card>
              </Badge.Ribbon>
            </Col>
            ))}
          </Row>
        </div>
      ) : (
        <div className="loading-theme">
          Loading..
        </div>
      )}

      <Collapse 
        items={collapsedItems}
        expandIconPosition="end"
        accordion 
        className="collapsed-qna" />
    </>
  )
}

export default RoomList;