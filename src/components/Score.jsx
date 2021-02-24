function Score(props) {
  function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
  }
  return (
    <div>
      <h2>
        Time:
        <span>{`${addZero(Math.floor(props.timeMove / 60))}:${addZero(
          props.timeMove % 60
        )}`}</span>
      </h2>
      <h2>
        Move:<span>{props.scoreMove}</span>
      </h2>
    </div>
  );
}
export default Score;
