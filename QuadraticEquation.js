class QuadraticEquation {
    a;
    b;
    c;

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    geta() {
        return this.a;
    }

    getb() {
        return this.b;
    }

    getc() {
        return this.c;
    }

    getDiscriminant() {
        return this.b * this.b - 4 * this.a * this.c;
    }

    getRoot1() {
        return (-this.b + Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    }

    getRoot2() {
        return (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a);
    }
}

let pt = new QuadraticEquation(1, 3, 1);

if (pt.getDiscriminant() > 0) {
    console.log(pt.getRoot1());
    console.log(pt.getRoot2());
} else if (pt.getDiscriminant() === 0) {
    console.log(pt.getRoot1());
} else {
    console.log('The equation has no roots');
}