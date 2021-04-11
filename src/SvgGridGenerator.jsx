

export function getHexagonCoordPointInString(hexagon) {

    let coordInString = "";
    let coordList = hexagon.coordSommit;

    //coordInString = coordList.toString()

    // `${hello} ${bob}`

    coordInString =
        `${coordList.x[0]},${coordList.y[0]} 
         ${coordList.x[1]},${coordList.y[1]} 
         ${coordList.x[2]},${coordList.y[2]} 
         ${coordList.x[3]},${coordList.y[3]} 
         ${coordList.x[4]},${coordList.y[4]} 
         ${coordList.x[5]},${coordList.y[5]}`;


    return coordInString;

}


