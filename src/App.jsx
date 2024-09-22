
import userData from './json/userData.json';
import './App.css';
import Profile from './components/profiles/Profile';
import FriendList from './components/friendlist/FriendList';
import friends from './json/friends.json';
import TransactionHistory from './components/transactions/TransactionHistory';
import transactions from './json/transactions.json';



function App() {


  return (
    <>
   
   <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList
       friends={friends} 
       />
       <TransactionHistory items={transactions} />
    </>
  );
};

export default App
