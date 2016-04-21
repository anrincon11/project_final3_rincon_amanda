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
var button = document.getElementById( 'button1' );//create variable for first button

button.addEventListener( 'click', function( event ) {//listen for a click on the variable
	event.preventDefault();//prevent default action when clicked

	var myElement = document.createElement( 'p' );//create a paragraph element

	myElement.innerHTML = '<p>Thank you for your purchase!</p>';//add thank you paragraph
	document.getElementsByClassName( 'balance1' )[ 0 ].appendChild( myElement );//add above button
} );

//button for traditional gift cards//
var button = document.getElementById( 'button2' );//create variable for first button

button.addEventListener( 'click', function( event ) {//listen for a click on the variable
	event.preventDefault();//prevent default action when clicked

	var myElement = document.createElement( 'p' );//create a paragraph element

	myElement.innerHTML = '<p>Thank you for your purchase!</p>';//add thank you paragraph
	document.getElementsByClassName( 'balance2' )[ 0 ].appendChild( myElement );//add above button
} );
