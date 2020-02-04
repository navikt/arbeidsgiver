const fs = require('fs');
const os = require('os');
const octokit = require("./src/octokit");

const run = async (org, teamSlug) => {
  const countLanguages = [];
  try {
    const team = await octokit.teams.getByName({
      org: org,
      team_slug: teamSlug,
    });
    const repos = await octokit.teams.listRepos({
      team_id: team.data.id,
    });
    const lines = []
    repos.data.forEach(repo => {
      const {html_url, description, private, size, language} = repo;
      if (!private) {
        lines.push('* [' + repo.name + '](' + html_url + ') - ' + language);
      }
    });
    lines.sort()
    fs.writeFileSync('./docs/_includes/generated-repos.md', lines.join(os.EOL));
  } catch (e) {
    console.error(e);
  }

};

run('navikt','arbeidsgiver');
