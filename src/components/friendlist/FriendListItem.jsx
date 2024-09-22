

const FriendListItem = (props) => {
    const{isOnline, avatar, name} = props;
  return (
    <div>
          
        <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
  <span>{isOnline? "Yes" : "No"}</span>
    </div>
  )
}

export default FriendListItem