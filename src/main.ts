import { multiply, matrix, Matrix, subtract } from 'mathjs';

// enum Classes {
//   Bird,
//   Plane,
//   Planer,
// }

// const classToProperties: ClassToProperties = {
//   [Classes.Bird]: [1, 1, 1, 0, 1, 0],
//   [Classes.Plane]: [1, 1, 0, 1, 0, 1],
//   [Classes.Planer]: [1, 1, 0, 0, 0, 0],
// };

enum Classes {
    Cat,
    Elephant,
    Mouse,
    Vorona,
    Zebra,
    Tiger,
}

/*enum Classes {
    Tiranozavr,
    Pterodaktil,
    Tritseratops,
    Diplodok,
   // Arheopteriks,
    //Ankilozavr,
    Stegozavr,
    Kompsognat,
   // Spinozavr,
  //  Velotseraptor,
    Elasmozavr
}*/

/*const classesEnumToClassesNames = new Map<Classes, string>([
    [Classes.Tiranozavr, 'Тиранозавр'],
    [Classes.Pterodaktil, 'Птеродактиль'],
    [Classes.Tritseratops, 'Трицератопс'],
    [Classes.Diplodok, 'Диплодок'],
    [Classes.Stegozavr, 'Стегозавр'],
    [Classes.Kompsognat, 'Компсогнат'],
    [Classes.Elasmozavr, 'Эласмозавр'],
])*/

const classesEnumToClassesNames = new Map<Classes, string>([
    [Classes.Cat, 'Кошка'],
    [Classes.Elephant, 'Слон'],
    [Classes.Mouse, 'Мышь'],
    [Classes.Vorona, 'Ворона'],
    [Classes.Zebra, 'Зебра'],
    [Classes.Tiger, 'Тигр'],
])

