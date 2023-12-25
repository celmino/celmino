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