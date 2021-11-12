import success from '../success';

jest.unmock('../success');

import toastr from 'toastr';

describe('tu notify success', () => {
    it('should notify the user', () => {
        success('title', 'message');
        expect(toastr.success).toBeCalledWith('message', 'title');
    })
});
