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


shell.cp('-Rf', './dist/index.js',  `../../../realmocean/system/${appName}`);
shell.cd('../../..');
shell.exec(`docker-compose restart`);

shell.echo(`All done.`);