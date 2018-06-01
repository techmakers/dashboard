Package.describe({
  name: 'techmakers:dashboard',
  version: '0.0.1',
  summary: 'Meteor dashboard construction package',
  git: 'https://github.com/techmakers/dashboard',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.1');
  api.use('ecmascript');

  api.addFile('dashboard-collections.js') ;
  api.addFile('dashboard-publications.js','server') ;
  api.addFile('dashboard-server.js', 'server');
  api.addFile('dashboard.html','client');
  api.addFile('dashboard-client.js', 'client');
  api.mainModule('dashboard.js');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('techmakers:dashboard');
  api.mainModule('dashboard-tests.js');
});
