const tuval = require('@tuval/core/node');
const manifest = require('./src/manifest');
const appName = manifest.application.name;
const container_name = manifest.application.docker_container_name;

var shell = require('shelljs');

if (shell.exec('npm run wbuild').code !== 0) {
    shell.echo('Build failed');
    shell.exit(1);
}



shell.echo('App file creating...');

tuval.appPackager('./dist/index.js', `./dist/${appName}`);

shell.cp('-Rf', `./dist/${appName}`, '../../web-app/public/static/applications');

/* shell.cd('../../web-app');

shell.exec(`
result=$( docker ps | grep celmino )

if [[ -n "$result" ]]; then
   docker stop celmino && docker rmi --force celmino && docker rm celmino && docker-compose up
else
  docker rmi --force celmino && docker rm celmino && docker-compose up
fi
`)
 */

shell.echo('Exposing appstore info to realm container');
shell.exec(`docker cp  ./dist/${appName}  celmino:/app/public/static/applications/${appName}`)
/* shell.echo(`Exposing ${appName}.app to realm container appstore`);
shell.exec(`docker cp  ../../realm/applications/${appName}.app  ${container_name}:/server/portal/static/applications/${appName}.app`) */
shell.cd('../../web-app');
shell.exec(`docker-compose restart`);

shell.echo(`All done.`);