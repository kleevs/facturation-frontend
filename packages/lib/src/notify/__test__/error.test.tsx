import error from '../error';

jest.unmock('../error');

import toastr from 'toastr';

describe('tu notify error', () => {
    it('should notify the user', () => {
        error('title', 'message');
        expect(toastr.error).toBeCalledWith('message', 'title');
    })
});
