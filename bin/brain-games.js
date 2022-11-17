#!/usr/bin/env node
import usrName from '../src/cli.js';

export const greetingUser = () => {
    console.log('Welcome to the Brain Games!');
    usrName();
};