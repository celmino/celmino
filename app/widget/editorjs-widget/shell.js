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

shell.echo('Exposing appstore info to realm container');
//shell.exec(`docker cp  ./dist/${appName}.app  ${container_name}:/app/public/static/applications/${appName}.app`)
shell.exec(`docker cp  ./dist/${appName}  appwrite:/usr/src/code/app/realm/static/applications/${appName}`)
/* shell.echo(`Exposing ${appName}.app to realm container appstore`);
shell.exec(`docker cp  ../../realm/applications/${appName}.app  ${container_name}:/server/portal/static/applications/${appName}.app`) */
shell.cd('../../web-app');
shell.exec(`docker-compose restart`);

shell.echo(`All done.`);
