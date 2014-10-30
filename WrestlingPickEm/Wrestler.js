function Wrestler(fnm, lnm, wt){
    this.fName = fnm;
    this.lName = lnm;
    this.weight = wt;
    this.id = null;
}

Wrestler.randWrestler = function(weight) {
    if(!weight){
        var weights = Wrestler.getWeights();
        var wtIndex = Math.floor(Math.random() * weights.length);
        weight = weights[wtIndex];
    }

    var wr = new Wrestler(Wrestler.getFirstName(), Wrestler.getLastName(), weight);
    return wr;
}


Wrestler.getWeights = function() {
    return ['125', '133', '141', '149', '152', '165', '174', '184', '197', '285'];
}

Wrestler.getFirstName = function() {
    var fNames = ['Trevor', 'Ryan', 'Alex', 'John', 'Nick', 'Jim', 'Devin'];
    var nmIndex = Math.floor(Math.random() * fNames.length);
    return fNames[nmIndex];

}

Wrestler.getLastName = function() {
    var lNames = ['Clayton', 'Davies', 'Mill', 'Smith', 'Caton', 'Zoller', 'Chance'];
    var nmIndex = Math.floor(Math.random() * lNames.length);
    return lNames[nmIndex];

}

Wrestler.prototype.toString = function() {
    return this.fName + ' ' + this.lName + ': ' + this.weight;
}


