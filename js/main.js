jQuery( document ).ready( function() {

	// mean menu plugin //
	$( 'header nav' ).meanmenu();

	// textilate plugin //
	$( '.tlt' ).textillate();

	// custom jquery code //
	$( '#fb' ).click( function() { //listen for click on facebook icon
		$( '#fb' ).addClass( 'animated flip' ); //add animated class with flip animation
	} );

	$( '#tweet' ).click( function() { //listen for click on twitter icon
		$( '#tweet' ).addClass( 'animated flip' ); //add animated class with flip animation
	} );

	$( '#insta' ).click( function() { //listen for click on instagram icon
		$( '#insta' ).addClass( 'animated flip' ); //oadd animated class with flip animation
	} );

	$( '#yp' ).click( function() { //listen for click on yelp icon
		$( '#yp' ).addClass( 'animated flip' ); //add animated class with flip animation
	} );
} );

// custom javascript code //

//button for egift cards//
var button = document.getElementById( 'button1' );

button.addEventListener( 'click', function( event ) {
	event.preventDefault();

	var myElement = document.createElement( 'p' );

	myElement.innerHTML = '<p>Thank you for your purchase!</p>';
	document.getElementsByClassName( 'balance1' )[ 0 ].appendChild( myElement );
} );

//button for traditional gift cards//
var button = document.getElementById( 'button2' );

button.addEventListener( 'click', function( event ) {
	event.preventDefault();

	var myElement = document.createElement( 'p' );

	myElement.innerHTML = '<p>Thank you for your purchase!</p>';
	document.getElementsByClassName( 'balance2' )[ 0 ].appendChild( myElement );
} );
