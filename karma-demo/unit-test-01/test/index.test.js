import Index from '../src/index';

console.log('开始测试');

describe('index.js的测试', function () {
  it('1应该是数字', function() {
    // expect(isNum(1)).to.be.true
    Index.isNum(1).should.equal(true);
    Index.isNum(2).should.equal(true);
  });

  it('"1" 应该是字符', function() {
    // expect(isString('1')).to.be.true
    Index.isString('1').should.equal(true);
  });
})