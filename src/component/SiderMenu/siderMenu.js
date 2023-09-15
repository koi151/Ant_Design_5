import { Menu } from "antd";
import { DashboardOutlined, AppstoreOutlined, LayoutOutlined, PieChartOutlined, 
         FileOutlined, LockOutlined, BookOutlined, SettingOutlined } 
        from '@ant-design/icons'
import { Link, useLocation } from "react-router-dom";

function SiderMenu() {
  const location = useLocation();

  const items = [
    {
        key: 'Dashboard',
        label: 'Dashboard',
        icon: <DashboardOutlined />,
        children: [
            {
                key: '/',
                label: <Link to={'/'}>Home</Link>,
            },
            {
                key: '/crm',
                label: <Link to={'/crm'}>CRM</Link>,
            },
            // {
            //     key: '/booking-service',
            //     label: <Link to={'/booking-service'}>Booking Services</Link>,
            // }
        ]
    },
    {
        key: '/rooms-info',
        label: <Link to={'/rooms-info'}>Room Manage</Link>,
        icon: <BookOutlined />
    },
    {
        key: 'Apps',
        label: 'Apps',
        icon: <AppstoreOutlined />,
        children: [
            {
                key: 'Chat',
                label: 'Chat',
            },
            {
                key: 'File Manager',
                label: 'File Manager',
            },
            {
                key: 'Mail',
                label: 'Mail'
            },
            {
                key: 'Projects',
                label: 'Projects',
                children: [
                    {
                        key: 'Project List',
                        label: 'Project List',
                    },
                    {
                        key: 'Project Detail',
                        label: 'Project Detail',
                    }
                ]
            },
        ]
    },
    {
        key: 'Components',
        label: 'Components',
        icon: <LayoutOutlined />,
        children: []
    },
    {
        key: 'Chart',
        label: 'Chart',
        icon: <PieChartOutlined />,
        children: []
    },
    {
        key: 'Pages',
        label: 'Pages',
        icon: <FileOutlined />,
        children: [
            {
                key: '/setting',
                label: <Link to={'/setting'}>Setting</Link>,
                icon: <SettingOutlined />
            }
        ]
    },
    {
        key: 'Authentication',
        label: 'Authentication',
        icon: <LockOutlined />,
        children: []
    },
  ]

  return (
    <Menu items={items} 
          mode="inline"
          defaultOpenKeys={["Dashboard"]}
          defaultSelectedKeys={location.pathname}
          style={{overflowY: 'auto'}}
    />
  )
}

export default SiderMenu;