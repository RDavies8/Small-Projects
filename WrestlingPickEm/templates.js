/**
 * Created by Ryan on 10/29/14.
 */


var potPickTemplate = $('#pot-picks-template').html();
var ranksTemplate = $('#ranks-template').html();

var templates = {
    renderPotPickTemplate : Handlebars.compile(potPickTemplate),
    renderRanksTemplate : Handlebars.compile(ranksTemplate)
};
