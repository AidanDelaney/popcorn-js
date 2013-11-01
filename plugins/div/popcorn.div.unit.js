module( "Popcorn Div Plugin" );
// Copied mostly from the Popcorn Text Plugin

test( "Div", function() {

  var popped = Popcorn( "#video" ),
      expects = 5,
      textdiv = document.getElementById( "textdiv" );

  var strings = {
    PLAIN: "This is plain text",
    HTML: "<p>This is <em>HTML</em> text</p>",
  };

  var divs = {};
  Object.keys(strings).forEach(function(key){
      var elem = document.createElement( "div" );
      elem.innerHTML = strings[key];
      divs[key] = elem;
  });

  expect( expects );

  function injectString( s ) {
    var elem = document.createElement( "div" );
    elem.innerHTML = s;
    return elem.innerHTML;
  }

  stop();

  ok( "div" in popped, "div is a method of the popped instance" );

  equal( textdiv.childElementCount, 0, "initially, there is nothing inside textdiv" );

  // Simple text
  popped.div( {
    start: 1,
    end: 3,
    source: divs.PLAIN,
    target: 'textdiv'
  } )
  .cue( 2, function() {
    equal( textdiv.innerHTML, strings.PLAIN, "textdiv correctly displaying simple div contents" );
  } )
  .cue( 4, function() {
    // Ensure textdiv is empty when no .div is cue'd
    equal( textdiv.innerHTML, '', "textdiv is empty between cue'd divs" );
  } )
  .div( {
    start: 5,
    end: 8,
    source: divs.HTML,
    target: 'textdiv'
  } )
  .cue( 6, function() {
    // Ensure textdiv is empty when no .div is cue'd
    equal( textdiv.innerHTML, strings.HTML, "textdiv is displaying complex div contents" );
  } );

  // Start tests
  popped.play().volume( 0 );

});

