class MyClassName {
    constructor(namer) {
        this.namer = namer;
    }

    greeting() {
        console.log(`Hello from ${this.namer}`)
    }

    setName(namer) {
        this.namer = namer;
    }

}


const nikolai = new MyClassName("Nikolai");
nikolai.greeting();
nikolai.setName("Apollo");
nikolai.greeting();
