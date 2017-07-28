#!/usr/bin/env node

const program = require('commander');
const { exec } = require('child_process');

const init = directory => {
  if (directory === undefined) {
    console.log('No directory specified.');
    return false;
  }

  const ins = `
  Installing Uno into ./${directory}
  This may take a second...`;
  const fin = `
  Done! ✨  ${directory} directory created.
  cd into '${directory}' and run 'npm start' to start your app. \n`;

  const cmd = `git clone https://github.com/cincodesign/uno.git ${directory} && cd ${directory} && npm install && rm -rf .git`;

  let callback = error => {
    if (error) console.log(error);
    else console.log(fin);
  };

  console.log(ins);
  exec(cmd, callback);
};

program
  .version('0.0.1')
  .command('init [directory]')
  .description('Make new Uno')
  .action(init);

program.parse(process.argv);

if (program.args.length === 0) program.help();
