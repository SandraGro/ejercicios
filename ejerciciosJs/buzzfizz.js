function numbers() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i, " buzz");
        } else {
            console.log(i, " fizz");
        }
    }
}

numbers();