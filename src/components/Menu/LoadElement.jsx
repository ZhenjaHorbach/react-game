function LoadElement(props) {
  return (
    <div>
      <div>{props.index}</div>
      <div>{props.info.sizeBoard}</div>
      <div>{props.info.scoreMove}</div>
      <div>{props.info.timeMove}</div>
      <div>{props.info.findCards.length}</div>
      <div>{props.info.topic ? props.info.topic : "None"}</div>
      <div>110</div>
      <div>
        <button onClick={() => props.loadGame(props.index)}>Load</button>
      </div>
      <div>
        <button onClick={() => props.deleteSave(props.index)}>Delete</button>
      </div>
    </div>
  );
}

export default LoadElement;
