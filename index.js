var request = require('request');

exports.handler = function(event, context) {
	
	console.log('event ' , event.clickType);        
	var action = event.clickType == 'SINGLE' ? 1 : 0;
	
	var postData = {''} //add post params here 

	var url = ''
	var options = {
		method: 'post',
		body: postData,
		json: true,
		url: url
	}
	
	request.post(options, function (err, res, body) {
		if (err) {
			console.error('error posting json: ', err)
			throw err
		}	 
		var headers = res.headers;
		var statusCode = res.statusCode;
	})
};