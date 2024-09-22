import FriendListItem from "./FriendListItem";
import styles from './FriendList.module.css';  './FriendListItem.module.css';


const FriendList = ({friends}) => {

  return (
    <div className = {styles.friends}>
    <ul className = {styles['friendList']}>
    {friends.map(({ avatar, name, isOnline }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={name}
          />
        );
      })}
     
    </ul>


</div>
  );
}

export default FriendList