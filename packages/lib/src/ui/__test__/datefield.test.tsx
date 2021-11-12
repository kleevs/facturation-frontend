import React from 'react';
import Datefield from '../datefield';
import { fireEvent, render } from '@testing-library/react';

jest.deepUnmock('react');
jest.deepUnmock('@testing-library/react');
jest.unmock('../datefield');

function mock<TArg extends unknown[], TResult>(fn: (...arg: TArg) => TResult): jest.Mock<TResult, TArg> {
    return fn as any;
}

import { parseDate, dateToString, formatDate } from '../../tool/date'

describe('tu number field', () => {
    it('should be generate correct input', () => {
        const onChange = jest.fn();
        const date = new Date('12/11/2021');
        mock(dateToString).mockReturnValue('12/11/2021');
        mock(formatDate).mockReturnValue('formatted 12/11/2021');

        const { container } = render(<Datefield value={date} onChange={onChange} />);
        const input = container.querySelector<HTMLInputElement>('input');
        expect(dateToString).toBeCalledWith(date, '');
        expect(formatDate).toBeCalledWith('12/11/2021');
        expect(input.value).toBe('formatted 12/11/2021');
    })

    it('should call on change callback', () => {
        const onChange = jest.fn();
        const date = new Date('12/11/2021');

        mock(parseDate).mockReturnValue(date);

        const { container } = render(<Datefield value={date} onChange={onChange} />);
        const input = container.querySelector<HTMLInputElement>('input');
        
        fireEvent.change(input, { target: { value: '12/11/2021' }});

        expect(parseDate).toBeCalledWith('12/11/2021');
        expect(onChange).toBeCalledWith(date);
    })
});
