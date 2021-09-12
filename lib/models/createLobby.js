import prisma from "../adapters/prismaClient";

class createLobby {
  constructor({ lobby_name, owner_id } = {}) {
    this.lobby_name = lobby_name,
    this.owner_id = owner_id
  }

  async create() {
    await prisma.lobby.create({
      data : {
        lobby_name : this.lobby_name,
        owner_id : this.owner_id,
      }
    }).catch(err => {
      throw err
    }) 
  }
}

export default createLobby
