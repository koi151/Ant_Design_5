import { Card, QRCode } from "antd";

function Account() {
    return (
      <>
        <Card title='Basic infomation' className="mb-20">
        <QRCode
          errorLevel="H"
          // size={size}
          // iconSize={size / 4}
          value="https://daca.vn"
          icon="https://cdn.daca.vn/media/logo/favicon.ico"
        />
        </Card>
        <Card title='Change Password' className="mb-20">
          Content...
        </Card>
        <Card title='Address Details' className="mb-20">
          Content...
        </Card>
      </>
    )
  }
  
  export default Account;