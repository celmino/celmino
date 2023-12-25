const tuval = require('@tuval/core/node');
const manifest = require('./src/manifest');
const appName = manifest.application.name;
const container_name = manifest.application.docker_container_name;

var shell = require('shelljs');

//shell.exec('./update_library.sh');

if (shell.exec('npm run wbuild').code !== 0) {
    shell.echo('Build failed');
    shell.exit(1);
}

if (container_name) {
    shell.echo('Getting appstore info from realm docker container');
    shell.exec(`docker cp ${container_name}:/server/portal/static/appstore.json  ../../realm/appstore.json`)
}


shell.echo('App file creating...');

tuval.appPackager('./dist/index.js', `./dist/${appName}`);

shell.cp('-Rf', `./dist/${appName}`, '../../web-app/public/static/applications');

shell.cd('../../web-app');

shell.exec(`
result=$( docker ps | grep celmino )

if [[ -n "$result" ]]; then
   docker stop celmino && docker rmi --force celmino && docker rm celmino && docker-compose up
else
  docker rmi --force celmino && docker rm celmino && docker-compose up
fi
`)
