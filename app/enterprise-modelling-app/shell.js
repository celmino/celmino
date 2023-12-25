const tuval = require('@tuval/core/node');
const manifest = require('./src/manifest');
const appName = manifest.application.name;
const container_name = manifest.application.docker_container_name;

var shell = require('shelljs');

if (shell.exec('npm run wbuild').code !== 0) {
    shell.echo('Build failed');
    shell.exit(1);
}

if (container_name) {
    shell.echo('Getting appstore info from realm docker container');
    shell.exec(`docker cp ${container_name}:/server/portal/static/appstore.json  ../../realm/appstore.json`)
}


shell.echo('App file creating...');

tuval.appPackager('./dist/index.js', `./dist/${appName}.app`);

shell.cp('-Rf', `./dist/${appName}.app`, '../web-app/public/static/applications');

//shell.cd('../web-app');

/* shell.exec(`
result=$( docker ps | grep celmino )

if [[ -n "$result" ]]; then
   docker stop celmino && docker rmi --force celmino && docker rm celmino && docker-compose up
else
  docker rmi --force celmino && docker rm celmino && docker-compose up
fi
`)
 */

shell.echo('Exposing appstore info to realm container');
//shell.exec(`docker cp  ./dist/${appName}.app  ${container_name}:/app/public/static/applications/${appName}.app`)
shell.exec(`docker cp  ./dist/${appName}.app  appwrite:/usr/src/code/app/realm/static/applications/${appName}.app`)
/* shell.echo(`Exposing ${appName}.app to realm container appstore`);
shell.exec(`docker cp  ../../realm/applications/${appName}.app  ${container_name}:/server/portal/static/applications/${appName}.app`) */
shell.cd('../web-app');
shell.exec(`docker-compose restart`);

shell.echo(`All done.`);