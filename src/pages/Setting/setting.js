import { Tabs } from "antd";
import Account from './Account/account';
import Network from './Network/network'
import Notification from './Notification/notification'


function Setting() {

  const tabList = [
    {
      key: '1',
      label: 'Account',
      children: <Account/>
    },
    {
      key: '2',
      label: 'Network',
      children: <Network/>
    },
    {
      key: '3',
      label: 'Notification',
      children: <Notification/>
    },
  ];

  return (
    <div className="setting">
      <h1>Setting</h1>
      <Tabs 
        defaultActiveKey="1" 
        items={tabList}
        className="mt-20" 
      />
    </div>
  )
}

export default Setting;