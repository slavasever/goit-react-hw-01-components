import PropTypes from 'prop-types';

function FriendListItem(props) {
  const { avatar, name, isOnline } = props;
  const itemClasses = ['status'];

  if (isOnline) {
    itemClasses.push('online');
  }
  return (
    <li className="item">
      <span className={itemClasses.join(' ')}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
