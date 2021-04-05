
const PI = Math.PI;
const cos = Math.cos;
const sin = Math.sin;

// Dessine 1/6 de l'hexagone
// A faire i = 6 fois
export function flat_hex_corner(center, size, i) {

    var angle_deg = 60 * i
    var angle_rad = PI / 180 * angle_deg
    return Point(center.x + size * cos(angle_rad),
        center.y + size * sin(angle_rad))
}

export function Point(x, y) {
    return { x: x, y: y };
}