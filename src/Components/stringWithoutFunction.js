import React from 'react'
import { Table } from 'reactstrap';

const StringWithoutFunction = () => {
    // 1st method for Remove Trailing and Leading Zeros
    let no = "230.00";
    let removeNo = parseFloat(no);
    let lead = "00402";
    let removeLead = parseInt(lead);
    let allZero = "03.1400";
    let removeallZero = parseFloat(allZero);
    // 2 method
    let all = "03.1400";
    let removeall = Number(all);

    // 1st method for Reverse a String sentence
    let str = " the sky is blue";
    let trimed = str.trim();
    let reversedStr = trimed.split(" ").reverse().join(' ');
    //   "hello   world!  "
    let strB = "hello   world!  ";
    let trimedB = strB.trim();
    let reversedStrB = trimedB.split(" ").reverse().join(' ');
    //  2 method
    let startStr = " this line is too good for make a reverse sequence ";
    let listReverse = startStr.split(" ");
    let finalWord = "";
    let finalResult = "";
    for (let i = listReverse.length - 1; i >= 0; i--) {
        finalWord += listReverse[i] + " ";
        finalResult = finalWord.trim();
    }

    // all capital letters 1st method
    let letters = "hApPy";
    let arrangeOrder = letters.split('');
    const uppercase = arrangeOrder.filter((item) => item === item.toUpperCase());
    const lowercase = arrangeOrder.filter((item) => item === item.toLowerCase());
    const filteredItem = [...uppercase, ...lowercase].join('');
    // 2 method
    const result = [...'eetSW'].sort((a, b) => /[A-Z]/.test(a) ? /[A-Z]/.test(b) ? 0 : -1 : 0).join('');
    // 3 method
    let value = "HhAaPpPpYy";
    let upperLetter = "";
    let lowerLetter = "";
    for (let i of value) {
        if (i >= "A" && i <= "Z") {
            upperLetter += i;
        } else if (i >= "a" && i <= "z") {
            lowerLetter += i;
        }
    }
    // 4method
    let valuItems = "HELLOeautyB";
    let upper = valuItems.replace(/[^A-Z]*/g, "");
    let lower = valuItems.replace(/[^a-z]*/g, "");
    let getResult = ((upper) + (lower));

    // sorting without using array sort as ascending
    let arr = ["ValA", "ValB", "ValC", "ValD", "ValT", "ValG", "ValH", "ValF"];
    let temp=[]
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[j]
                arr[j]=arr[i]
                arr[i] = temp
            }
        }
    }
    
     // sorting without using array sort as ascending
     let arrD = ["ValA", "ValB", "ValC", "ValD", "ValT", "ValG", "ValH", "ValF"];
     let desc=[]
     for (let i = 0; i < arr.length; i++) {
         for (let j = i + 1; j < arr.length; j++) {
             if (arr[j] > arr[i]) {
                 desc = arrD[j]
                 arrD[j]=arrD[i]
                 arrD[i] = desc
             }
         }
     }
    // console.log(arrD,"arrD sort")

    // print Table
    let num = 3;
    let res;
    for (let i = 1; i <= 10; i++) {
        res = i * num
        // console.log(`${num} * ${i} = ${res}`, "table");
    }

    // Return a Boolean if a number is divisible by 10
    var x = 20;
    let boolean;
    if (x % 10 == 0) {
        boolean='even'
    }
    else {
        boolean='odd'
    }
    // console.log(boolean,'boolean')

    return (
        <div>
            <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Strings Without Function</h3>
            <p style={{ textDecoration: 'underline' }}>
                Problem 1: Remove Trailing and Leading Zeros
            </p>
            <p>{JSON.stringify(removeNo)}</p>
            <p>{JSON.stringify(removeLead)}</p>
            <p>{JSON.stringify(removeallZero)}</p>
            <p>{JSON.stringify(removeall)}</p>
            <p style={{ textDecoration: 'underline' }}>
                Problem 2: Reverse a String sentence
            </p>
            <p>{JSON.stringify(reversedStr)}</p>
            <p>{JSON.stringify(reversedStrB)}</p>
            <p>{JSON.stringify(finalResult)}</p>
            <p style={{ textDecoration: 'underline' }}>
                Problem 3: All capital letters to the front of a word
            </p>
            <p>{JSON.stringify(filteredItem)}</p>
            <p>{JSON.stringify(result)}</p>
            <p>{JSON.stringify(upperLetter + lowerLetter)}</p>
            <p>{JSON.stringify(getResult)}</p>
        </div>
    )
}

export default StringWithoutFunction;