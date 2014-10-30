/**
 * Created by Ryan on 10/29/14.
 */



var weights = Wrestler.getWeights();
var wrData = {};
var playerData = {};

weights.forEach(function(weight) {
    wrData[weight] = rankObject();
});

wrData.id = 0;

function rankObject() {
    return {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        0: []
    }

}


function fillBracket() {
    weights.forEach(function(weight) {
        for(var i = 1; i < 11; i++){
            var wr = Wrestler.randWrestler(weight);
            addWrestler(wr, i);
        }

    })
}

function addWrestler(wr, pos){
    var bracket = wrData[wr.weight];
    wr.id = wrData.id;
    wrData.id++;

    //TODO: Manage Rankings
    if(pos <= NUMRANKSPICKED){
        bracket[pos] = wr;
    } else {
        bracket[0].push(wr);
    }

}

function createPlayerData(numPlayers){
    for(var i = 1; i <= numPlayers; i++){
        playerData[i] = new Array (10);
    }
}

console.log(wrData);

fillBracket();
