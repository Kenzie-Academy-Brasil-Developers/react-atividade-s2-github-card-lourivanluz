import "./style.css";
export const CardItem = ({ info: { avatarUrl, fullname, description } }) => {
  return (
    <div className="container-card">
      <figure>
        <img src={avatarUrl} alt="search result logo" />
      </figure>
      <div className="container-text">
        <h2>{fullname}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
