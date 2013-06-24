(function(){
  var target = jQuery('#topbarcontainer');
  var baseURL = 'http://static.david.edw.ro/ploneweb.topbar/implementation';
  function loadWidgetHTML() {
    jQuery.ajax({
      url: baseURL + "/js/index.js",
      jsonpCallback: "populateWidget",
      jsonp: false,
      dataType: "jsonp",
      success: function(data){
        console.log(data);
        var dataHTML = data.join('\n');
        var html = dataHTML.replace(/\{\{ BASE_URL \}\}/g, baseURL);
        target.html(html);
      }
    });
  }
  function loadWidgetCSS() {
    var cssPaths = ['/css/reset.css', '/fonts/stylesheet.css', '/css/topbar.css'];
    jQuery.each(cssPaths, function(i, cssPath){
      var cssLink = jQuery('<link>', {
        rel: 'stylesheet',
        type: 'text/css',
        href: baseURL + cssPath
      });
      cssLink.appendTo('head');
    });
  }
  function loadSearchBox(){
    (function() {
      var cx = '000972445131351556642:syx6s4pgdp8';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
      '//www.google.com/cse/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  }
  jQuery(document).ready(function(){
    loadWidgetHTML();
    loadWidgetCSS();
    loadSearchBox();
  });
})();
