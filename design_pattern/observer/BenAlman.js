(function($) {
    var movieList = [],
        userList = [];
// subscribers
    $.subscribe( "/new/user", function( e, userName ){
        if(userName.length){
            userList.push({user: userName});
            $( "#userTemplate" ).tmpl( userList[userList.length - 1] ).appendTo( "#users" );
        } });
    $.subscribe( "/new/rating", function( e, movieTitle, userRating ){
        if(movieTitle.length){
            movieList.push({ movie: movieTitle, rating: userRating});
            $( "#ratingsTemplate" ).tmpl( movieList[movieList.length - 1] ).appendTo( "#ratings" ); }
    });
    $('#add').on('click', function(){
        var strUser = $("#twitter_handle").val(), strMovie = $("#movie_seen").val(), strRating = $("#movie_rating").val();
// publishers
        $.publish('/new/user', strUser ); $.publish('/new/rating', [ strMovie, strRating] );
    }); })(jQuery);