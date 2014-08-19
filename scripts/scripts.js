/* ID Selector */
$('#nav'); // <div id="nav"></div>

/* Class Selector */
$('.content'); // <div class="content"></div>

/* Tag/Element Selector */
$('p');		// <p></p>
$('div');	// <div></div>

/* Universal Selector */
$('*'); // Selects all elements

/* Attribute Selector */
$('img[title]');					// <img title="something">
$('img[title="Paris"]');	// <img title="Paris">

/* Hierarchy Selector */
$('#nav a');	// <div id="nav"><a href="#">Home</a></div>
$('#main p');	// <div id="main"><p>This is a paragraph</p></div>

/* Direct Descendent Selector */
$('#main > p');
// Would select this paragraph: <div id="main"><p>This is a paragraph</p></div>
// But not this one: <div id="main"><div class="content"><p>This is a paragraph</p></div></div>

/* Visibility Selectors */
$(':hidden');		// Select elements that are hidden
$(':visible');	// Select elements that are visible

/* Forms Selectors */
$(':checkbox');	// <input type="checkbox">
$(':radio');		// <input type="radio">
$(':checked');	// Selects checkboxes and radio buttons that are checked
$(':file');			// <input type="file">
$(':submit');		// <input type="submit">