/**
 * Created by Ryan on 10/29/14.
 */

function showPotPick(list){
    var $pickCon = $('#pot-picks')
    $pickCon.html(templates.renderPotPickTemplate({"wrestlers" : list}));
}

function listRanks(){
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
            showPotPick(list);
        })
    }
}
