
const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;
const size = 50

// Dessine 1/6 de l'hexagone
// A faire i = 6 fois
function flat_hex_corner(center, size, i) {

    var angle_deg = 60 * i
    var angle_rad = PI / 180 * angle_deg
    return Point(center.x + size * cos(angle_rad),
        center.y + size * sin(angle_rad))
}

function Point(x, y) {
    return { x: x, y: y };
}

export function calc_coord_hexa(center) {

    let coord_sommets_hexa = []

    for (let i = 0; i < 7; i++) {
        coord_sommets_hexa = flat_hex_corner(center, size, i)
    }

    return coord_sommets_hexa

}