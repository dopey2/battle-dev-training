/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

var input = [];

function solution(_input) {
    const xml = _input[0];

    const xmlArray = xml.split("");
    const data = {};

    let isOpenTag = true;
    let depth = 1;

    for(let i = 0 ; i < xmlArray.length ; i++){
        const val = xmlArray[i];

        if(val === "-" +
            "" +
            ""){
            isOpenTag = false;
            continue;
        }

        if(isOpenTag){
            if(!data[val]){
                data[val] = [];
            }
            data[val].push(depth);
            depth++
        }
        else {
            depth--;
        }

        isOpenTag = true;
    }

    const tagWeight = {};

    for(let key in data){
        tagWeight[key] = data[key].reduce((accumulator, currentValue) => (1/currentValue) + accumulator, 0);
    }

    let biggest = {
        tagName: "",
        weight: 0
    };

    for(let key in tagWeight){
        if(tagWeight[key] > biggest.weight){
            biggest.tagName = key;
            biggest.weight = tagWeight[key];
        }

        if(tagWeight[key] === biggest.weight){
            if(key.charCodeAt(0) < biggest.tagName.charCodeAt(0)){
                biggest.tagName = key;
                biggest.weight = tagWeight[key];
            }
        }
    }

    return biggest.tagName;
}

function ContestResponse(){
    const out = solution(input);
    //implement your code here using input array
}

module.exports = solution;


/*

Enoncé
Dans ce challenge, on utilise un format de données qui est une version simplifiée du XML. Les noms des balises ne sont composés que d'une lettre minuscule, une balise ouvrante étant représentée par cette lettre seule et la balise fermante étant représentée par le caractère -, suivi de la lettre.

Par exemple, la chaîne ab-bcd-d-c-ae-e est l'équivalent de <a><b></b><c><d></d></c></a><e></e> en XML. La chaîne fournie sera toujours correctement formée.

On définit à présent la profondeur d'une balise comme 1 + le nombre de balises dans lesquelles elle est incluse.

Dans l'exemple précédent : a et e ont une profondeur de 1,
b et c ont une profondeur de 2
et d a une profondeur de 3.

On définit enfin le poids d'un nom de balise par la somme des inverses des profondeurs de chacune de ses occurrences.

Par exemple, dans la chaine a-abab-b-a-b, il y a : - deux balises a de profondeur 1 et 2
- deux balises b de profondeurs 1 et 3.
Le poids de a est donc de (1/1)+(1/2) = 1.5 et le poids de b est donc (1/1)+(1/3)=1.33.

Dans ce challenge vous devez déterminer la lettre correspondant à la balise de plus grand poids de la chaîne passée en paramètre.

Format des données

Entrée
Sur une seule ligne, une chaîne correctement formée d'au maximum 1024 caractères représentant une imbrication de balises.

Sortie
La lettre correspondant au nom de balise de plus grand poids. Si deux noms de balises ont le même poids, affichez le plus petit dans l'ordre alphabétique.

 */
