function Card(props) {
  const { photo, number } = props;
  return (
    <div className="Card" key={photo.id}>
      <h1>{number}</h1>
      <img src={photo.src.portrait} alt={photo.id} />
    </div>
  );
}

export default Card;
