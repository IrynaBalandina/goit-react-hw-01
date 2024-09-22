
import styles from './Profile.module.css';

const Profile = (props) => {
     const {name, tag, location, image,  stats:{followers,views,likes}}= props;

     return (
        <div className = {styles.profileCard}>
             <div>
        <img className = {styles.profileImg}
          src={image}
          alt="User image"
        />
        <h2>{name}</h2>
        <p className = {styles.profileTag}>{tag}</p>
        <p className= {styles.profileTag}>{location}</p>
      </div>
      
      <ul className = {styles.stats}>
        <li> 
          <span className={styles.spanTitle}>Followers:</span>
          <span className={styles.spanQuantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.spanTitle}>Views:</span>
          <span className={styles.spanQuantity}>{views}</span>
        </li>
        <li>
          <span className={styles.spanTitle}>Likes:</span>
          <span className={styles.spanQuantity}>{likes}</span>
        </li>
      </ul></div>
      );
}



   


export default Profile