$(document).ready(function(){
	$('#div-name').fadeIn(5000, function(){
		$('#input-tu-nombre').focus();
	});

	$.ajax({
		url:'http://tweetproxy.ap01.aws.af.cm/search?callback=?',
		dataType:'jsonp',
		data: {'q':'html5'},
		success: function(response){
			console.log(response);
			$.each(response['statuses'], function(i, v) {
				 setDivTweet(v);
			});

		}
	});
});

function setDivTweet(obj){
	$('#div-tweets').append('\<div >' + obj.user.name);
	$('#div-tweets').append('\<div >' + obj.text);
	$('#div-tweets').append('\<div >' + obj.created_at);
	$('#div-tweets').append('\<img src=' + obj.user.profile_image_url + '>');


}

function getResponse(){
	var $name = $('#input-name').val();
	$.ajax({
		url:'http://bootcamp.aws.af.cm/welcome/'+$name,
		datatype:'jsonp',
		success:function(response){
			var $divName = $('#div-name');
			$divName.empty();
			$divName.append(highlight(response.response,$name));
		},
		error:function(a,b,c){
			$('#input-tu-nombre').addClass('error');
		},
	});
}


function highlight(fullString, highlightString){
	return fullString.replace(highlightString, '<div class=\'highlight div-inline\'>'+highlightString+'</div>');
}