function Pizza(props) {
  return (
    <div className="pizza-card">
      <p className="pizza-title">{props.name}</p>
      <img className="pizza-img" src={props.img} />
      <p>{props.description}</p>
      <button className="pizza-button" id={props.id}>
        Add to cart
      </button>
    </div>
  );
}

export default Pizza;
