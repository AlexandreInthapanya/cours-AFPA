const valeur = require('./calculatriceRyanExport');
if (op == '+' ) {
    t = n1 + n2;
};
if (op == '-' ) {
    t = n1 - n2;
}
if (op == '*' ) {
    t = n1 * n2;
}
if (op == '/' ) {
//s'assurer que le dénominateur(n2) est différent de zéro
    if (n2 !== 0) {
        t = n1 / n2; 
    } else {
      //affichage à l'écran
      console.log("ERREUR: division par 0");
      
    }
}
module.exports = t;