const conversion = montant => {
    // transformer le montant en texte
    var lettre = montant.toString();
    // remplacer tous les virgules en point
    lettre = lettre.replace(",", ".");
    // separer les entiers natureles
    var entier = lettre.split(".")[0];
    // separer les decimaux
    var decimal = lettre.split(".")[1];
    // declarer les resultats de chaque entites
    var resultentier = [];
    var resultdecimal = [];
    // declarer la sortie final
    var resultatfinal = "";

    // commencement du traitement de conversion
    const traitement = obj => {
      // supposons que obj = 2500
      // declarer une variable abstraite pour stocker les sorties
      let resultat = [];
      // separer les nombres en listes (array) [2,5,0,0]
      obj = obj.split("");
      // renverser l'emplacement [0,0,5,2]
      obj.reverse();

      // fonction qui traite les unites [0]
      var unite = nbr => {
        let u = [
          "",
          "un",
          "deux",
          "trois",
          "quatre",
          "cinq",
          "six",
          "sept",
          "huit",
          "neuf"
        ];
        return u[nbr];
      };
      // fonction qui traite les dizaines de dix à dix-neuf
      var unite2 = nbr => {
        let u = [
          "dix",
          "onze",
          "douze",
          "treize",
          "quatorze",
          "quinze",
          "seize",
          "dix sept",
          "dix huit",
          "dix neuf"
        ];
        return u[nbr];
      };
      // fonction qui traite les dizaines par dix
      var dizaine = nbr => {
        let u = [
          "",
          "dix",
          "vingt",
          "trente",
          "quarante",
          "cinquante",
          "soixante",
          "soixante",
          "quatre vingt",
          "quatre vingt"
        ];
        return u[nbr];
      };
      // debut du traitement par entite
      for (var i = 0; i < obj.length; i++) {
        switch (i) {
          // si c'est en unite
          case 0:
            resultat.push(unite(parseInt(obj[i]), null));
            break;
          // si c'est en dizaine
          case 1:
            switch (obj[i]) {
              case "1":
                resultat[i - 1] = "";
                resultat.push(unite2(parseInt(obj[i - 1], null)));
                break;
              case "7":
                resultat[i - 1] = "";
                resultat.push("soixante " + unite2(parseInt(obj[i - 1], null)));
                break;
              case "9":
                resultat[i - 1] = "";
                resultat.push(
                  "quatre vingt " + unite2(parseInt(obj[i - 1], null))
                );
                break;
              default:
                resultat.push(dizaine(parseInt(obj[i], null)));
                break;
            }
            break;
          // si c'est en centaine
          case 2:
            if (obj[i] === "1") {
              resultat.push("cent");
            } else {
              resultat.push(unite(parseInt(obj[i])) + " cent");
            }
            break;
          // si c'est en millier
          case 3:
            if (obj[i - 1] === "0") {
              resultat[i - 1] = "";
            }
            if (obj[i] === "1") {
              resultat.push("mille");
            } else {
              resultat.push(unite(parseInt(obj[i])) + " mille");
            }
            break;
          // si c'est en dizaine de millier
          case 4:
            switch (obj[i]) {
              case "1":
                resultat[i - 1] = "mille";
                resultat.push(unite2(parseInt(obj[i - 1])));
                break;
              case "7":
                resultat[i - 1] = "mille";
                resultat.push("soixante " + unite2(parseInt(obj[i - 1])));
                break;
              case "9":
                resultat[i - 1] = "mille";
                resultat.push("quatre vingt " + unite2(parseInt(obj[i - 1])));
                break;
              default:
                resultat.push(dizaine(parseInt(obj[i])));
                break;
            }
            break;
          // si c'est en centaine de millier
          case 5:
            if (obj[i] === "1") {
              resultat.push("cent");
            } else {
              resultat.push(unite(parseInt(obj[i])) + " cent");
            }
            break;
          // si c'est en million
          case 6:
            if (obj[i - 1] === "0" && obj[i - 3] === "0") {
              resultat[i - 1] = "";
              resultat[i - 3] = "";
            }
            resultat.push(unite(parseInt(obj[i])) + " million");
            break;
          // si c'est en dizaine de million
          case 7:
            switch (obj[i]) {
              case "1":
                resultat[i - 1] = "million";
                resultat.push(unite2(parseInt(obj[i - 1])));
                break;
              case "7":
                resultat[i - 1] = "million";
                resultat.push("soixante " + unite2(parseInt(obj[i - 1])));
                break;
              case "9":
                resultat[i - 1] = "million";
                resultat.push("quatre vingt " + unite2(parseInt(obj[i - 1])));
                break;
              default:
                resultat.push(dizaine(parseInt(obj[i])));
                break;
            }
            break;
          // si c'est en centaine de million
          case 8:
            if (obj[i] === "1") {
              resultat.push("cent");
            } else {
              resultat.push(unite(parseInt(obj[i])) + " cent");
            }
            break;
          // si c'est en milliard
          case 9:
            if (obj[i - 1] === "0" && obj[i - 3] === "0") {
              resultat[i - 1] = "";
              resultat[i - 3] = "";
            }
            resultat.push(unite(parseInt(obj[i])) + " milliard");
            break;
          // si c'est en dizaine de milliard
          case 10:
            switch (obj[i]) {
              case "1":
                resultat[i - 1] = "milliard";
                resultat.push(unite2(parseInt(obj[i - 1])));
                break;
              case "7":
                resultat[i - 1] = "milliard";
                resultat.push("soixante " + unite2(parseInt(obj[i - 1])));
                break;
              case "9":
                resultat[i - 1] = "milliard";
                resultat.push("quatre vingt " + unite2(parseInt(obj[i - 1])));
                break;
              default:
                resultat.push(dizaine(parseInt(obj[i])));
                break;
            }
            break;
          // si c'est en centaine de milliard
          case 11:
            if (obj[i] === "1") {
              resultat.push("cent");
            } else {
              resultat.push(unite(parseInt(obj[i])) + " cent");
            }
            break;
          // si c'est en millieme de milliard
          case 12:
            if (obj[i - 1] === "0") {
              resultat[i - 1] = "";
            }
            if (obj[i] === "1") {
              resultat.push("mille");
            } else {
              resultat.push(unite(parseInt(obj[i])) + " mille");
            }
            break;
          // si trop nombreux ou exception
          default:
            alert("nombre trop important ou non supporté");
            break;
        }
      }
      // renverser pour avoir l'ordre initial
      resultat = resultat.reverse();
      // supprimer les vides
      resultat = resultat.filter(elem => elem !== "");
      // concatener avec espace/ retour en texte
      resultat = resultat.join(" ");
      // supprimer les doubles espaces
      resultat = resultat.replace(/ {2}/g, " ");
      // renvoie la sortie finale
      return resultat;
    };
    // resultat des entiers
    resultentier = traitement(entier);
    // resultat final
    resultatfinal = resultentier;
    // concatener avec les decimaux si c'est possible
    if (decimal && parseInt(decimal)>0) {
      resultdecimal = traitement(decimal);
      resultatfinal += " virgule " + resultdecimal;
    }
    // affichage pour test de sortie
    console.log(JSON.stringify(resultatfinal));
  };
