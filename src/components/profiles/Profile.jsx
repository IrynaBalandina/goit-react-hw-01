

const Profile = (props) => {
     const {name, tag, location, image,  stats:{followers,views,likes}}= props;

     return (
        <div>
             <div>
        <img 
          src={image}
          alt="User image"
        />
        <p>Name:{name}</p>
        <p>Tag:{tag}</p>
        <p>Location:{location}</p>
      </div>
      
      <ul>
        <li> 
          <span>Followers:</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views:</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes:</span>
          <span>{likes}</span>
        </li>
      </ul></div>
      );
}



   


export default Profile