const express = require('express');
var request = require('request');

const app = express();
const bodyParser = require('body-parser');
app.use(express.static(__dirname+'/public'));
app.listen(3000, function(){
	console.log('listening on 3000')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/', function(req,res){
	console.log(req.body);
	addEmailtomailChimp(req.body.email);
	res.end('Your email adress has been added! Please consider following us on social media.')
});

function addEmailtomailChimp(email){
var options = {
  'method': 'POST',
  'url': 'https://us17.api.mailchimp.com/3.0/lists/82b08a9365/members',
  'headers': {
    'Content-Type': 'text/plain',
    'Authorization': 'Basic YW55c3RyaW5nOmM5Y2M0YmUzOTNjOWU0YTg0NzFiNjUxNDlhOWM3OTNjLXVzMTc=',
    'Cookie': '_abck=9D996A2B93F3FA4875C58FACD6BE99E5~-1~YAAQHuzAF6mQ7KGIAQAAWDPd2grD9tWhlrVWDy7WL2oQvCLbhH45KJ08+6GfsIqvh7FqQVQ4Vhv/wdycPRnYwOq5/En9TJ1TLtx1fNDXYxBarUct97ZdM6EcLaoHeo0QJvkqSZq1TtCJxaSst2nNei+UmhczTJi8TxZkDZ3yLUl6+wd+kP5JIKmS8uXcyN8Y0jZSHGOprYSKcvhqb1LkUUYfv5AnFvTOtbwavtg7IeglrKIigNs5ztkPRA1aZzin0lHA6FCHyvEATDQl/uFW5+05ihDgtACn7Nx3cIOEqhkoI5m2twgdwbKilyi0rgRDX65ViMizdcfWbenTbdDo1Twg7wwDjy5GoSNViMq0hgC8rHfF/EcAmFQjfK0=~-1~-1~-1; ak_bmsc=7DBEB0D78279ECF5552F3B401E1FF266~000000000000000000000000000000~YAAQHuzAF6qQ7KGIAQAAWDPd2hRwhnbvTHWGZfH5HbdsWEcIFVfXMLyou2YSwi7caCB6fJ2cgXTCPFPF0vLwON/gECvOGRjcwI1qo0Hhy4+dS8MvZF8QMEI0LYtJm/Ts1AvXObTlvdPuvePB/91gw8viHyruKn0ydcgsKCKiLMCCiLX9f7EY7i9uKMRIaMwyiS9f/bfSPPOZWCauMZXlwPuGpePsOVESIrqjqHFLosTjultZJ1R7n6g5RFjFWoD8Vx12lBzGErc6LJZXjE9HY5gBIqWC70rR+ggVZO9FBFjPN7o8Zwd/adFMJeXjLxObUeBnAYFhlYEJo3w59IYKKFD9+jWLrSScf5sMhdcjyF1rc1/JuBuVptSd/l3Ivw==; bm_sv=25068CC64E8DF8004D64248C90E1A02C~YAAQD+zAF7xgH76IAQAAqYjo2hT8eZGFN+kL+VUlUq2d/lm21K0/wIN4aslOe54l0Fe240gDZv9MJhApfMhSP3c8evKqS0xQ4UkOGpZUnMZXljtpzdtTeCkdK3BxVNIkLBA3Q0XWZGQ+c7qectNEQJFBjonhQO5Y3l87yp6mRmn2Oj4pIlFaYwwtAOTJZ+6aE7dSv76C052EL2/zSfieBTaTYWJBk2k5O/AduxojkC8B4vkrofC7yhXb7kBz6kTrEzX5~1; bm_sz=0B065EAC2C4D5E228F60350A6330672C~YAAQHuzAF6uQ7KGIAQAAWDPd2hSgSwSEZ20jFoDKUBrChjvpyJFdvvOQtglgFWA8AHIatYooR1MPTZa6h+tbWMQRquR0KdkK6eFXsSNQAXYBv+B9QD7YeQkYT+EAspiWcsvj9dALDDN9Fy+wuaHVtke9Sd6yKEac8x7nfhaFD8rh8bMEAR10ejse/FQUW5mw1OfPcHWSWUu02KimRUKiWsNsxWWfZC49kBQlGBLTVlKcum3+BOwskRZSj6nz36lV7PtjhVGPnSuNEtN3Cqrm2bepMhT/4hlqwb1r9XsP1nX7uJRv3OA=~4474421~3224633; ak_bmsc=81342A62DA2EE3DA53311EE159FF3F1A~000000000000000000000000000000~YAAQD+zAF0gsH76IAQAASjLd2hSO7+2qTDpZOTnLGVJ0QHoaWbdn75aNSFU29k3HofWbBV9Iw3ZVKaQR6QFUj/5d8rHuy2rbKMfi3XENx5caA2qLHXx+fh4RdYRxyu0oSwKrCyoy9kudL3NDPjdvKxzTmPdZqJ+T+IAQPzpkGRAvPcuLNQOBSBP5FnvLL6IejTJnYqkGRsGM7muJli1tnnfHkfrFPzyJenPGu7uLdlnCLFPKVoubwKUChDGTdhSQ4YUStfc1CtpKu5xCziDRI9KXfiDarxlbVEOx7Lbi6j5YcN3MC2jn0LQUk0ZHSIbi2tjB5OmsnHjHkerX9qvOZE4jIOmXyVIGNSuHOoIHB1jvK14gStIOI9QFbJOzIg3UQDQ=; bm_sv=4575913971E4382BD6D2288851A5C2FB~YAAQD+zAF3JCH76IAQAAWH/h2hQKuwvLqH1pFyvfSdZIzEfa+3It7n1kjT49UOIveUPI86HIcJ3EwdKco+M/uaHZT32kKAaoFn95fVJLX2Bv2zaEU/rhd7+QPqkKYqL0Klt3WzYMZu776b+MY1VNDp3FVf9m1f2P8XVO76zEIrCATl+rDzPpsPJ1TL/b9yUAKXB7e1518w+eSfU25paUrBUeYSYPHndw+8ckYyBv+lp3bNBxdbLvdZKRGoMi9PdIvwpiKjyOnQ==~1'
  },
   body: '{\r\n    "email_address": "' + email + '", \r\n    "status" : "subscribed"\r\n}'

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

}