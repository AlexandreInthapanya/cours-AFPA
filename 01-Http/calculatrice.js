console.log('Chargement de la fonction de calculatrice');

exports.calculatrice = function (operator, nb1, nb2){
	

	switch (operator){
		/*case "add":*/
		case "+": 
			return nb1 + nb2; break;

		/*case "sub":*/
		case "-": 
			return nb1 - nb2; break;

		/*case "mul":*/
		case "*": 
			return nb1 * nb2; break;

		/*case "div":*/
		case "/": 
		if (nb2 == 0){
			return ("erreur division par 0");
		} else {
			return (nb1 / nb2);
		}//EO if
		break;

		default:
		return ('404 erreur dans l\'opération');
		break;
		
	}//EO switch

}//EOF
