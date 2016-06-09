var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('the todo.App', function() {
  describe('the todo object', function(){

    it('should have all the necessary methods', function(){
    });
  });
});

describe('the todo.util methods', function() {

  describe('the todo util methods', function(){

    it('should have a trimTodoName method', function() {
      expect(todo.util).to.have.property('trimTodoName');
      todo.util.trimTodoName.should.be.a('function');
    });

    it('should have a isValidTodoName method', function() {
      expect(todo.util).to.have.property('isValidTodoName');
      todo.util.isValidTodoName.should.be.a('function');
    });

    it('should have a getUniqueId method', function() {
      expect(todo.util).to.have.property('getUniqueId');
      todo.util.getUniqueId.should.be.a('function');
    });
  });

  describe('trimTodoName', function() {
    var myName = 'Ruth    ';
    var myLastName = 'Pardee';
    var myAddress = 'ruthmpardee935@gmail.com #3 ';

    it('return a string', function() {
      assert.typeOf(todo.util.trimTodoName(myName), 'string');
    });

    it('should remove white spaces', function() {
      expect(todo.util.trimTodoName(myName)).to.equal('Ruth');
    });

    it('should leave strings without white spaces untouched', function() {
      expect(todo.util.trimTodoName(myLastName)).to.equal('Pardee');
    });

    it('should ignore all other characters', function() {
      expect(todo.util.trimTodoName(myAddress).split(' ')).to.have.lengthOf(2);
    });
  });

  describe('isValidTodoName', function() {
    var validName = 'Ruth M. Pardee';
    var invalidName = 'R M P';

    it('should return a boolean', function() {
      assert.typeOf(todo.util.isValidTodoName(validName), 'boolean');
    });

    it('should allow names with special characters', function() {
      expect(todo.util.isValidTodoName(validName)).to.not.equal(false);
    });

    it('should not allow only single characters', function() {
      expect(todo.util.isValidTodoName(invalidName)).to.equal(false);
    });
    
  });

  describe('getUniqueId', function() {
    it('should return a number', function() {
      assert.typeOf(todo.util.getUniqueId(), 'number');
    });

    it('should increment the lastId', function() {
      expect(todo.util.getUniqueId()).to.equal(2);
    });
  });
});
































