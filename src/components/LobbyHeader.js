import Clock from "../../public/img/icons/clock.svg";

const LobbyHeader = ({ lobbyName }) => {
  return (
    <div className="lobby-header flex flex-row w-full">
      <h3 className="flex flex-row">
        <Clock /> {lobbyName}{" "}
      </h3>
    </div>
  );
};

export default LobbyHeader;
