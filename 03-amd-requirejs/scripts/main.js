require.config({
  "packages": ["movie","director"],
  "paths": {
  	jquery: 'lib/jquery'
  }
});

//Para que no sea global
define('jquery-private', ['jquery'], function (jq) {
  return jq.noConflict( true );
});

require(['jquery-private' ,'director']);