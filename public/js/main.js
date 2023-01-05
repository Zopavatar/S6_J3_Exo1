class Lieu {
    constructor (nom,personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

let Molengeek = new Lieu("Molengeek",[]);
let Snack = new Lieu("Snack",[]);
let Maison = new Lieu("Maison",[]);



class Personne {
    constructor(nom,prenom,argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
    }

    seDeplacer(départ,arrivée,personne,transport){
        transport.personnes.splice(transport.personnes.indexOf(personne),1);

        transport.embarquer(départ,personne,transport);

        arrivée.personnes.push(personne);

        départ.personnes.splice(départ.personnes.indexOf(personne),1);
    }
}

let Nathan = new Personne ("Gobbers", "Nathan", 45);

class bus {
    constructor(personnes,caisse){
        this.personnes = personnes;
        this.caisse = caisse;
    }

    embarquer(départ,personne,transport){
        if (personne.argent > 0) {
            personne.argent = personne.argent - 2.8;
            this.caisse = this.caisse + 2.8;

            transport.personnes.push(personne);
        } else {
            alert(`T'as pas de moula, fada`);
        }
    }
}


let transport = new bus ([],200);


Maison.personnes.push(Nathan);
console.log(Maison);
alert(`Il est 8h, vous êtes à la ${Maison.nom}`);

Nathan.seDeplacer(Maison,Molengeek,Nathan,transport);
alert(`Il est 8h30, vous êtes dans le bus`);
console.log(transport);
console.log(Nathan);
alert(`Il est 8h45, vous êtes à ${Molengeek.nom}`);
console.log(Molengeek);


Nathan.seDeplacer(Molengeek,Snack,Nathan,transport);
alert(`Il est 12h45, vous êtes dans le bus vers le ${Snack.nom}`);
console.log(transport);
console.log(Nathan);
alert(`Il est 13h, vous êtes à ${Snack.nom}`);
console.log(Snack);


alert(`Il est 13h30, vous décidez de rentrer à pied à Molengeek pour digérer`);
Molengeek.personnes.push(Nathan);
alert(`Il est 14h, vous êtes à ${Molengeek.nom}`);
console.log(Molengeek);


Nathan.seDeplacer(Molengeek, Maison,Nathan,transport);
alert(`Il est 17h10, vous êtes dans le bus vers la ${Maison.nom}`);
console.log(transport);
console.log(Nathan);
alert(`Il est 17h30, vous êtes à la ${Maison.nom}`);
console.log(Maison);



console.log(Nathan.argent);
console.log(transport.caisse);







