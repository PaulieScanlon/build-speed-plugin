const { writeFile } = require('fs');

const LOCATION = `${process.cwd()}/public/static`;
const FILE_NAME = 'report.json';
const date = new Date();
let report = {};

const createTimeStamp = () => {
  return new Date();
};

const createReport = (data) => {
  console.log(LOCATION);

  writeFile(`${LOCATION}/${FILE_NAME}`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

exports.onPreInit = () => {
  report.start = createTimeStamp();
};

exports.onPostBuild = () => {
  report.end = createTimeStamp();

  createReport(report);
};
