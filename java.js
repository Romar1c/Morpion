tour = 1;
win_bleu = 0;
win_rouge = 0;

function changeValue(value_id){ 
    if((document.getElementById(value_id).value == 0)){
        tour++;
        document.getElementById("tour").innerText = "Tour n°" + tour + (tour%2 != 0 ? ", a Rouge de jouer.":", a Bleu de jouer.");
        
        if(tour%2==0){
            document.getElementById(value_id).value = 1;
            document.getElementById(value_id).style.backgroundColor = "#C20704"
        }
        else{
            document.getElementById(value_id).value = 2;
            document.getElementById(value_id).style.backgroundColor = "#001328"
        }
        if((verif_victoire() != 0) || (tour == 10)){
            if(verif_victoire() == 1){
                document.getElementById("tour").innerText = "Le joueur Rouge a gagné, felicitation.";
                win_rouge++;
            } 
            else if(verif_victoire() == 2){
                document.getElementById("tour").innerText = "Le joueur Bleu a gagné, felicitation.";
                win_bleu++;
            }
            else{
                document.getElementById("tour").innerText = "Egalite.";
            }
            document.getElementById("rouge").innerText = "Rouge: "+ win_rouge;
            document.getElementById("bleu").innerText = "Bleu: "+ win_bleu;
            for (let pas = 0; pas < 9; pas++) {
                document.getElementById(pas+1).value = 4;
            }
        }
    }

}

function verif_victoire(){
    if((verif_identique(1,2,3) == 1) || (verif_identique(4,5,6) == 1) || (verif_identique(7,8,9) == 1) || (verif_identique(1,4,7) == 1) || (verif_identique(2,5,8) == 1) || (verif_identique(3,6,9) == 1) || (verif_identique(1,5,9) == 1) || (verif_identique(7,5,3) == 1)){
        return 1;
    }
    else if((verif_identique(1,2,3) == 2) || (verif_identique(4,5,6) == 2) || (verif_identique(7,8,9) == 2) || (verif_identique(1,4,7) == 2) || (verif_identique(2,5,8) == 2) || (verif_identique(3,6,9) == 2) || (verif_identique(1,5,9) == 2) || (verif_identique(7,5,3) == 2)){
            return 2;
    }
    else{
        return 0;
    }
}

function verif_identique(id1, id2, id3){
    if((document.getElementById(id1).value == document.getElementById(id2).value) && (document.getElementById(id3).value == document.getElementById(id2).value)){
        return document.getElementById(id1).value;
    }
    else{
        return 0;
    }
    
}

function reset(){ 
    for (let pas = 0; pas < 9; pas++) {
        document.getElementById(pas+1).value = 0;
        document.getElementById(pas+1).style.backgroundColor = "#F4D895"
    }
    document.getElementById("tour").innerText = "Tour n°1, a Rouge de jouer."
    tour = 1;
}