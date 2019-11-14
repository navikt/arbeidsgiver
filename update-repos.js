const fs = require('fs');
const filename = process.env.HOME + '/.netrc';
const content = fs.readFileSync(filename, 'utf8');
const accessToken = content.split(' ')[3];

const Octokit = require('@octokit/rest');
const octokit = new Octokit({
  auth: accessToken.trim(),
});

const run = async (teamSlug) => {
  const countLanguages = [];
  try {
    const team = await octokit.teams.getByName({
      org: 'navikt',
      team_slug: teamSlug,
    });
    const repos = await octokit.teams.listRepos({
      team_id: team.data.id,
    });
    repos.data.forEach(repo => {
      const {html_url, description, private, size, language} = repo;
      if (!private) {
        console.log('* [' + repo.name + '](' + html_url + ')');
        //console.log(html_url,description, size, language);
      }
    });
  } catch (e) {
    console.error(e);
  }

};

run('teamtag');
