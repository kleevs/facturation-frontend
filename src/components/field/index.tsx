import { dateToString, formatDate, parseDate } from 'src/tools/date';
import { FormatComponentFactory } from './format';
import { ParseComponentFactory } from './parse';
import { TextFieldFactory } from './text';

const DateCreationInput = TextFieldFactory({ placeholder: 'Date de création' });
const DateCreationFormat = FormatComponentFactory({ Field: DateCreationInput, format: formatDate })
export const DateCreationField = ParseComponentFactory({Field: DateCreationFormat, parse: parseDate, toString: dateToString });