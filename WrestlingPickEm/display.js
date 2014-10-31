/**
 * Created by Ryan on 10/29/14.
 */

function displayPlayerInfo(){
    var players = []
    for(var plNum in playerData){
        players.push(playerData[plNum]);
    }

    $('#player-tracker').html(
        templates.renderPlayerTrackerTemplate({'players' : players}));
}

function displayPotPicks(list){
    var $pickCon = $('#pot-picks')
    $pickCon.html(templates.renderPotPickTemplate({"wrestlers" : list}));

    list.forEach(function (wrestler) {
        var wrCon = $('#wrestler-' + wrestler.id);
        wrCon.click(event, function () {
            event.preventDefault();
            var id = getNumFromId(this.id);
            console.log('Id: ' + id);
            var wrData = getWrestler(id);
            console.log(wrData[0], wrData[1]);
            playerData[playerData.curTurn].selectWrestler(wrData[0], wrData[1]);
            nextPlayersTurn();
        })
    })
}

function displayRanksSelection(){
    var ranks = [];
    for(var i = 1; i <= NUMRANKSPICKED; i++){
        ranks.push({'rank' : i});
    }

    var $ranksCont = $('#ranks-selector');
    $ranksCont.html(templates.renderRanksTemplate({'ranks' : ranks}));

    for(var i = 1; i <= NUMRANKSPICKED; i++){
        var $rankBtn = $('#' + i);
        $rankBtn.click(event, function () {
            event.preventDefault();

            console.log('Rank ' + this.id + ' clicked');
            var list = getRank(this.id);
            displayPotPicks(list);
        })
    }
}
