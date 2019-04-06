import {expectType} from 'tsd';
import isAbsoluteUrl = require('.');

expectType<boolean>(isAbsoluteUrl('http://sindresorhus.com/foo/bar'));
