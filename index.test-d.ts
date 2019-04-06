import {expectType} from 'tsd';
import isAbsoluteUrl = require('.');

expectType<boolean>(isAbsoluteUrl('https://sindresorhus.com/foo/bar'));
