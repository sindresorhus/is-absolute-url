import {expectType} from 'tsd';
import isAbsoluteUrl from './index.js';

expectType<boolean>(isAbsoluteUrl('https://sindresorhus.com/foo/bar'));
