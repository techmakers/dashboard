Package.describe({
  name: 'techmakers:dashboard',
  version: '0.0.1',
  summary: 'Meteor dashboard construction package',
  git: 'https://github.com/techmakers/dashboard',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.1');
  api.use(['ecmascript','mongo','templating']);

  api.addFiles('dashboard-collections.js') ;
  api.addFiles('dashboard-publications.js','server') ;
  api.addFiles('dashboard-server.js', 'server');
  api.addFiles('dashboard.html','client');
  api.addFiles('dashboard-client.js', 'client');
  api.mainModule('dashboard.js');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('techmakers:dashboard');
  api.mainModule('dashboard-tests.js');
});
