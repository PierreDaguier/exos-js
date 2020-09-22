'use strict'





// On part du principe que le type de boisson est forcément compris entre 1 et 7 
// et qu'il ne peut être autre chose puisque les entrées sont des boutons sur la machine

// 1 = eau plate (0.5€), 2 = eau pétillante (0.5€), 3 = cola (1€), 4 = limonade (1€)
// 5 = jus de fruits (1€), 6 = bière (2€)

// Seules des pièces de (0.1€ ; 0.2€ ; 0.5€ ; 1€ ; 2€) sont reconnues par la machine



    function achatboisson (monnaie,type){
        // Ici on choisit la boisson
        if (type==1 || 2){
            let prix_à_payer = 0.5
        }
        else if(type==3 || 4 ||5){
            let prix_à_payer = 1
        }
        else {
            let prix_à_payer = 2
        }

        // Ici on insère la monnaie. Prix à payer est réinitialisé à chaque insertion de monnaie (matérialisé ici par la boucle while.
        while (true){
            prix_à_payer=prix_à_payer-monnaie
            if (monnaie>prix_à_payer)
                {return console.log(`La boisson est délivrée et la machine vous rend ${monnaie-prix_à_payer} €`)}
            else if(monnaie==prix_à_payer)
                {return console.log('La boisson est délivrée')}
            else {console.log(`Il vous reste ${prix_à_payer}€ à insérer dans la machine`)}

        }

    }