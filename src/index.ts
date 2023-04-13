import express from 'express'

const app = express()

import { IndexRoute } from './routes/index_route'

app.use(IndexRoute)

app.listen(3000, () => {
    console.log(`listening on port 3000`)
})

export default app
