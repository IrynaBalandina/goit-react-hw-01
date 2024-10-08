
import styles from './FriendListItem.module.css';


const FriendListItem = (props) => {
    const{isOnline, avatar, name} = props;
  return (
    <div className = {styles.friendCard}>
          
        <img className = {styles.avatar} src={avatar} alt="Avatar" width="48" />
  <p className={styles.friendsName}>{name}</p>
  <span className = {isOnline ? styles.statusOnline : styles.statusOffline}> {isOnline ? "Online" : "Offline"}</span>
    </div>
  )
}

export default FriendListItem;