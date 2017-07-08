var expect = require('chai').expect
  , delay = require('./')
  , time = require('utilise.time')

describe('delay', function() {
  it('should create delayed op', function(done) {
    var result = 1
    delay(50, 2).then(d => {
      result = d
    })

    expect(result).to.be.eql(1)
    time(100, function(){
      expect(result).to.be.eql(2)
      done()
    })
  })

  it('should allow cancelling delay', function(done) {
    var result = 1
      , d = delay(50, 2)
    d.then(d => { result = d })
    d.abort()

    expect(result).to.be.eql(1)
    time(100, function(){
      expect(result).to.be.eql(1)
      done()
    })
  })
})