var contact = 
{
    init: function (nom, prenom) 
	{
        this.nom = nom;
        this.prenom = prenom;
    },
    
    decrire: function () 
	{
		var description = "Nom : "+this.nom+ ", Prénom : "+ this.prenom+".";
        return description;
    }
};

var contact1 = Object.create(contact);
contact1.init("Lévisse","Carole");

var contact2 = Object.create(contact);
contact2.init("Nelsonne","Mélodie");

var contacts = [contact1, contact2];

function ajouterContact()
	{
		var nouveauContact = Object.create(contact);
		var nom = prompt("Entrez le nom : ");
		var prenom = prompt("Entrez le prénom : ");
		nouveauContact.init(nom,prenom);
		contacts.push(nouveauContact);
	}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Bienvenue dans le gestionnaire des contacts");
console.log("1 : Lister les contacts");
console.log("2 : Ajouter un contact");
console.log("0 : Quitter");


while(gestionnaire!==0)
	{
		var gestionnaire = Number(prompt("Choisissez une option :"));
		
		
		if (gestionnaire===1)
			{	console.log(" ")
				console.log("Voici la liste de vos contacts : ")
				contacts.forEach(function (contact)
					{								console.log(contact.decrire());
					});
			 	console.log("");
				console.log("1 : Lister les contacts");
				console.log("2 : Ajouter un contact");
				console.log("0 : Quitter");
			}

		else if (gestionnaire===2)
			{
				var ajout= ajouterContact();
				console.log("Le nouveau contact a été ajouté.");
				console.log("");
				console.log("1 : Lister les contacts");
				console.log("2 : Ajouter un contact");
				console.log("0 : Quitter");
				
			}
		else if (gestionnaire>2||gestionnaire<0)
		{
			console.log("Je ne comprends l'option choisis");
			console.log("");
			console.log("1 : Lister les contacts");
			console.log("2 : Ajouter un contact");
			console.log("0 : Quitter");
		}
	}

if (gestionnaire===0)
	{
		console.log("");
		console.log("Vous avez quitter le gestionnaire, au revoir.");
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

