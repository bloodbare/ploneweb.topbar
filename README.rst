
Widget implementation available in the *implementation* folder. Structure is as follows:

* *fonts* and *img* folders are copied from the *mockup* folder
* js/load.js contains script that is to be imported as

  :: 

    <script src="http://my.domain/path/to/load.js"></script>

* js/index.js contains the widget html in jsonp format (required for cross-domain JS requests)
* css/reset.less css reset for the widget, generates css/reset.css via a `less <http://lesscss.org/>`_ compiler
* css/topbar.less slightly modfied version of the original topbar.css, generates topbar.css
* mockup.html represents an example usage of the widget.
