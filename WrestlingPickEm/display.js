/**
 * Created by Ryan on 10/29/14.
 */

function showPotPick(list){
    var $pickCon = $('#pot-picks')
    $pickCon.html(templates.renderPotPickTemplate({"wrestlers" : list}));
}
