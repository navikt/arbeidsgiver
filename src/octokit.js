const fs = require('fs');
const filename = process.env.HOME + '/.netrc';
const content = fs.readFileSync(filename, 'utf8');
const accessToken = content.split(' ')[3];
const Octokit = require('@octokit/rest');

module.exports = new Octokit({
  auth: accessToken.trim(),
});

