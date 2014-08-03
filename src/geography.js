'use strict';

var instajam;

function Geography (client) {
	instajam = client;
}

Geography.prototype.media = function(id, options, callback) {
      
  // We need at least a Geography ID to work with
  if (!id) {
    throw new Error('Instajam: A geography ID is required for Geography.get()');
  }

  // The options argument defaults to an empty object
  options = options || {};

  // Make a request to the API
  instajam.request({
    url: 'geographies/' + id + '/media/recent',
    data: options,
    success: callback
  });

};

module.exports = Geography;
