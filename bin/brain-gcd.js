#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import interaction from '../src/index.js';
import brainGcd from '../src/games/gdc.js';

const name = greetingUser();

console.log('Find the greatest common divisor of given numbers.');

interaction(0, brainGcd, name);
