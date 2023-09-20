import style from "./Profile.module.css";

export const Profile = (props) => {
  let user = props.function();
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
        <p style={{border: "solid 2px red", padding: "10px", borderRadius: "5px", backgroundColor: "lightgray", }}>
        {user.about}
        </p>
      </div>
    </div>
  );
};
