import style from "./Profile.module.css";

export const Profile = (props) => {
  let userId = window.location.pathname.split("/")[2];
  let user = props.function(userId);
  console.log(userId);
  
  return (
    <div className="row">
      <div className="col-3">
        <img src={user.avatar} alt="" width="100%" />
      </div>
      <div className="col-9">
        <h2 className={style.name}>{user.name} {user.lastname}</h2>
        <p className={style.email}>Email: <span>{user.email}</span></p>
        <p className={style.id}>ID: {user.id}</p>
        <p>История пользователя: </p>
        <p className={style.about}>
        {user.about}
        </p>
      </div>
    </div>
  );
};

//<p style={{border: "solid 2px red", padding: 
//"10px", borderRadius: "5px", backgroundColor: "lightgray", }}></p> 