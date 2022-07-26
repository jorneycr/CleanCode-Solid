interface Bird {
    eat(): void;
    run(): void;
}

interface FlyingBird {
    fly(): void;
}

class Tucan implements Bird, FlyingBird {
    fly(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }

}

class Humminbird implements Bird, FlyingBird {
    fly(): void {
        throw new Error("Method not implemented.");
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }

}
class Ostrich implements Bird {
    eat(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }

}