import { post } from '../post';
jest.unmock('../post');
jest.mock('axios', () => ({
    __esModule: true,
    default: {
        post: jest.fn()
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

describe('ajax.post behaviour', () => {
    it('should launch post request', async () => {
        const axiosResult = {
            ...DefaultAxiosResult,
            data: 'result'
        }
        const data = { name: 'test' };
        mock(axios.post).mockReturnValue(Promise.resolve(axiosResult));
        const result = await post('http://uri.com', data);
        expect(axios.post).toBeCalledWith('http://uri.com', data);
        expect(result).toBe(result);
    })
});
