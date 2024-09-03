import {strict as assert} from 'node:assert';
import { get } from "../src/collection.js";

assert.equal(get({ key: 'value' }, 'key'), 'value');

assert.equal(get({ key: 'value' }, 'key', 'default value'), 'value');

assert.equal(get({}, 'key', 'value'), 'value');

console.log('Все тесты пройдены!');