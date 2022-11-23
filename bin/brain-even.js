#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import interaction from '../src/index.js';
import brainEven from '../src/games/even.js';

const name = greetingUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

interaction(0, brainEven, name);
