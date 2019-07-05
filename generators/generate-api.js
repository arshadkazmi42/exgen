const ora = require('ora');
const exec = require('child_process').exec;

const FormatMessage = require('../lib/format-message');
const Constants = require('../lib/constants');

const spinner = ora();


const generateApi = (arg) => {
  return new Promise((resolve) => {
    spinner.start(`Generating ${arg}...`);
    exec(`git clone ${Constants.URLS[arg]}`, (error, stdout, stderr) => {
      if (error !== null) {
        spinner.fail(FormatMessage.error(arg, stderr));
        return resolve();
      }
  
      spinner.succeed(FormatMessage.success(arg, `Express ${arg} generated`));
      return resolve();
    });
  });
};


module.exports = generateApi;