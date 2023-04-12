import { Request, Response } from 'express'
import * as IndexDelivery from '../index_delivery'
import sinon from 'sinon'

describe('getIndex', () => {
    afterEach(() => {
        sinon.restore()
    })

    it('should return Hello!', () => {
        const req = { body: {} } as Request
        const res = {
            status: () => sinon.stub(),
            send: () => sinon.stub(),
            json: () => sinon.stub(),
        } as unknown as Response

        jest.spyOn(res, 'send')

        IndexDelivery.getIndex(req, res)
        expect(res.send).toBeCalledWith('Hello!')
    })
})
