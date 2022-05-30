import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory(props) {
  const { items } = props;
  return (
    <table className={s.table}>
      <thead className={s.head}>
        <tr>
          <th className={s.cell}>Type</th>
          <th className={s.cell}>Amount</th>
          <th className={s.cell}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map(item => {
          const { id, type, amount, currency } = item;

          return (
            <tr className={s.row} key={id}>
              <td className={s.cell}>{type}</td>
              <td className={s.cell}>{amount}</td>
              <td className={s.cell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
