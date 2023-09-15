import { Checkbox, Col, DatePicker, Input, Radio, Row } from "antd";
import { useState } from "react";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

function BookingService() {
  const [dataForm, setDataForm] = useState({})

  const handleChangeServices = (e) => {
    let newState = {
      ...dataForm,
      service: e
    }
    setDataForm(newState);
  }

  console.log(dataForm);

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };

  const handleChangeTime = (_, dateString) => {
    let newState = {
      ...dataForm,
      date: dateString
    }
    setDataForm(newState);
  }

  const handleChangeInput = (e) => {
    let newState = {
      ...dataForm,
      [e.target.name]: e.target.value
    }
    setDataForm(newState);
  } 

  const handleChangeGift = (e) => {
    let newState = {
      ...dataForm,
      gift: e.target.value
    }
    setDataForm(newState);
  }

  return (
    <>
      <Row gutter={[15,15]}>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
          <p>Full Name:</p>
          <Input name='fullName' placeholder="Enter your full name" onChange={handleChangeInput}/>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
          <p>Phone:</p>
          <Input name='phoneNumber' placeholder="Enter your phone number" onChange={handleChangeInput}/>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={12} sm={24} xs={24}>
          <p>Email:</p>
          <Input name='email' placeholder="Enter your email" onChange={handleChangeInput}/>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={12} sm={24} xs={24}>
          <p>Number Of People:</p>
          <Input type="number" min={1} max={30} defaultValue={1}
                 name='numberOfPeople' placeholder="Enter number" onChange={handleChangeInput}/>
        </Col>
        <Col xxl={4} xl={4} lg={4} md={12} sm={24} xs={24}>
          <p>Room Quantity:</p>
          <Input type="number" min={1} max={5} defaultValue={1}
                 name='roomQuantity' placeholder="Enter quantity" onChange={handleChangeInput}/>
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <p>Select Service</p>
          <Checkbox.Group onChange={handleChangeServices}>
            <Checkbox value="Room A">Room A</Checkbox>
            <Checkbox value="Room B">Room B</Checkbox>
            <Checkbox value="Room C">Room C</Checkbox>
            <Checkbox value="Room D">Room D</Checkbox>
            <Checkbox value="Room E">Room E</Checkbox>
            <Checkbox value="Room F">Room F</Checkbox>
          </Checkbox.Group>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
          <p>Select day:</p>
          <RangePicker format={'DD/MM/YYYY'} disabledDate={disabledDate} onChange={handleChangeTime} style={{width: '100%'}}/>
        </Col>
        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
          <Radio.Group onChange={handleChangeGift}>
            <p>Select 1 gift</p>
            <Radio value={'hat'}>Hat</Radio>
            <Radio value={'pen'}>Pen</Radio>
            <Radio value={'notebook'}>Notebook</Radio>
          </Radio.Group>
        </Col >
        <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
          <p>Notes:</p>
          <TextArea name='note'onChange={handleChangeInput}
            autoSize={{
              minRows: 3,
            }}
            showCount
          />
        </Col >
      </Row>
    </>
  )
}

export default BookingService;