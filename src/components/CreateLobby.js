import { useState } from "react";
import Plus from "../../public/img/icons/plus.svg";
import CreateLobbyModel from "./CreateLobbyModel";

const CreateLobby = () => {
  const [viewCreateLobby, setViewCreateLobby] = useState(false);

  return (
    <>
      <button
        className={`lobby-inner-header ${viewCreateLobby && "active"}`}
        onClick={() => {
          setViewCreateLobby(!viewCreateLobby);
        }}
      >
        <span> Create lobby </span>
        <Plus />
      </button>

      {viewCreateLobby && <CreateLobbyModel />}
    </>
  );
};

export default CreateLobby;
