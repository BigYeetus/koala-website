const ContentRow = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <div className="layout">
        <p>{props.text}</p>
        <div className="imageWrapper">
          <a href={props.image} target="_blank" rel="noreferrer">
            <img src={props.image} alt="" />
          </a>
          <p>{props.userName}</p>
        </div>
      </div>
      {!props.hideDivider && <hr className="divider" />}
    </>
  );
};

export default ContentRow;
