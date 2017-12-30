//<![CDATA[
var token = '506538828.a33fd23.7aa5979eef55435a92e7adbe4b6d1cad', // learn how to obtain it below
    userid = 506538828, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 30; // how much photos do you want to get
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('instagram').append('<li1><a target="_blank" href="'+data.data[x].link+'"><img src="'+data.data[x].images.low_resolution.url+'"></a></li1>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
			// data.data[x].images.thumbnail.url - URL of image 150х150
			// data.data[x].images.standard_resolution.url - URL of image 612х612
			// data.data[x].link - Instagram post URL 
		}
	},
	error: function(data){
		console.log(data); // send the error notifications to console
	}
});
//]]>
