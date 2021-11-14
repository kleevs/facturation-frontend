import { remove } from '../remove';
jest.unmock('../remove');
jest.mock('axios', () => ({
    __esModule: true,
    default: {
        delete: jest.fn()
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

describe('ajax.remove behaviour', () => {
    it('should launch delete request', async () => {
        const axiosResult = {
            ...DefaultAxiosResult,
            data: 'result'
        }
        mock(axios.delete).mockReturnValue(Promise.resolve(axiosResult));
        const result = await remove('http://uri.com');
        expect(axios.delete).toBeCalledWith('http://uri.com');
        expect(result).toBe(result);
    })
});
