const express = require('express');
const bdparse = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bdparse.urlencoded({ extended: true }));
app.use(bdparse.json());
app.use(cookieParser());

app.post('/track', function(req, res) {
  axios.post('https://wwwcie.ups.com/rest/Track', {
    "UPSSecurity": {
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
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  })
});

app.listen(PORT, function() {
  console.log("API started on port: " + PORT);
});
