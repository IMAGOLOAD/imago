 <b:skin><![CDATA[/*
-----------------------------------------------
Template Style
Name:     Sakuta
Designer: Sakuta JP
URL:      www.sakutamart.com
----------------------------------------------- */

/* Variable definitions
   ====================
   <Variable name="keycolor" description="Main Color" type="color" default="#66bbdd" value="#cc6611"/>

   <Group description="Page Text" selector="body">
     <Variable name="body.font" description="Font" type="font"
         default="normal normal 12px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 12px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="body.text.color" description="Text Color" type="color" default="#222222" value="#222222"/>
   </Group>

   <Group description="Backgrounds" selector=".body-fauxcolumns-outer">
     <Variable name="body.background.color" description="Outer Background" type="color" default="#66bbdd" value="#ffffff"/>
     <Variable name="content.background.color" description="Main Background" type="color" default="#ffffff" value="#ffffff"/>
     <Variable name="header.background.color" description="Header Background" type="color" default="transparent" value="#ffffff"/>
   </Group>

   <Group description="Links" selector=".main-outer">
     <Variable name="link.color" description="Link Color" type="color" default="#2288bb" value="#cc6611"/>
     <Variable name="link.visited.color" description="Visited Color" type="color" default="#888888" value="#888888"/>
     <Variable name="link.hover.color" description="Hover Color" type="color" default="#33aaff" value="#ff9900"/>
   </Group>

   <Group description="Blog Title" selector=".header h1">
     <Variable name="header.font" description="Font" type="font"
         default="normal normal 60px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 60px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="header.text.color" description="Title Color" type="color" default="#3399bb"  value="#1177cc"/>
   </Group>

   <Group description="Blog Description" selector=".header .description">
     <Variable name="description.text.color" description="Description Color" type="color"
         default="#777777"  value="#ffffff"/>
   </Group>

   <Group description="Tabs Text" selector=".tabs-inner .widget li a">
     <Variable name="tabs.font" description="Font" type="font"
         default="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 14px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="tabs.text.color" description="Text Color" type="color" default="#999999" value="#999999"/>
     <Variable name="tabs.selected.text.color" description="Selected Color" type="color" default="#000000" value="#000000"/>
   </Group>

   <Group description="Tabs Background" selector=".tabs-outer .PageList">
     <Variable name="tabs.background.color" description="Background Color" type="color" default="#f5f5f5" value="#f5f5f5"/>
     <Variable name="tabs.selected.background.color" description="Selected Color" type="color" default="#eeeeee" value="#eeeeee"/>
   </Group>

   <Group description="Post Title" selector="h3.post-title, .comments h4">
     <Variable name="post.title.font" description="Font" type="font"
         default="normal normal 22px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal normal 22px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
   </Group>

   <Group description="Date Header" selector=".date-header">
     <Variable name="date.header.color" description="Text Color" type="color"
         default="$(body.text.color)" value="$(body.text.color)"/>
     <Variable name="date.header.background.color" description="Background Color" type="color"
         default="transparent" value="transparent"/>
     <Variable name="date.header.font" description="Text Font" type="font"
         default="normal bold 11px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 11px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="date.header.padding" description="Date Header Padding" type="string" default="inherit" value="inherit"/>
     <Variable name="date.header.letterspacing" description="Date Header Letter Spacing" type="string" default="inherit" value="inherit"/>
     <Variable name="date.header.margin" description="Date Header Margin" type="string" default="inherit" value="inherit"/>
   </Group>

   <Group description="Post Footer" selector=".post-footer">
     <Variable name="post.footer.text.color" description="Text Color" type="color" default="#666666" value="#666666"/>
     <Variable name="post.footer.background.color" description="Background Color" type="color"
         default="#f9f9f9" value="#f9f9f9"/>
     <Variable name="post.footer.border.color" description="Shadow Color" type="color" default="#eeeeee" value="#eeeeee"/>
   </Group>

   <Group description="Gadgets" selector="h2">
     <Variable name="widget.title.font" description="Title Font" type="font"
         default="normal bold 11px Arial, Tahoma, Helvetica, FreeSans, sans-serif" value="normal bold 11px Arial, Tahoma, Helvetica, FreeSans, sans-serif"/>
     <Variable name="widget.title.text.color" description="Title Color" type="color" default="#000000" value="#000000"/>
     <Variable name="widget.alternate.text.color" description="Alternate Color" type="color" default="#999999" value="#999999"/>
   </Group>

   <Group description="Images" selector=".main-inner">
     <Variable name="image.background.color" description="Background Color" type="color" default="#ffffff" value="#ffffff"/>
     <Variable name="image.border.color" description="Border Color" type="color" default="#eeeeee" value="#eeeeee"/>
     <Variable name="image.text.color" description="Caption Text Color" type="color" default="$(body.text.color)" value="$(body.text.color)"/>
   </Group>

   <Group description="Accents" selector=".content-inner">
     <Variable name="body.rule.color" description="Separator Line Color" type="color" default="#eeeeee" value="#eeeeee"/>
     <Variable name="tabs.border.color" description="Tabs Border Color" type="color" default="$(body.rule.color)" value="$(body.rule.color)"/>
   </Group>

   <Variable name="body.background" description="Body Background" type="background"
       color="$(body.background.color)" default="$(color) none repeat scroll top left" value="$(color) none repeat scroll top left"/>
   <Variable name="body.background.override" description="Body Background Override" type="string" default="" value=""/>

   <Variable name="body.background.gradient.cap" description="Body Gradient Cap" type="url"
       default="url(//www.blogblog.com/1kt/simple/gradients_light.png)" value="url(//www.blogblog.com/1kt/simple/gradients_light.png)"/>
   <Variable name="body.background.gradient.tile" description="Body Gradient Tile" type="url"
       default="url(//www.blogblog.com/1kt/simple/body_gradient_tile_light.png)" value="url(//www.blogblog.com/1kt/simple/body_gradient_tile_light.png)"/>

   <Variable name="content.background.color.selector" description="Content Background Color Selector" type="string" default=".content-inner" value=".content-inner"/>
   <Variable name="content.padding" description="Content Padding" type="length" default="10px" min="0" max="100px" value="10px"/>
   <Variable name="content.padding.horizontal" description="Content Horizontal Padding" type="length" default="$(content.padding)" min="0" max="100px" value="$(content.padding)"/>
   <Variable name="content.shadow.spread" description="Content Shadow Spread" type="length" default="40px" min="0" max="100px" value="40px"/>
   <Variable name="content.shadow.spread.webkit" description="Content Shadow Spread (WebKit)" type="length" default="5px" min="0" max="100px" value="5px"/>
   <Variable name="content.shadow.spread.ie" description="Content Shadow Spread (IE)" type="length" default="10px" min="0" max="100px" value="10px"/>

   <Variable name="main.border.width" description="Main Border Width" type="length" default="0" min="0" max="10px" value="0"/>

   <Variable name="header.background.gradient" description="Header Gradient" type="url" default="none" value="url(//www.blogblog.com/1kt/simple/gradients_light.png)"/>
   <Variable name="header.shadow.offset.left" description="Header Shadow Offset Left" type="length" default="-1px" min="-50px" max="50px" value="1px"/>
   <Variable name="header.shadow.offset.top" description="Header Shadow Offset Top" type="length" default="-1px" min="-50px" max="50px" value="2px"/>
   <Variable name="header.shadow.spread" description="Header Shadow Spread" type="length" default="1px" min="0" max="100px" value="3px"/>
   <Variable name="header.padding" description="Header Padding" type="length" default="30px" min="0" max="100px" value="30px"/>

   <Variable name="header.border.size" description="Header Border Size" type="length" default="1px" min="0" max="10px" value="0"/>
   <Variable name="header.bottom.border.size" description="Header Bottom Border Size" type="length" default="$(header.border.size)" min="0" max="10px" value="$(header.border.size)"/>
   <Variable name="header.border.horizontalsize" description="Header Horizontal Border Size" type="length" default="0" min="0" max="10px" value="0"/>

   <Variable name="description.text.size" description="Description Text Size" type="string" default="140%" value="140%"/>

   <Variable name="tabs.margin.top" description="Tabs Margin Top" type="length" default="0" min="0" max="100px" value="0"/>
   <Variable name="tabs.margin.side" description="Tabs Side Margin" type="length" default="30px" min="0" max="100px" value="30px"/>
   <Variable name="tabs.background.gradient" description="Tabs Background Gradient" type="url"
       default="url(//www.blogblog.com/1kt/simple/gradients_light.png)" value="url(//www.blogblog.com/1kt/simple/gradients_light.png)"/>
   <Variable name="tabs.border.width" description="Tabs Border Width" type="length" default="1px" min="0" max="10px" value="1px"/>
   <Variable name="tabs.bevel.border.width" description="Tabs Bevel Border Width" type="length" default="1px" min="0" max="10px" value="1px"/>

   <Variable name="post.margin.bottom" description="Post Bottom Margin" type="length" default="25px" min="0" max="100px" value="25px"/>

   <Variable name="image.border.small.size" description="Image Border Small Size" type="length" default="2px" min="0" max="10px" value="2px"/>
   <Variable name="image.border.large.size" description="Image Border Large Size" type="length" default="5px" min="0" max="10px" value="5px"/>

   <Variable name="page.width.selector" description="Page Width Selector" type="string" default=".region-inner" value=".region-inner"/>
   <Variable name="page.width" description="Page Width" type="string" default="auto" value="auto"/>

   <Variable name="main.section.margin" description="Main Section Margin" type="length" default="15px" min="0" max="100px" value="15px"/>
   <Variable name="main.padding" description="Main Padding" type="length" default="15px" min="0" max="100px" value="15px"/>
   <Variable name="main.padding.top" description="Main Padding Top" type="length" default="30px" min="0" max="100px" value="30px"/>
   <Variable name="main.padding.bottom" description="Main Padding Bottom" type="length" default="30px" min="0" max="100px" value="30px"/>

   <Variable name="paging.background"
       color="$(content.background.color)"
       description="Background of blog paging area" type="background"
       default="transparent none no-repeat scroll top center" value="transparent none no-repeat scroll top center"/>

   <Variable name="footer.bevel" description="Bevel border length of footer" type="length" default="0" min="0" max="10px" value="0"/>

   <Variable name="mobile.background.overlay" description="Mobile Background Overlay" type="string"
       default="transparent none repeat scroll top left" value="transparent none repeat scroll top left"/>
   <Variable name="mobile.background.size" description="Mobile Background Size" type="string" default="auto" value="auto"/>
   <Variable name="mobile.button.color" description="Mobile Button Color" type="color" default="#ffffff"  value="#ffffff"/>

   <Variable name="startSide" description="Side where text starts in blog language" type="automatic" default="left" value="left"/>
   <Variable name="endSide" description="Side where text ends in blog language" type="automatic" default="right" value="right"/>
*/

/* HEAD BAR
----------------------------------------------- */

.sakuta {z-index: 9999; position: fixed; left: 0; top: 100; width: 100%; padding:0 0px;} 
.sakutabar{width:100%}
.sakuta ul {border:0px solid  #C0C0C0 ;background-color:	#260818;height:70px;line-height:10px;margin:0;padding:10px 0px;}
.sakuta li {list-style:none;margin:0px 0px;padding:0px 0px;color:white;float:center;display:inline;position:relative;}
.sakuta li a{display:block;margin:0px 0px;padding:0px 15px;color:white;text-decoration:none;font-weight:bold;line-height:50px;outline:none;border-left:0px solid #0000FF;border-right:0px solid #4c1130}
.sakuta li a:hover{background: 	#C0C0C0}
.sakuta li ul{position:absolute;z-index:10;left:0px;top:100%;height:auto;margin:0px 0px;padding:0px 0px;width:200px;display:none;}
.sakuta li ul a{border-left:none;border-right:none;border-bottom:2px solid #6F80A1;display:block}
.sakuta ul li a:hover{background: 	#ffffff}
.sakuta li ul li {float:none;display:block;width:auto}
.sakuta li ul ul{top:0px;left:100%}
.sakuta li a:focus{background-color:#4B67A1;border-left-color:#777;border-right-color:#555}
.sakuta ul li a:focus{background-color:#4B67A1;border-top-color:#777;border-bottom-color:#555}
.sakuta li a:hover,
.sakuta li:hover > a{background-color:#4B67A1}

#header h1 {
    margin:50;
    padding:5px 0 0 10px;
    font-size: 100%;
    font-weight:bold;
    line-height: 1.2em;
    letter-spacing:.0em;
    font-style:italic;
    color:#FFFFFF;
    visibility:hidden;
    }


/* Header outer
----------------------------------------------- */

.header-outer{
left:0px;
width:970px;
height:90px;
bottom:0px;

}


/* Scroll up
----------------------------------------------- */
#ScrollToTop{text-align:center;z-index:9999;position:fixed;bottom:40px; right:30px;cursor:pointer;display:none;opacity:0.7;}
#ScrollToTop:hover{opacity:1;}




/* Content
----------------------------------------------- */
body {
  font: $(body.font);
  color: $(body.text.color);
  background: $(body.background);
  padding: 0 $(content.shadow.spread) $(content.shadow.spread) $(content.shadow.spread);
  $(body.background.override)
}

html body $(page.width.selector) {
  min-width: 0;
  max-width: 100%;
  width: $(page.width);
}

h2 {
  font-size: 22px;
}

a:link {
  text-decoration:none;
  color: $(link.color);
}

a:visited {
  text-decoration:none;
  color: $(link.visited.color);
}

a:hover {
  text-decoration:underline;
  color: $(link.hover.color);
}

.body-fauxcolumn-outer .fauxcolumn-inner {
  background: transparent $(body.background.gradient.tile) repeat scroll top left;
  _background-image: none;
}

.body-fauxcolumn-outer .cap-top {
  position: absolute;
  z-index: 1;
  height: 400px;
  width: 100%;
  background: $(body.background);
  $(body.background.override)
}

.body-fauxcolumn-outer .cap-top .cap-left {
  width: 100%;
  background: transparent $(body.background.gradient.cap) repeat-x scroll top left;
  _background-image: none;
}

.content-outer {
  -moz-box-shadow: 0 0 $(content.shadow.spread) rgba(0, 0, 0, .15);
  -webkit-box-shadow: 0 0 $(content.shadow.spread.webkit) rgba(0, 0, 0, .15);
  -goog-ms-box-shadow: 0 0 $(content.shadow.spread.ie) #333333;
  box-shadow: 0 0 $(content.shadow.spread) rgba(0, 0, 0, .15);

  margin-bottom: 1px;
}

.content-inner {
  padding: $(content.padding) $(content.padding.horizontal);
}

$(content.background.color.selector) {
  background-color: $(content.background.color);
}

/* Header
----------------------------------------------- */
.header-outer {
  background: $(header.background.color) $(header.background.gradient) repeat-x scroll 0 -400px;
  _background-image: none;
}

.Header h1 {
  font: $(header.font);
  color: $(header.text.color);
  text-shadow: $(header.shadow.offset.left) $(header.shadow.offset.top) $(header.shadow.spread) rgba(0, 0, 0, .2);
}

.Header h1 a {
  color: $(header.text.color);
}

.Header .description {
  font-size: $(description.text.size);
  color: $(description.text.color);
}

.header-inner .Header .titlewrapper {
  padding: 22px $(header.padding);
}

.header-inner .Header .descriptionwrapper {
  padding: 0 $(header.padding);
}

/* Tabs
----------------------------------------------- */
.tabs-inner .section:first-child {
  border-top: $(header.bottom.border.size) solid $(tabs.border.color);
}

.tabs-inner .section:first-child ul {
  margin-top: -$(header.border.size);
  border-top: $(header.border.size) solid $(tabs.border.color);
  border-left: $(header.border.horizontalsize) solid $(tabs.border.color);
  border-right: $(header.border.horizontalsize) solid $(tabs.border.color);
}

.tabs-inner .widget ul {
  background: $(tabs.background.color) $(tabs.background.gradient) repeat-x scroll 0 -800px;
  _background-image: none;
  border-bottom: $(tabs.border.width) solid $(tabs.border.color);

  margin-top: $(tabs.margin.top);
  margin-left: -$(tabs.margin.side);
  margin-right: -$(tabs.margin.side);
}

.tabs-inner .widget li a {
  display: inline-block;

  padding: .6em 1em;

  font: $(tabs.font);
  color: $(tabs.text.color);

  border-$startSide: $(tabs.border.width) solid $(content.background.color);
  border-$endSide: $(tabs.bevel.border.width) solid $(tabs.border.color);
}

.tabs-inner .widget li:first-child a {
  border-$startSide: none;
}

.tabs-inner .widget li.selected a, .tabs-inner .widget li a:hover {
  color: $(tabs.selected.text.color);
  background-color: $(tabs.selected.background.color);
  text-decoration: none;
}

/* Columns
----------------------------------------------- */
.main-outer {
  border-top: $(main.border.width) solid $(body.rule.color);
}

.fauxcolumn-left-outer .fauxcolumn-inner {
  border-right: 1px solid $(body.rule.color);
}

.fauxcolumn-right-outer .fauxcolumn-inner {
  border-left: 1px solid $(body.rule.color);
}

/* Headings
----------------------------------------------- */
div.widget > h2,
div.widget h2.title {
  margin: 0 0 1em 0;

  font: $(widget.title.font);
  color: $(widget.title.text.color);
}

/* Widgets
----------------------------------------------- */
.widget .zippy {
  color: $(widget.alternate.text.color);
  text-shadow: 2px 2px 1px rgba(0, 0, 0, .1);
}

.widget .popular-posts ul {
  list-style: none;
}

/* Posts
----------------------------------------------- */
h2.date-header {
  font: $(date.header.font);
}

.date-header span {
  background-color: $(date.header.background.color);
  color: $(date.header.color);
  padding: $(date.header.padding);
  letter-spacing: $(date.header.letterspacing);
  margin: $(date.header.margin);
}

.main-inner {
  padding-top: $(main.padding.top);
  padding-bottom: $(main.padding.bottom);
}

.main-inner .column-center-inner {
  padding: 0 $(main.padding);
}

.main-inner .column-center-inner .section {
  margin: 0 $(main.section.margin);
}

.post {
  margin: 0 0 $(post.margin.bottom) 0;
}

h3.post-title, .comments h4 {
  font: $(post.title.font);
  margin: .75em 0 0;
}

.post-body {
  font-size: 110%;
  line-height: 1.4;
  position: relative;
}

.post-body img, .post-body .tr-caption-container, .Profile img, .Image img,
.BlogList .item-thumbnail img {
  padding: $(image.border.small.size);

  background: $(image.background.color);
  border: 1px solid $(image.border.color);

  -moz-box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
  -webkit-box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
}

.post-body img, .post-body .tr-caption-container {
  padding: $(image.border.large.size);
}

.post-body .tr-caption-container {
  color: $(image.text.color);
}

.post-body .tr-caption-container img {
  padding: 0;

  background: transparent;
  border: none;

  -moz-box-shadow: 0 0 0 rgba(0, 0, 0, .1);
  -webkit-box-shadow: 0 0 0 rgba(0, 0, 0, .1);
  box-shadow: 0 0 0 rgba(0, 0, 0, .1);
}

.post-header {
  margin: 0 0 1.5em;

  line-height: 1.6;
  font-size: 90%;
}

.post-footer {
  margin: 20px -2px 0;
  padding: 5px 10px;

  color: $(post.footer.text.color);
  background-color: $(post.footer.background.color);
  border-bottom: 1px solid $(post.footer.border.color);

  line-height: 1.6;
  font-size: 90%;
}

#comments .comment-author {
  padding-top: 1.5em;

  border-top: 1px solid $(body.rule.color);
  background-position: 0 1.5em;
}

#comments .comment-author:first-child {
  padding-top: 0;
  border-top: none;
}

.avatar-image-container {
  margin: .2em 0 0;
}

#comments .avatar-image-container img {
  border: 1px solid $(image.border.color);
}

/* Comments
----------------------------------------------- */
.comments .comments-content .icon.blog-author {
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB9sLFwMeCjjhcOMAAAD+SURBVDjLtZSvTgNBEIe/WRRnm3U8RC1neQdsm1zSBIU9VVF1FkUguQQsD9ITmD7ECZIJSE4OZo9stoVjC/zc7ky+zH9hXwVwDpTAWWLrgS3QAe8AZgaAJI5zYAmc8r0G4AHYHQKVwII8PZrZFsBFkeRCABYiMh9BRUhnSkPTNCtVXYXURi1FpBDgArj8QU1eVXUzfnjv7yP7kwu1mYrkWlU33vs1QNu2qU8pwN0UpKoqokjWwCztrMuBhEhmh8bD5UDqur75asbcX0BGUB9/HAMB+r32hznJgXy2v0sGLBcyAJ1EK3LFcbo1s91JeLwAbwGYu7TP/3ZGfnXYPgAVNngtqatUNgAAAABJRU5ErkJggg==);
}

.comments .comments-content .loadmore a {
  border-top: 1px solid $(widget.alternate.text.color);
  border-bottom: 1px solid $(widget.alternate.text.color);
}

.comments .comment-thread.inline-thread {
  background-color: $(post.footer.background.color);
}

.comments .continue {
  border-top: 2px solid $(widget.alternate.text.color);
}

/* Accents
---------------------------------------------- */
.section-columns td.columns-cell {
  border-$startSide: 1px solid $(body.rule.color);
}

.blog-pager {
  background: $(paging.background);
}

.blog-pager-older-link, .home-link,
.blog-pager-newer-link {
  background-color: $(content.background.color);
  padding: 5px;
}

.footer-outer {
  border-top: $(footer.bevel) dashed #bbbbbb;
}

/* Mobile
----------------------------------------------- */
body.mobile  {
  background-size: $(mobile.background.size);
}

.mobile .body-fauxcolumn-outer {
  background: $(mobile.background.overlay);
}

.mobile .body-fauxcolumn-outer .cap-top {
  background-size: 100% auto;
}

.mobile .content-outer {
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, .15);
  box-shadow: 0 0 3px rgba(0, 0, 0, .15);
}

body.mobile .AdSense {
  margin: 0 -$(content.shadow.spread);
}

.mobile .tabs-inner .widget ul {
  margin-left: 0;
  margin-right: 0;
}

.mobile .post {
  margin: 0;
}

.mobile .main-inner .column-center-inner .section {
  margin: 0;
}

.mobile .date-header span {
  padding: 0.1em 10px;
  margin: 0 -10px;
}

.mobile h3.post-title {
  margin: 0;
}

.mobile .blog-pager {
  background: transparent none no-repeat scroll top center;
}

.mobile .footer-outer {
  border-top: none;
}

.mobile .main-inner, .mobile .footer-inner {
  background-color: $(content.background.color);
}

.mobile-index-contents {
  color: $(body.text.color);
}

.mobile-link-button {
  background-color: $(link.color);
}

.mobile-link-button a:link, .mobile-link-button a:visited {
  color: $(mobile.button.color);
}

.mobile .tabs-inner .section:first-child {
  border-top: none;
}

.mobile .tabs-inner .PageList .widget-content {
  background-color: $(tabs.selected.background.color);
  color: $(tabs.selected.text.color);
  border-top: $(tabs.border.width) solid $(tabs.border.color);
  border-bottom: $(tabs.border.width) solid $(tabs.border.color);
}

.mobile .tabs-inner .PageList .widget-content .pagelist-arrow {
  border-$startSide: 1px solid $(tabs.border.color);
}


@media screen and (max-width: 768px){
.header-wrapper{margin-right:0;min-height:0;width:100%}
#header{text-align:center;width:100%;max-width:none}
#header-inner{margin:10px 0}
#menu{position:relative;margin:0}

]]></b:skin>




