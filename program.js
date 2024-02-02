"use:strict";
const readline = require("readline-sync");

// Luokka joka hallinnoi käyttäjän syötteitä ja valitsee oikean toiminnon
class HandleAnser {
    #userInput = new String();
    #data = new Array();

    constructor(userInput, premadeData) {
        this.#userInput = userInput;
        this.#data = premadeData;
        console.log("Käyttäjän valinta: " + this.#userInput);
    }

    processAnswer = () => {
        switch (this.#userInput) {
            case "1":
                this.#addData();
                break;
            case "2":
                //this.#searchData();
                let query = new String();
                query = readline.question("Nimi: ");
                let result = this.#searchData2(query, this.#data);
                console.log(`Tulos: ${result}`);
                break;
            case "3":
                this.#showData();
                break;
            case "4":
                this.#quit();
                break;
            default:
                console.log("Väärä valinta");
                break;
        }
    }

    #addData = () => {
        let userName = new String();
        let userPhone = new String();

        userName = readline.question("Anna nimi: ");
        userPhone = readline.question("Anna puhelinnumero: ");
        let tempPerson = new Person(userName, userPhone);
        this.#data.push(tempPerson);
    }

    #searchData = () => {
        let query = new String();

        console.log("Haetaan tietoja");
        query = readline.question("Nimi: ");
        let result = this.#data.find(target => target.name === query)
        if (result === undefined) {
            console.log("Ei löytynyt");
        }
        else {
            console.log(`Nimi: ${result.name}\nNumero: ${result.phone}`);
        }
    }

    #searchData2 = (query, listTosearch) => {
        console.log("Haetaan tietoja");
        let result = listTosearch.find(target => target.name === query)
        if (result === undefined) {
            return 0;
        }
        else {
            return result.phone;
        }
    }

    #showData = () => { 
        console.log("Tulostetaan tiedot");
        console.log(data.forEach(element => { console.log(`Nimi: ${element.name}\nNumero: ${element.phone}`) }))
    }

    #quit = () => {
        console.log("Ohjelma lopetetaan");
        process.exit(0);
    }

}

// Luokka joka pitää sisällään henkilön tiedot
class Person {
    name = new String();
    phone = new String();

    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
}

// Alustetaan data
let data = [new Person("Matti", "0401234567"), new Person("Teppo", "0501234567")];

// Pää loop joka pyörittää ohjelmaa
while (true) {
    console.log("--Valikko--");
    console.log("1. Lisää tieto");
    console.log("2. Hae tieto");
    console.log("3. Tulosta kaikki tiedot");
    console.log("4. Lopeta");
    console.log("-----------");

    let answer = readline.question("Valitse: ");
    const handlerObj = new HandleAnser(answer, data);
    handlerObj.processAnswer();

}