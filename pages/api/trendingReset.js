import nc from 'next-connect'
import prisma from '../../lib/adapters/prismaClient'
import moment from 'moment'

const handler = nc()
  .get(async (req, res) => {
    const allMonths = moment.months()
    let allMonthsInNumbers = []

    const cycle = allMonths.map(async (date) => {
      allMonthsInNumbers.push((moment().month(date).format("M")))

      if(moment().month(date)) {
        await prisma.posts.updateMany({
          data : {
            reshare : 0
          }
        })
      }
    })

    return res.json({
      message : 'Trending reset'
    })
  })

export default handler
