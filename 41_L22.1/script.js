const huiswerkMaken = (vak, callback) => {
    setTimeout(() => {
        console.log(`Ok, ok, ik ga nu mijn ${vak = "klote"} huiswerk maken`);
        callback();
    }, 1000);
};

const klaarMetHuiswerk = () => {
    console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("wiskunde", klaarMetHuiswerk);



const testNum = (number) => {
    return new Promise((resolve, reject) => {
        if(number > 10) {
            resolve(number + ' is groter dan 10')
        } else {
            reject(number + ' is kleiner dan 10')
        };
    });
};

testNum(1).then(greaterThenTen => console.log(greaterThenTen)).catch(lessThenTen => console.log(lessThenTen));
testNum(100).then(greaterThenTen => console.log(greaterThenTen)).catch(lessThenTen => console.log(lessThenTen));

const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (
        words.every(word => {
        return typeof word === 'string';
        })) {
        resolve(
        sortWords(
            words.map(word => {
            return word.toUpperCase();
            }))) } else {
        reject('Dit is geen string!');
    }
    });
};

const sortWords = words => {
    return new Promise((resolve, reject) => {
        if (words) {
        resolve(words.sort());
        } else {
        reject('Alleen strings');
        }
    });
};

const aCoupleOfWords = ['luna', 'hondenleven', 'slapen'];

makeAllCaps(aCoupleOfWords).then(sortWords(aCoupleOfWords)).then(strings => console.log(strings)).catch(notAString => console.log(notAString));

const aCoupleOfWordsAndNumbers = [5, 'hondenleven', 9];

makeAllCaps(aCoupleOfWordsAndNumbers).then(sortWords(aCoupleOfWords)).then(strings => console.log(strings)).catch(notAString => console.log(notAString));