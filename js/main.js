jQuery( document ).ready( function() {

	// mean menu plugin //
	$( 'header nav' ).meanmenu();

	// textilate plugin //
	$( '.tlt' ).textillate();

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
