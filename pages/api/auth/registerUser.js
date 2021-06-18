import nc from "next-connect";
const model = require('../../../db/models/index')
// import models from "../../../db/models/index"

const handler = nc()
  .post( async (req, res) => {
    const { username, password, email } = req.body

    // const newUser = model.User.create({
    //   username: username,
    //   password: password,
    //   email: email,
    // })

    return res.json({
      status: "Success",
      message: "Done",
      // data: newUser
    })
  })

export default handler;
