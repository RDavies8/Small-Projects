/**
 * Created by Ryan on 10/29/14.
 */

function getRank(rank){
    var list = [];
    if(rank > 8) {
        console.log('Can Only display Ranks 8 and Below and Unranked');
        return;
    } else if(rank == 0) console.log('Displaying Unranked...');
    else console.log('Displaying Rank ' + rank + '...')

    for(var weight in wrData){
        if(weight == 'id') continue;
        var bracket = wrData[weight];
        list.push(bracket[rank]);
    }
    return list;
}

function getWrestler(id, wt){
    if(wt) return getWrestlerWithWeight(id, wt);

    for(var weight in wrData){
        if(weight == 'id') continue;
        var bracket = wrData[weight];
        for(var wrRank in bracket){
            if(wrRank == 0){
                var unranked = bracket[wrRank];
                unranked.forEach(function (wrestler) {
                    if(wrestler.id == id) return [wrestler, 0];
                })
            } else {
                if(bracket[wrRank].id == id) return [bracket[wrRank], wrRank];
            }
        }

    }
}

function getWrestlerWithWeight(id, wt){
    var bracket = wrData[weight];
    for(var i = 1; i <= NUMRANKSPICKED; i++ ){
        var wr = bracket[i];
        if(wr.id == id) return wr;
    }
    var unranked = bracket[0];
    unranked.forEach(function(wr) {
        if(wr.id == id) return wr;
    })
    console.log('Wrestler Could Not Be Found');
    return null;
}
