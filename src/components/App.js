import Profile from 'components/Profile/Profile';
import user from '../user.json';
import Statistics from 'components/Statistics/Statistics';
import data from '../data.json';
import Friendlist from 'components/FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <Friendlist items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

//  {
//    /* <div
//     style={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101'
//     }}
//   >
//     React homework template
//   </div> */
//  }
