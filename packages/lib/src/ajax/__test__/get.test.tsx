import { get } from '../get';
jest.unmock('../get');
jest.mock('axios', () => ({
    __esModule: true,
    default: {
        get: jest.fn()
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

describe('ajax.get behaviour', () => {
    it('should launch get request', async () => {
        const axiosResult = {
            ...DefaultAxiosResult,
            data: 'result'
        }
        mock(axios.get).mockReturnValue(Promise.resolve(axiosResult));
        const result = await get('http://uri.com');
        expect(axios.get).toBeCalledWith('http://uri.com');
        expect(result).toBe(result);
    })
});
