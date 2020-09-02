import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';


const OrderForm = ({tripCost, options}) => (
  <Row>
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
