const ora = require('ora');
const exec = require('child_process').exec;

const { URLS } = require('./constants');

const spinner = ora();


const generateApi = (arg) => {
  spinner.start('Generating...');
  exec(`git clone ${URLS[arg]}`, (error, stdout, stderr) => {
    if (error !== null) {
      return spinner.fail(error);
    }

    spinner.succeed(`Express ${arg} generated`);
  });  
}


module.exports = generateApi;