var username = 'N8Sayer',
    password = 'tesser@89';

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://wwwcie.ups.com/rest/Track",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "origin": "*",
    "cache-control": "no-cache",
  },
  "processData": false,
  "data": {
          	"UPSSecurity": {
              "UsernameToken": {
                "Username": 'N8Sayer',
                "Password": 'Password42'
              },
          		"ServiceAccessToken": {
          			"AccessLicenseNumber":"2D325F978B548248"
          		}
          	},
          	"TrackRequest": {
          		"Request": {
          			"RequestOption":"1",
          			"TransactionReference": {
          				"CustomerContext": ""
          			}
          		},
          		"InquiryNumber": "1Z7F75Y79073380083"
          	}
          }
};

$.ajax(settings).done(function (response) {
  $('body').append(result);
}).fail(function (response) {
  $('body').append("Failed");
  console.log(response);
});
