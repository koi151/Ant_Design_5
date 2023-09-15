import { Form, Input, InputNumber, Select, Row, Col, Switch, Button, notification, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import { createRoom, updateRoom } from "../../../../services/roomServer";
import { useState } from "react";

function RoomForm({ options, messageApi, recordGiven, onReload }) {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [spinning, setSpining] = useState(false);

  const handleFinishDefault = async (values) => {
    const response = await createRoom(values);
    if (response) {
      form.resetFields();
      messageApi.open({
        type: 'success',
        content: 'New room added !',
        duration: 3
      });
    }
    else {
      messageApi.open({
        type: 'error',
        content: 'Error occured, add new room failed !',
        duration: 4
      });
    }
  }

  const handleFinishRecordGiven = async (values) => {
    const response = await updateRoom(recordGiven.id, values);
    setSpining(true);
    setTimeout(() => {  // FOR TESTING SPIN ONLY, DO NOT NEED THIS  
      setSpining(false)
      if (response) {
        api.success({
          message: `Update room info successful !`,
          description: <>You have updated <strong>{recordGiven.roomName}</strong></>,
        });
      } else {
        api.error({
          message: `Error occured, update room information failed !`,
          description: <>You have updated <strong>{recordGiven.roomName}</strong></>,
        });  
      }
    }, 500);
    onReload();
  }

  return (
    <>
      {contextHolder}
      <Spin tip="Loading" spinning={spinning}>
        <Form 
          layout="vertical"
          onFinish={recordGiven ? handleFinishRecordGiven : handleFinishDefault} 
          initialValues={recordGiven ? recordGiven : 
          {
            roomQuantity: 1,
            numberOfPeople: 1
          }}
          form={form}
        >
          <Row gutter={[16,16]}>
            <Col xxl={14} xl={14} lg={14} md={24} sm={24} xs={24}>
              <Form.Item 
                label='Room Name' 
                name='roomName' 
                rules = {[{ 
                  required: true, 
                  message: 'Please input your room name'
                }]}>
                <Input placeholder=""/>
              </Form.Item>
            </Col>
            <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={24}>
              <Form.Item
                label='Room Quantity' 
                name='roomQuantity'
                rules = {[{ 
                  required: true, 
                  message: 'Please input room quantity'
                }]}>
                <InputNumber placeholder="" min={0} max={10} style={{width: '100%'}}/>
              </Form.Item>
            </Col>
            <Col xxl={5} xl={5} lg={5} md={12} sm={12} xs={24}>
              <Form.Item 
                label='Number of people' 
                name='numberOfPeople'
                rules = {[{ 
                  required: true, 
                  message: 'Please input the number of people'
                }]}>
                <InputNumber min={0} max={30} style={{width: '100%'}} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16,16]}>
            <Col xxl={24} xl={24} lg={24}>
              <Form.Item 
                label='Notes'
                name='notes' 
              >
                <TextArea placeholder="Enter your notes here..." rows={3}/>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16,16]} className="row-test">
            <Col xxl={12} xl={12} lg={12} className="col-test">
              <Form.Item label='Description' name='utils'>
                <Select
                  mode="multiple"
                  placeholder="Please select"
                  options={options}
                />
              </Form.Item>
            </Col>
            <Col xxl={6} xl={6} lg={6}>
              <Form.Item label='Status' name='status' valuePropName="checked" className="col-test__form">
                <Switch 
                  checkedChildren='Room available'
                  unCheckedChildren='Out of room'/>
              </Form.Item>
            </Col>
            <Col xxl={6} xl={6} lg={6}>
              <Form.Item label='Room Type' name='VIPRoom' valuePropName="checked" className="col-test__form">
                <Switch
                //   initialValues 
                  checkedChildren='VIP' 
                  unCheckedChildren='Standard'/>
              </Form.Item>
            </Col>
          </Row>
            <Col span={24}>
              <Form.Item>
                <Button type='primary' htmlType="submit">
                  {recordGiven ? "Update" : "Create" }
                </Button>
              </Form.Item>
            </Col>
        </Form>
      </Spin>
    </>
  )
}

export default RoomForm;