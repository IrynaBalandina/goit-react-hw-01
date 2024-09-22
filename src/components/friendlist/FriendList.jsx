import FriendListItem from "./FriendListItem";

const FriendList = ({friends}) => {

  return (
    <div>
    <ul className ={"FriendList"}>
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