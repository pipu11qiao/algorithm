class DogCatQueue {
    constructor() {
        this.dogData = [];
        this.catData = [];
        this.queueNum = 0;
    }

    pushDog(dog) {
        this.dogData.push({
            value: dog,
            num: this.queueNum++
        });
    }

    pushCat(cat) {
        this.catData.push({
            value: cat,
            num: this.queueNum++
        });
    }

    pollAll() {
        while (this.dogData.length > 0 && this.dogData.length > 0) {
            const animal = this.[this.dogData[0].num > this.catData[0].num ? 'catData' : 'dogData'].unshift();
            console.log(animal);
        }
        this.pollDog();
        this.pollCat();
    }

    pollDog() {
        while (this.dogData.length > 0) {
            console.log(this.dogData.unshift());
        }
    }

    pollCat() {
        while (this.catData.length > 0) {
            console.log(this.catData.unshift());
        }
    }

    isEmpty() {
        return this.isCatEmpty() && this.isDogEmpty();
    }

    isDogEmpty() {
        return this.dogData.length === 0;
    }

    isCatEmpty() {
        return this.catData.length === 0;
    }
}