export class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(o) {
        return new Vector2D(this.x + o.x, this.y + o.y);
    }
    sub(o) {
        return new Vector2D(this.x - o.x, this.y - o.y);
    }
    mult(m) {
        return new Vector2D(this.x * m, this.y * m);
    }
    lerp(vec, a) {
        return new Vector2D(
            this.x + (vec.x - this.x) * a,
            this.y + (vec.y - this.y) * a
        );
    }
}

export function magnitude(vec) {
    return Math.sqrt(
        vec.x * vec.x + vec.y * vec.y
    );
}

export function normalize(vec) {
    let mag = magnitude(vec);
    mag += 0.01;

    vec.x /= mag;
    vec.y /= mag;

    return vec;
}