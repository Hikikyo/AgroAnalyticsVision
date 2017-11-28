angular.module("indexModule")
.factory("datumApiService", datumApiService);

datumApiService.$inject = ['$http'];

function datumApiService($http) {
  return {
    getFederalUnits : function(callback) {
      var url = 'http://localhost:3000/api/v1/federal_units';
      makeCorsRequest(url, null, function(response){
        callback(response);
        // return response;
      });
    }
  }
}

// Create the XHR object.
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);

    xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Accept", "application/json");
    // xhr.setRequestHeader("Content-Length", params.length);// all browser wont support Refused to set unsafe header "Content-Length"
    // xhr.setRequestHeader("Connection", "close");//Refused to set unsafe header "Connection"

  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Make the actual CORS request.
function makeCorsRequest(url, optionalParams=null, callback) {
  var xhr = createCORSRequest('GET', url);

  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var response = JSON.parse(text);

    callback(response);
    // return response;
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
    return;
  };

  xhr.send();
}