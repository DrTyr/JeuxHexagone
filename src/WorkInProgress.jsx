



//Function the generate the Grid as object gridObject of object hexagoneObject
export function generateEntireGrid2() {

    let grid = {
        firstHexagoneCenter: { x: 150, y: 150 },
        hexagones: [],
        numberHexagoneInColumn: numberHexagoneInColumn,
        numberHexagoneInRow: numberHexagoneInRow,
        //numberHexagoneInGrid: this.numberHexagoneInColumn * this.numberHexagoneInRow
    };

    let hexagone = {
        indice: 0,
        coordInGrid: { x: 0, y: 0 },
        coordSommit: { x: [], y: [] },
        coordCenter: { x: 0, y: 0 },
        size: hexagoneSize,
        color: "",
    };

    //Generate first event hexagone

    hexagone.coordCenter = grid.firstHexagoneCenter;
    hexagone.coordSommit = getOneHexagoneAllSummitCoordinate(hexagone);
    hexagone.indice = 0;
    grid.Hexagone[0][0] = hexagone;

    //Generate first odd hexagone

    hexagone.coordCenter.x = grid.firstHexagoneCenter.x + 1.5 * hexagone.size;
    hexagone.coordCenter.y = grid.firstHexagoneCenter.y + sin((60 * PI) / 180) * hexagone.size;
    hexagone.coordSommit = getOneHexagoneAllSummitCoordinate(hexagone);
    grid.Hexagone[1][0] = hexagone;

    //Generate the rest of the grid

    let hexagoneIndice = 0;

    for (let i = 0; i <= grid.numberHexagoneInRow; i++) {
        // grid.hexagones[i] = [];

        for (let j = 0; j <= grid.numberHexagoneInColumn; j++) {

            let hexagone = {
                indice: 0,
                coordInGrid: { x: 0, y: 0 },
                coordSommit: { x: [], y: [] },
                coordCenter: { x: 0, y: 0 },
                size: hexagoneSize,
                color: "",
            };

            //Comment sauter le premier tour de boucle ?
            if (i === 0 & j === 0) {
                continue;
            }
            else if (i === 1 & j === 0) {
                continue;
            }
            //Testing if drawing odd or even column i
            else if (i % 2 === 0) {
                hexagone.coordCenter.x =
                    grid.hexagones[i][j].coordCenter.x +
                    i * 3 * hexagone.size,
                    hexagone.coordCenter.y =
                    grid.hexagones[i][j].coordCenter.y +
                    2 * sin((60 * PI) / 180) * hexagone.size;
            } else {
                hexagone.coordCenter.x =
                    grid.hexagones[i][j].coordCenter.x +
                    i * 3 * hexagoneSize;
                hexagone.coordCenter.y = grid.firstHexagoneCenter.y;
            }

            // WTF tu écrases les valeurs hexagone.coordCenter.x et hexagone.coordCenter.y
            //   hexagone.coordCenter.x =
            //     grid.firstHexagoneCenter.x + j * 3 * hexagoneSize;
            //   hexagone.coordCenter.y =
            //     grid.firstHexagoneCenter.y +
            //     j * 2 * sin((60 * PI) / 180) * hexagoneSize;

            hexagone.coordSommit = getOneHexagoneAllSummitCoordinate(hexagone);

            //How to change both value at once ?
            hexagone.coordInGrid.x = i;
            hexagone.coordInGrid.y = j;

            hexagone.indice = hexagoneIndice++;

            grid.numberHexagoneInGrid++;
            grid.hexagones[i][j] = hexagone;
        }
    }

    return grid;
}