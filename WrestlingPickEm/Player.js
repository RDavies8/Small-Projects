/**
 * Created by Ryan on 10/30/14.
 */

function Player(plNum){
    this.playerNum = plNum
    this.picksLeft = [];
    for(var i = 1; i <= NUMRANKSPICKED; i++){
        this.picksLeft.push({'pick' : i, 'available' : 1});
    }
}

Player.prototype.selectWrestler = function(wr, rank) {
    var pL = this.picksLeft;

    pL[rank - 1].available = null;

    //if(index != -1) {
    //    pL.splice(index, 1);
    //} else {
    //    console.log('Tried to Select a Rank Already Chosen');
    //}

    //TODO Manage Wrestlers
}