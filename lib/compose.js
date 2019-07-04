const GENERATORS = {
  api: require('./generate-api')
}


const compose = (args) => {
  args.forEach((arg) => {
    GENERATORS[arg](arg);
  });
}


module.exports = compose;
