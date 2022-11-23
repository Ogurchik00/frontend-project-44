#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import interaction from '../src/index.js';
import brainCaic from '../src/games/calc.js';

const name = greetingUser();

console.log('What is the result of the expression?');

interaction(0, brainCaic, name);
