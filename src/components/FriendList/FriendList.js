import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function Friendlist(props) {
  const { items } = props;
  return (
    <ul className={s.list}>
      {items.map(item => {
        const { avatar, name, isOnline, id } = item;

        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
}

Friendlist.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    .isRequired,
};

export default Friendlist;
