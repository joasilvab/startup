var asSocial = (function() {
	function share(friendName) {
		console.log('Sharing ' + this.get('title') + ' with ' + friendName);
	}
	function like() {

	}
	return function() {
		this.share = share;
		this.like = like;
		return this;
	};
}());