import PropTypes from 'prop-types';

function FriendListItem(props) {
  const { avatar, name, isOnline, id } = props;
  const itemClasses = ['item'];

  if (isOnline) {
    itemClasses.push('online');
  }
  return (
    <li className={itemClasses.join(' ')}>
      <span className="status"></span>
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
