/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

var input = [];

function solution(_input) {
    const rowsAndCols = _input[0].split(" ").map((x) => parseInt(x));
    const [rowCount, colCount] = rowsAndCols;

    const map = _input.splice(1, rowCount + 1 ).map((row) => row.split(""));
    const mapDepth = map.map((c) => []);

    let doneCount = 0;
    let currentDepth = 0;
    let biggest = 0;

    while(doneCount < rowCount * colCount){

        for(let i = 0; i  < map.length; i++){

            const row = map[i];

            for(let j = 0 ; j < row.length; j++){

                if(mapDepth[i][j] !== undefined){
                    continue;
                }

                const col = row[j];
                if(col === "."){
                    mapDepth[i][j] = 0;
                    doneCount++;
                }

                const top = mapDepth[i -1] ? mapDepth[i -1][j] : undefined;
                const bottom = mapDepth[i + 1] ? mapDepth[i + 1][j] : undefined;
                const left = mapDepth[i][j -1];
                const right = mapDepth[i][j + 1];

                const isLessOrEqualThanCurrentDepth = (
                    top <= currentDepth ||
                    bottom <= currentDepth ||
                    right <= currentDepth ||
                    left <= currentDepth
                );

                if(isLessOrEqualThanCurrentDepth && col !== ".") {

                    const lowest = [currentDepth, top, bottom, left, right]
                        .reduce((prev, current) => current < prev ? current : prev, Infinity);

                    mapDepth[i][j] = lowest + 1;

                    if(lowest + 1 > biggest ){
                        biggest = lowest + 1;
                    }

                    doneCount++;
                }
            }
        }

        currentDepth++
    }

    return biggest.toString();
}

function ContestResponse(){
    const out = solution(input);
    console.log(out)
    //implement your code here using input array
}

module.exports = solution;

/*
L'objet de ce challenge est de déterminer la profondeur maximale des zones de sable mouvant d'un désert. Le désert est un rectangle composé de cases de terre ferme ou de sable mouvant. La profondeur d'une case de sable mouvant est le nombre minimal de déplacements horizontaux et/ou verticaux à effectuer pour accéder à une case de terre ferme.


Dans l'exemple ci-dessus les cases de terre ferme sont représentées par des . et les chiffres représentent la profondeur des cases de sable mouvant. La case en rouge a une profondeur de 2 car il faut faire au moins deux déplacements horizontaux et/ou verticaux (par exemple, un vers le haut et un vers la gauche, ou bien 2 vers la gauche) pour atteindre la terre ferme.

La terre ferme n'est pas nécessairement connexe, il peut y avoir des îles de terre ferme au milieu des sables mouvants. Par ailleurs, sur tout le contour de la carte rectangulaire, il n'y a que de la terre ferme.

Format des données

Entrée
Ligne 1 : deux entiers H et L compris entre 3 et 40 séparés par un espace, indiquant respectivement la hauteur et la largeur de la carte.
Lignes 2 à H+1 : les lignes de la carte représentées par des chaînes de L caractères. Les caractères de la ligne sont soit . (terre ferme) soit # (sable mouvant).

Sortie
Un entier représentant la profondeur maximale des zones de sable mouvant du désert.

 */