import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import { Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';


const OrderForm = ({tripCost, options}) => (
  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option}/>
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
    </Col>

  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.node,
};

export default OrderForm;