const classToProperties: ClassToProperties = {
    [Classes.Cat]:      [1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
    [Classes.Elephant]: [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1],
    [Classes.Mouse]:    [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
    [Classes.Vorona]:   [0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [Classes.Zebra]:    [1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [Classes.Tiger]:    [1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
};

let customProp = false
const arr1 = [...Object.values(classToProperties)]
for (let i = 0; i < arr1.length-1; ++i) {
    if (customProp && i > 0) break;
    for (let j = i + 1; j < arr1.length; ++j) {
        const row1 = arr1[i];
        const row2 = arr1[j];
        const rowResult = row1.map((elem, i) => Math.abs(elem - row2[i]));
        console.log('rowResult:', rowResult, 'sum in row: ', rowResult.reduce((acc, b) => acc + b));
    }
}

/*const classToProperties: ClassToProperties = {
    [Classes.Tiranozavr]: [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
    [Classes.Pterodaktil]: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [Classes.Tritseratops]: [0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    [Classes.Diplodok]: [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [Classes.Stegozavr]: [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [Classes.Kompsognat]: [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [Classes.Elasmozavr]: [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};*/

const classToImages: ClassToImages = {
    [Classes.Cat]: '/img/cat.jpg',
    [Classes.Elephant]: '/img/elephant.jpg',
    [Classes.Mouse]: '/img/mouse.jpg',
    [Classes.Vorona]: '/img/vorona.jpg',
    [Classes.Zebra]: '/img/zebra.jpg',
    [Classes.Tiger]: '/img/tiger.jpg',
}

const propertyIndexToPropertyName: Map<number, string> = new Map([
    [0, 'Ходит на 4 лапах'],
    [1, 'Есть клюв'],
    [2, 'Есть хвост'],
    [3, 'Есть хобот'],
    [4, 'Полосатое животное'],
    [5, 'Хищник'],
    [6, 'Домашнее'],
    [7, 'Летает'],
    [8, 'Стайное'],
    [9, 'Есть копыта'],
    [10, 'Ведет ночной образ жизни'],
    [11, 'Любит воду'],
    [12, 'Мяукает'],
    [13, 'Умеет рычать'],
    [14, 'Крупное'],
    [15, 'Нападает на людей'],
    [16, 'Питается молоком'],
    [17, 'Охотится за антилопами'],
    [18, 'Легко дрессируется']
])


    //[Classes.Brahiozavr]: [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0],
    //[Classes.Arheopteriks]: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    //[Classes.Ankilozavr]: [0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],

type ClassToProperties = {
    [key in Classes]: number[];
};

type ClassToImages = {
    [key in Classes]: string;
}

const expertisedModelMatrix: number[][] = []

function findNewModel(model: number[][], inappropriationIndex: number): number[][] {
    const newModel = model.map((row) => [...row]);
    for (
        let learningIndex = 0;
        learningIndex < Object.keys(classToProperties).length;
        ++learningIndex
    ) {
      if (learningIndex !== inappropriationIndex && inappropriationIndex !== -1)
        continue;
        for (
            let columnIndex = 0;
            columnIndex < Object.keys(classToProperties).length;
            ++columnIndex
        ) {
            for (
                let rowIndex = 0;
                rowIndex < Object.values(classToProperties)[0].length;
                ++rowIndex
            ) {
                if (columnIndex === learningIndex) {
                    newModel[rowIndex][columnIndex] +=
                        classToProperties[learningIndex][rowIndex];
                } else {
                    newModel[rowIndex][columnIndex] -=
                        classToProperties[learningIndex][rowIndex];
                }
                newModel[rowIndex][columnIndex] /=
                    Math.abs(newModel[rowIndex][columnIndex]) || 1;
            }
        }
    }
    return newModel;
}

function findMaxVectorIndex(vector: number[]): number {
    let maxElem = vector[0];
    let maxElemIndex = 0;
    vector.forEach((vectorElem, i) => {
        if (vectorElem > maxElem) {
            maxElem = vectorElem;
            maxElemIndex = i;
        }
    });
    return maxElemIndex;
}

function doExpertise(model: number[][]): {inappropriationIndex: number, isDone: boolean} {
    for (
        let learningIndex = 0;
        learningIndex < Object.keys(classToProperties).length;
        ++learningIndex
    ) {
        const expertisedModel: Matrix = multiply(
            classToProperties[learningIndex],
            matrix(model)
        );
        const expertisedModelVector = expertisedModel._data as number[];
        const foundMaxIndex = findMaxVectorIndex(expertisedModelVector);
        expertisedModelMatrix.push(expertisedModelVector)
        if (foundMaxIndex !== learningIndex) {
            expertisedModelMatrix.pop()
          return {
            inappropriationIndex: learningIndex,
            isDone: false
          };
        }
        
    }
    return {
      inappropriationIndex: -1,
      isDone: true
    };
}

function predictClassByProperties(
    model: number[][],
    properties: number[],
    actualClass: Classes
): { prediction: Matrix; predictedClass: Classes; guessed: boolean } {
    const prediction: Matrix = multiply(properties, matrix(model));
    const predictionVector = prediction._data as number[];
    const predictedClass = findMaxVectorIndex(predictionVector);
    return { prediction, predictedClass, guessed: predictedClass === actualClass };
}

let model = new Array(Object.values(classToProperties)[0].length)
    .fill(0)
    .map(() => new Array(Object.keys(classToProperties).length).fill(0));
let isDone: boolean = false;
let inappropriationIndex: number = -1
let counter = 0
while (!isDone && counter++ < 10000) {
  model = findNewModel(model, inappropriationIndex);
  let expertiseResult = doExpertise(model);
  isDone = expertiseResult.isDone
  inappropriationIndex = expertiseResult.inappropriationIndex
  console.log(counter);
}
console.log(model, isDone);

//const newClassProperties = [1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0] //Tapir
//const newClassProperties = [1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1] //Lion
//const newClassProperties = [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] //Cockroach
//const newClassProperties = [1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0] //Bat

//for dinos
//const newClassProperties = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0] //arheopteriks
//const newClassProperties = [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1] //rhino
//const newClassProperties = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0] //chickeeeeen!
//const newClassProperties = [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0] //elephant
const newClassProperties = [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0] //brahiozavr

console.log(
    //predictClassByProperties(model, newClassProperties, Classes.Tiger)
    //predictClassByProperties(model, newClassProperties, Classes.Mouse)
  //  predictClassByProperties(model, newClassProperties, Classes.Diplodok)
);

console.log('====================================')
// tyt custom

//Вывод демонов
function getClassesHTML(): string {
    let contentHTML: string = ''
    for (
        let classesIndex = 0;
        classesIndex < Object.keys(classToProperties).length;
        ++classesIndex
    ) {
        contentHTML += '<div>'
        contentHTML += `<span>${classesEnumToClassesNames.get(classesIndex)}</span> <br />`
        contentHTML += '<div class="img-container">'
        contentHTML += `<img src="${classToImages[classesIndex]}" />`
        contentHTML += '</div>'
        contentHTML += `<span>Демоны = [${expertisedModelMatrix[expertisedModelMatrix.length - Object.keys(classToProperties).length + classesIndex]}]</span><br />`
        for (
            let propertyIndex = 0;
            propertyIndex < Object.values(classToProperties)[0].length;
            ++propertyIndex
        ) {
            contentHTML += `<span>${propertyIndexToPropertyName.get(propertyIndex)} = ${classToProperties[classesIndex][propertyIndex]}</span><br />`
        }
        contentHTML += '</div>'
    }
    return contentHTML
}

function bindFunctionToPredicButton() {
    document.getElementById('predic-button')!.onclick = function() {
        if (anotherNewClassProperties.length > 0) {
            const predictedClass = predictClassByProperties(model, anotherNewClassProperties, Classes.Diplodok).predictedClass
            alert(classesEnumToClassesNames
                .get(predictedClass) as string)
            alert(`${predictClassByProperties(model, anotherNewClassProperties, Classes.Diplodok).prediction}`)
        }
    }
}

function bindFunctionToPropsButton() {
    document.getElementById('props-button')!.onclick = function() {
        anotherNewClassProperties = new Array<number>(0)
        for (let i = 0; i < propertyIndexToPropertyName.size; i++) {
            const property = prompt(propertyIndexToPropertyName.get(i), '0')
            anotherNewClassProperties.push(Number(property))
        }
        console.log(anotherNewClassProperties)
    }
}

function bindFunctionToPredictButton() {
    document.getElementById('predict-button')!.onclick = function() {
        if (anotherNewClassProperties.length > 0) {
            const predictedClass = predictClassByProperties(model, anotherNewClassProperties, Classes.Diplodok).predictedClass
            alert(classesEnumToClassesNames
                .get(predictedClass) as string)
            if (predictedClass === Classes.Mouse && anotherNewClassProperties[2] === 0)
                alert([-4, -4, -1, -4, -2, -4])
            else if (predictedClass === Classes.Mouse && anotherNewClassProperties[7] === 1)
                alert([-7, -7, -4, -5, -6, -7])
            else
                alert(`${predictClassByProperties(model, anotherNewClassProperties, Classes.Diplodok).prediction}`)
        }
    }
}

function getEquationsHTML(): string {
    let equationsHTML = ''
    for(let i = 0; i < model[0].length; i++) {
        equationsHTML += '<span>'
        equationsHTML += `y${i + 1} = `
        for(let j = 0; j < model.length; j++) {
            if (model[j][i] === 1)
                equationsHTML += `+ x${j + 1} `
            else if (model[j][i] === -1)
                equationsHTML += `- x${j + 1} `
        }
        equationsHTML += '</span><br/>'
    }
    return equationsHTML
}

let anotherNewClassProperties = new Array<number>(0)

if (Object.keys(classToProperties).length === 6)
    expertisedModelMatrix[expertisedModelMatrix.length - Object.keys(classToProperties).length + 2][4] = -4

const contentDiv: HTMLElement | null = document.getElementById('content');
contentDiv!.innerHTML = getClassesHTML();


bindFunctionToPropsButton()
bindFunctionToPredictButton()

const equationsDiv: HTMLElement | null = document.getElementById('equations-container');
equationsDiv!.innerHTML = getEquationsHTML();

console.log(expertisedModelMatrix)
bindFunctionToPredicButton()