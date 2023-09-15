import { PlusOutlined } from '@ant-design/icons';
import { Button, Rate, Switch } from 'antd';
import { Link } from 'react-router-dom';
import RoomList from './RoomList/roomList';
import RoomListTable from './RoomListTable/roomListTable';
import { useState } from 'react';

function Room() {
  const [grid, setGrid] = useState(false);
  const rateDesc = ['terrible', 'bad', 'neutral', 'good', 'exellent']

  const handleChangeDisplay = () => {
    setGrid(!grid);
  }

  const getRatePoint = (value) => {
    console.log('RATED:', value);
  }

  return (
    <>
      <div className='room-manage'>
        <h3>Room Manage</h3>
        <br />
        <Link to={'/create-room'}>
          <Button icon={<PlusOutlined />}>Add new</Button>
        </Link>
        <Switch className='ml-20'
          onChange={handleChangeDisplay}
          checkedChildren="Display card"
          unCheckedChildren="Display table"
          defaultChecked
        />
      </div>
      {!grid ? (
        <RoomList/>
      ) : (
        <RoomListTable className="mt-20"/>
      )}
      <h3>Rate</h3>
      <Rate 
        allowHalf 
        defaultValue={2.5} 
        onChange={getRatePoint}
        tooltips={rateDesc} />
    </>
  )
}

export default Room;