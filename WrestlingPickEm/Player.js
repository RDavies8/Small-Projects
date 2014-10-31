/**
 * Created by Ryan on 10/30/14.
 */

function Player(plNum){
    this.playerNum = plNum
    this.picksLeft = [];
    for(var i = 1; i <= NUMRANKSPICKED; i++){
        this.picksLeft.push(i);
    }
}

Player.prototype.selectWrestler = function(wr, rank) {
    var pL = this.picksLeft;
    var index = $.inArray(parseInt(rank), pL);

    if(index != -1) {
        pL.splice(index, 1);
    } else {
        console.log('Tried to Select a Rank Already Chosen');
    }

    //TODO Manage Wrestlers
}