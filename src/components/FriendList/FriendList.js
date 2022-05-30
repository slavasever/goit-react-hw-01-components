import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function Friendlist(props) {
  const { items } = props;
  return (
    <ul className={s.list}>
      {items.map(item => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </ul>
  );
}

Friendlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    .isRequired,
};

export default Friendlist;
