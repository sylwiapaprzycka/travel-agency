import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({ currentValue, setOptionValue, limits, price}) => (

  <div className={styles.number}>
    <input
      className={styles.inputSmall}
      type='number'
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    ({formatPrice(price)})
  </div>

);

OrderOptionNumber.propTypes = {
  values: PropTypes.any,
  currentValue: PropTypes.node,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  price: PropTypes.node,
  limits: PropTypes.any,
};

export default OrderOptionNumber;
