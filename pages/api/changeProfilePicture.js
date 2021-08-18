import prisma from "../../lib/adapters/prismaClient";
import withSession from '../../lib/auth/session'
import nc from 'next-connect'
import multer from 'multer'

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads/profile-pictures',
    filename: (req, file, cb) => cb(null, file.originalname),
  })
})

const fileUpload = upload.single('file')

const handler = nc()
  .use(withSession)
  .use(fileUpload)
  .post(async (req, res) => {
    const query = req.query
    const filePath = req.file.path
    const newFilePath = filePath.replace(/public.?/, '')

    await prisma.users.update({
      where : {
        id: parseInt(query.user_id)
      },
      data : {
        avatar_url: newFilePath
      }
    }).catch(err => {
      console.log(err);
    })

    req.session.set('user', {
      avatar_url: newFilePath,
    })

    return res.json({
      message : 'Avatar updated'
    })
  })

export default handler

export const config = {
  api: {
    bodyParser: false,
  },
};
