var expect = require('chai').expect
  , delay = require('./')
  , time = require('utilise.time')

describe('delay', function() {
  it('should create delayed op', function(done) {
    var result = 1
    delay(100, 2).then(d => {
      result = d
    })

    expect(result).to.be.eql(1)
    time(150, function(){
      expect(result).to.be.eql(2)
      done()
    })
  })
})