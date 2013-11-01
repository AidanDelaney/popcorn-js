// PLUGIN: DIV

(function ( Popcorn ) {

  /**
   * Div popcorn plug-in
   *
   * Takes a given div and displays it in the target div.
   * The general usecase is to allow you to define your content
   * in hidden divs, then have the content display on cue.
   *
   * @param {Object} options
   *
   * Example:
     var p = Popcorn('#video')
        .div({
          id: "a-div",
          start: 5, // seconds
          end: 15, // seconds
          target: 'contentdiv'
        } )
   *
   */
  Popcorn.plugin( "div" , {
    manifest: {
      about: {
        name: "Popcorn Div Plugin",
        version: "0.1",
        author: "@aidandelaney",
        website: "www.ontologyengineering.org"
      },
      options: {
        source: {
          elem: "input",
          type: "text",
          label: "Source",
          optional: false
        },
        start: {
          elem: "input",
          type: "number",
          label: "Start"
        },
        end: {
          elem: "input",
          type: "number",
          label: "End"
        },
        target: "div-container"
      }
    },
    _setup: function( options ) {
    },
    /**
     * @member div
     * The start function will be executed when the currentTime
     * of the video  reaches the start time provided by the
     * options variable
     */
    start: function( event, options ){
      var target = Popcorn.dom.find( options.target );
      // get the contents of one div, and put them in the other
      var source = Popcorn.dom.find( options.source );

      target.innerHTML = source.innerHTML;
      target.style.display = "inline";
    },
    /**
     * @member div
     * The end function will be executed when the currentTime
     * of the video  reaches the end time provided by the
     * options variable
     */
    end: function( event, options ){
      var target = Popcorn.dom.find( options.target );
      target.innerHTML = "";
    },
    _teardown: function( options ) {
    }
  });
})( Popcorn );
