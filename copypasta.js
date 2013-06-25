var redis = require('redis-client')
  , nerve = require('nerve')
  , sys = require('sys')
  , qs = require('querystring')
  , cp = require('child_process')
  , _ = require('underscore')._;


//language list
var languages = 
 [["apacheconf", "ApacheConf"],
  ["c", "C"],
  ["cpp", "C++"],
  ["objective-c", "Objective-C"],
  ["as3", "ActionScript 3"],
  ["php", "PHP"],
  ["java", "Java"],
  ["js", "JavaScript"],
  ["js+php", "JavaScript+PHP"],
  ["js+smarty", "JavaScript+Smarty"]];

var genLanguageList = function() {
  return languages.map( function(lang) {
    return '<option value="' + lang[0] + '">' + lang[1] + '</option>';
  } );
}

var formHtml = '<form action="/add" method="post">'
      +  '<label for="code">paste code</label><br>'
      +  '<textarea name="code" rows="25" cols="80"></textarea><br>'
      +  '<label for="language">language</label>'
      +  '<select name="language">'
      +  genLanguageList()
      +  '</select>'
      +  '<input type="submit" value="paste!" /></form>';

var addSnippet = function() {}
var showSnippet = function() {}

nerve.create( [
 [ /^\/([0-9]+)/, showSnippet ],
 [ nerve.post("/add"), addSnippet ],
 [ "/", function( req, res ) { res.respond( formHtml ); } ] 
]).listen( 8000 );
