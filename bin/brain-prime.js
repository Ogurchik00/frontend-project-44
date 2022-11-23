#!/usr/bin/env node

import greetingUser from '../src/cli.js';
import interaction from '../src/index.js';
import brainPrime from '../src/games/prime.js';

const name = greetingUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

interaction(0, brainPrime, name);
