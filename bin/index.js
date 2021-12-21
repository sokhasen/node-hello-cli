#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
 


const boxenOption = {
    padding: 1,
    margin: 1,
    btderStyle: "round",
    borderColor: "green",
    backgroundColor: "#6af"
};

const arg = yargs(hideBin(process.argv))
.option('name', {
    alias: 'n',
    type: "string",
    description: 'Your name'
  })
.demandOption("name")
.argv

const text =  chalk.white.bold(`Hello, ${arg?.name?.toUpperCase()}!`);
const containter = boxen(text, boxenOption);
console.log(containter);