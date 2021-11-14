import { put } from '../put';
jest.unmock('../put');
jest.mock('axios', () => ({
    __esModule: true,
    default: {
        put: jest.fn()
    }
}));

import axios from 'axios';

function mock<TArg extends unknown[], TResult>(fn: (...arg: TArg) => TResult): jest.Mock<TResult, TArg> {
    return fn as any;
}

const DefaultAxiosResult = {
    data: null,
    status: 200,
    statusText: 'OK',
    headers: null,
    config: null
}

describe('ajax.put behaviour', () => {
    it('should launch put request', async () => {
        const axiosResult = {
            ...DefaultAxiosResult,
            data: 'result'
        }
        const data = { name: 'test' };
        mock(axios.put).mockReturnValue(Promise.resolve(axiosResult));
        const result = await put('http://uri.com', data);
        expect(axios.put).toBeCalledWith('http://uri.com', data);
        expect(result).toBe(result);
    })
});
