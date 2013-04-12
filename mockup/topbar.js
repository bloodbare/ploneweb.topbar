
// We need to get the information from the json

// We need to create the element on the top of the HTML
// It's going to be an iframe

// It generates the top bar using IFrame


(function ($, window, document, undefined) {


out = "<script>";
out += "$('#sites-select').click(function(){";
out += "location.url=$(this).val;";
out += "})</script>";

out += "<style>";
out += "#plone-global-topbar-wrapper {width: 100%; background-color: #333; margin: 0; padding: 0; display: inline-block}";
out += "#plone-global-topbar-mainlinks {float: left; width: 40%; margin-top: 20px;}";
out += "#plone-global-topbar-mainlinks a {font-size: 10pt; padding: 10px; font-family: Arial; text-decoration: none; color: #ddd;}";
out += "#plone-global-topbar-mainlinks a:hover {color: #eef;}";
out += "#plone-global-topbar-logo {float: left; width: 15%;}";
out += "#plone-global-topbar-searchbox {float: left; width: 25%;}";
out += "#plone-global-topbar-sites {float: left; width: 10%;}";
out += "</style>";

out += "<div id='plone-global-topbar-wrapper'>";
out += "<div id='plone-global-topbar-iframe'>";

// Logo
out += "<div id='plone-global-topbar-logo'><img alt='Plone' src='http://plone.org/logo.png'/></div>";

// Search box
out += "<div id='plone-global-topbar-searchbox'>";
out +=" <script> \
  (function() { \
    var cx = '000972445131351556642:syx6s4pgdp8'; \
    var gcse = document.createElement('script'); \
    gcse.type = 'text/javascript'; \
    gcse.async = true; \
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +\
        '//www.google.com/cse/cse.js?cx=' + cx; \
    var s = document.getElementsByTagName('script')[0];\
    s.parentNode.insertBefore(gcse, s); \
  })(); \
</script> \
<gcse:search></gcse:search>"
out += "</div>";

//<form id='global-topbar-search' action='http://google.com'><input type='text' name='inputsearch'/></form></div>";

// Main links
out += "<div id='plone-global-topbar-mainlinks'>";
// Planet
out += "<a href='http://planet.plone.org' title='Plone Planet'>PLANET</a>";
// Developers
out += "<a href='http://developers.plone.org' title='Plone Developers'>DEVELOPERS</a>";
// Network
out += "<a href='http://plone.com' title='Plone Com'>NETWORK</a>";
// Contribute to Plone
out += "<a href='http://plone.org' title='Plone Org'>CONTRIBUTE TO PLONE</a>";
// Community
out += "<a href='http://plone.org' title='Plone Org'>COMMUNITY</a>";

out += "</div>";

// Sites
out += "<div id='plone-global-topbar-sites'><select id='sites-select'>";

out += "<option value='http://plone.es'>Español</option>";
out += "<option value='http://plone.it'>Italian</option>";
out += "<option value='http://plone.ro'>Romania</option>";

out +="</select></div>";

out += "</div>";
out += "</div>";

var out_obj = $(out);

$('body').prepend(out_obj);
$('body').css('margin', 0);


$('#plone-top-bar-init').remove();

})(jQuery, window, document);