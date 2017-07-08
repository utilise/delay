var promise = require('utilise.promise')

module.exports = function delay(ms, d){ 
  var p = promise()
    , t = setTimeout(function(){ p.resolve(d) }, ms)
  p.abort = function(){ clearTimeout(t) }
  return p
}