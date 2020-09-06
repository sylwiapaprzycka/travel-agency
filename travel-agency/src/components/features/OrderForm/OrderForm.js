import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import { Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';
import OrderOption from '../OrderOption/OrderOption';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripName, tripId, tripCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const {contact, name} = options;

  if (name.length < 3) {
    window.alert('Name must be filled out');
    return;
  }
  if (contact.length < 7) {
    window.alert('Contact must be filled out');
    return;
  }

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    tripCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, tripId, tripName, tripCode}) => (
  <Row>
    {pricing.map(option => (
      <Col key={option.id} md={4}>
        <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary cost={tripCost} options={options}/>
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, tripCode)}>Order now!</Button>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.node,
  tripId: PropTypes.string,
  tripCode: PropTypes.string,
  tripName: PropTypes.string,
  setOrderOption: PropTypes.any,
};

export default OrderForm;
