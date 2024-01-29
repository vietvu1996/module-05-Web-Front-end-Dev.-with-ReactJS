let money = 10000;
const buyACar = (car: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy" + car);
            } else {
                reject("Do not enough money");
            }
        });
    })
}

money = 9999;
const promise = buyACar("VinFast").then(value => {
    console.log(value);
}, error => {
    console.error(error)
})