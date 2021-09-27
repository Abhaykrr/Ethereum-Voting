var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts) {
  var electionInstance;

    
    it("System is having two candidates" , function(){
      return Election.deployed().then(function(instance){
        return instance.candidatesCount();
      }).then(function(count){
        assert.equal(count,2);
      });
    });


 it("System is having correct info about the candidates" ,function(){
  return Election.deployed().then(function(instance){
    electionInstance=instance;
    return electionInstance.candidates(1);
  }).then(function(candidate){
    assert.equal(candidate[1],"Doge","Doge is the candidate 1");
    assert.equal(candidate[0],1,"Correct Id ");
    assert.equal(candidate[2],0,"Current votes are zero")
    return electionInstance.candidates(2);
  }).then(function(candidate){
    assert.equal(candidate[1],"Shiba","Shiba is the candidate 2");
    assert.equal(candidate[0],2,"Correct Id ");
    assert.equal(candidate[2],0,"Current votes are zero")
  });
 });
    

});