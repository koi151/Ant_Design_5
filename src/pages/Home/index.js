import { memo } from 'react';
import { Row, Col } from 'antd';
import CartItem from '../../component/CardItem/cardItem';
import Statistic from '../../component/Statistic/statistic';

import { AiOutlineDollarCircle, AiOutlineLineChart, AiOutlineBook, AiOutlineUser } from "react-icons/ai";

function Home() {
  return (
    <>
      <Row gutter={[20, 20]} className='mb-20'>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CartItem>
            <Statistic icon={<AiOutlineDollarCircle />} value={'$23,523'} label={'Profit'} color='blue'/>
          </CartItem>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CartItem>
            <Statistic icon={<AiOutlineLineChart />} value={'+17.21%'} label={'Growth'} color='green'/>
          </CartItem>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CartItem>
            <Statistic icon={<AiOutlineBook />} value={'3,685'} label={'Orders'} color='yellow'/>
          </CartItem>
        </Col>
        <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
          <CartItem>
            <Statistic icon={<AiOutlineUser />} value={'1,832'} label={'Customers'} color='purple'/>
          </CartItem>
        </Col>
      </Row>

      <Row gutter={[20,20]} className='mb-20'>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CartItem>
            <div style={{height: '400px'}}>
              Total Revenue
            </div>
          </CartItem>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem>
            <div style={{height: '400px'}}>
              Customers
            </div>
          </CartItem>
        </Col>
      </Row>

      <Row gutter={[20,20]} className='mb-20'>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem>
            <div style={{height: '400px'}}>
              $17,267
            </div>
          </CartItem>
        </Col>
        <Col xxl={16} xl={16} lg={16} md={24} sm={24} xs={24}>
          <CartItem>
            <div style={{height: '400px'}}>
              Top Product
            </div>
          </CartItem>
        </Col>
      </Row>

      <Row gutter={[20,20]} className='mb-20'>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem>
            <div style={{height: '400px'}}>
              Latest Upload
            </div>
          </CartItem>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem>
            <div style={{height: '400px'}}>
              Activity
            </div>
          </CartItem>
        </Col>
        <Col xxl={8} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CartItem>
            <div style={{height: '400px'}}>
              Task
            </div>
          </CartItem>
        </Col>
      </Row>

    </>
  )
}

export default memo(Home);