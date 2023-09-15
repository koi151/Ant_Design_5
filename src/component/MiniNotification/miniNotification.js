import { memo } from 'react';
import { Button, Dropdown } from 'antd'; 

import './miniNotification.scss';
import { BellOutlined, MailOutlined, UserAddOutlined, WarningOutlined, CloudUploadOutlined } from '@ant-design/icons'

function MiniNotification () {

  const sampleData = [
    {
      id: 1,
      icon: <MailOutlined />,
      iconColor: 'blue',
      content: 'Your received a new message',
      time: '8 min ago'
    },
    {
      id: 2,
      icon: <UserAddOutlined />,
      iconColor: 'green',
      content: 'New user registered',
      time: '7 hours ago'
    },
    {
      id: 3,
      icon: <WarningOutlined />,
      iconColor: 'red',
      content: 'System alert',
      time: '8 hours ago'
    },
    {
      id: 4,
      icon: <CloudUploadOutlined />,
      iconColor: 'yellow',
      content: 'You have a new update',
      time: '2 day ago'
    },
  ]

  return (
    <>
       <Dropdown
        menu = {{
          sampleData
        }}
        trigger={['click']}
        placement="bottomRight"
        className='notification'
        overlayClassName='notification__dropdown'
        dropdownRender={(menu) => (
          <>
            <div className='notification__head'>
              <div className='notification__head-left'>
                <div className='notification__head-left--icon'>
                  <BellOutlined />
                </div>
                <p className='notification__head-left--title'>
                  Notification
                </p>
              </div>
              <div className='notification__head-right'>
                <Button className='notification__head-right--view-btn' type="link" size="small">
                  View All
                </Button>
              </div>
            </div>
            <div className='notification__body'>
            {sampleData.map(item => (
              <div className='notification__item' key={item.id}>
                <div className={'notification__item-icon ' + (item.iconColor && `${item.iconColor}-icon`)}>
                  {item.icon}
                </div>
                <div className='notification__item-info'>
                  <div className='notification__item-info--title'>
                    {item.content}
                  </div>
                  <div className='notification__item-info--time'>
                    {item.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
          </>
        )}
      >
        <Button icon={<BellOutlined style={{fontSize: '1.1rem'}}/>} className='notify-btn'></Button>
      </Dropdown>
    </>
  )
}

export default memo(MiniNotification);