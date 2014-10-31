/**
 * Created by Ryan on 10/29/14.
 */


var pLeft = [];

function startPickEm() {
    var numPlayers = 2;
        //selectNumPlayers();
    console.log(numPlayers);

    createPlayerData(numPlayers);

    console.log(playerData);

    displayPlayerInfo();
    displayRanksSelection();

    var list = getRank(1);
    displayPotPicks(list);
}

//May Not Need this Function
function potPicks(playerID){
    var pData = playerData[playerID];
    pLeft = [];

    for(var i = 0; i < pData.length; i++){
        if(!pData[i]){
            pLeft.push(i + 1);
        }
    }

    return pLeft;

}

function nextPlayersTurn(){
    playerData.curTurn++;
    if(playerData.curTurn > playerData.numPlayer)
        playerData.curTurn = 1;

    displayPlayerInfo();
    var fRank = playerData[playerData.curTurn].picksLeft[0];
    var list = getRank(fRank);
    displayPotPicks(list);
}


function getNumFromId(id){
    var index = id.indexOf('-');
    return id.toString().slice(index + 1);
}




startPickEm();


