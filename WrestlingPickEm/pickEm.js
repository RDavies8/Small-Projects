/**
 * Created by Ryan on 10/29/14.
 */


var curTurn = 1;
var pLeft = [];

function startPickEm() {
    var numPlayers = 2;
        //selectNumPlayers();
    console.log(numPlayers);

    createPlayerData(numPlayers);

    console.log(playerData);

    pLeft = potPicks(curTurn);

    listRanks();
    var list = getRank(1);
    showPotPick(list);
}

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




startPickEm();


