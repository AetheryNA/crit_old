const Status = () => {
  return (
    <>
      <div className="status"></div>
      <ul className="status__tab">
        <li className="status__item status__item-online"> Online </li>
        <li className="status__item status__item-idle"> Idle </li>
        <li className="status__item status__item-dnd"> Do not disturb </li>
        <li className="status__item status__item-hidden"> Hide </li>
      </ul>
    </>
  );
};

export default Status;
