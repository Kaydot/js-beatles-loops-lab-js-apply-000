// add solution here
function theBeatlesPlay(musicians,instruments){
    var emptyInfo=[];
    var names;
    
    
    for (names = 0; names< musicians.length; names++) { 
    emptyInfo.push(musicians [names] + " plays " + instruments[names]);
      
    }
    return emptyInfo;
}

function johnLennonFacts(facts){
  var count=0;
  while(count < facts.length){
    facts[count].push("!!!");
  }
}

  
