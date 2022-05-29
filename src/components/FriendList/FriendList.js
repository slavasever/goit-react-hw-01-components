import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

function Friendlist({ props }) {
  return (
    <ul className="friend-list">
      {props.map(prop => (
        <FriendListItem
          avatar={prop.avatar}
          name={prop.name}
          isOnline={prop.isOnline}
          key={prop.id}
        />
      ))}
    </ul>
  );
}

Friendlist.propTypes = {
  props: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    .isRequired,
};

export default Friendlist;
