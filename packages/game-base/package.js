Package.describe({
  name: 'cpury:game-base',
  version: '0.0.1',
  summary: 'Abstract base package for games within Meteor Games'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use([
    'ecmascript',
    'underscore',
    'mongo',
    'dburles:collection-helpers@1.0.4'
  ]);

  api.addFiles([
    'game-base.js',
    'collections.js',
    'methods.js'
  ]);

  api.addFiles(['server.js', 'publications.js'], 'server');

  api.addFiles(['client.js'], 'client');

  api.export(['GameInstances', 'Games', 'gameLogics', 'gameAis']);
  api.export(['gameComponent'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('cpury:game-base');
  api.addFiles('tests.js');
});
