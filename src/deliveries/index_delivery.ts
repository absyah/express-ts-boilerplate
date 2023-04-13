import express from 'express'

export const getIndex = (req: express.Request, res: express.Response) => {
    res.send('Hello!')
}
