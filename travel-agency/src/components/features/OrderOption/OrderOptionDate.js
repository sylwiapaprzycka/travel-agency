import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

//ZMIANA Z POWODU TESTU
// class OrderOptionDate extends React.Component {
//   state = {
//     startDate: new Date(),
//   };

//   handleChange = date => {
//     this.setState({
//       startDate: date,
//     });
//   };

//   render() {
//     return (
//       <DatePicker
//         selected={this.state.startDate}
//         onChange={this.handleChange}
//       />
//     );
//   }
// }
const OrderOptionDate = ({ currentValue, setOptionValue }) => (
  <DatePicker
    className={styles.input}
    type="date"
    value={currentValue}
    selected={currentValue}
    onChange={setOptionValue}
    placeholderText={'Select a date'}
  />
);

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};
export default OrderOptionDate;
