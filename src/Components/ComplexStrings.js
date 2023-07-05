import React, { useState } from 'react'

const ComplexStrings = () => {
  const [userDetail, setUserDetail] = useState({
    show: "",
    stringsToAdd: "",
  });
  // make palindrome
  const makePalindromeApproach1 = (str = "") => {
    let copyPalindrome = str.split("").reverse().join("").slice(1);
    let result = str + copyPalindrome;
    setUserDetail({ show: result, stringsToAdd: copyPalindrome })
  }
  // 2nd method for make palindrome
  const handlePalindromeApproach2 = (str = "") => {
    const makePalindrome = [];
    let palindromeResult = "";
    for (let i = 0; i < str.length; i++) {
      const step = [...str.slice(i)]
      if (str.slice(i) !== step.reverse().join('')) {
        makePalindrome.push(str[i])
        palindromeResult = str + makePalindrome.join("");
        setUserDetail({ ...userDetail, show: palindromeResult })
      }
    }
  }

  const addPersisteneceApproach1 = (num) => {
    let times = 0;
    num = num.toString();
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a + b).toString();
    }
    setUserDetail({ ...userDetail, show: times })
    return times;
  }

  const multiPersisteneceApproach1 = (num) => {
    let times = 0;
    num = num.toString();
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    setUserDetail({ ...userDetail, show: times })
    return times;
  }

  // object of all entries having unique marks
  const getUniqueValues = {
    0: { age: 17, name: 'john', marks: '400' },
    1: { age: 18, name: 'julie', marks: '400' },
    2: { age: 16, name: 'Robin', marks: '200' },
    3: { age: 16, name: 'Bella', marks: '300' },
    4: { age: 16, name: 'john', marks: '250' },
    5: { age: 15, name: 'julie', marks: '250' }
  }
  let filtered = Object.values(getUniqueValues);
  let filterAge = filtered.sort((a, b) => b.age - a.age);
  //1st method
  const uniqueValues = filterAge.reduce((accumulator, currentValue) => {
    if (!accumulator.find((item) => item.marks === currentValue.marks)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  // 2rd Method for object of all entries having unique marks
  const uniqueRecord = filterAge.filter((item, index, self) => index === self.findIndex((t) => (t.marks === item.marks)));
  // console.log(uniqueRecord, "unique record")

  // First Recurrence Index
  const RecurrenceIndex = (str = "YZTTZMNERXE") => {
    const indices = {};
    for (let i = 0; i < str.length; i++) {
      if (indices[str[i]] !== undefined) {
        return { [str[i]]: [indices[str[i]], i] };
      }
      indices[str[i]] = i;
    }
    return null;
  }
  // second method Recurrence Index
  let str = "DCFRUF"
  let findChar;
  let findIndex = {};
  for (let i = 0; i < str.length; i++) {
    if (findIndex[str[i]]) {
      return findChar = str[i];
    }
    else {
      findChar = { [str[i]]: [findIndex[str[i]], i] }
    }
  }
  // console.log(findChar, "indi")
  // console.log(findFirstRepeatedChar("DCFRUF"));


  // let str = "scissors";
  // let indices = [];
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === "s") {
  //     indices.push(i);
  //   }
  // }
  // recursion objects compare
  let recursionStr = ["cars", "trains", ["roads", ["railways"]]]
  let recursionMatchStr = ["cars", "trains", ["roads", ["railways"]]]
  let recursionResult = JSON.stringify(recursionStr) === JSON.stringify(recursionMatchStr);
  
  //Deep Arithmetic
  const strArthmetic = [[["1"], "10v3"], [["s0"], ["1mu4ch3  2 "], "-6s0"]];
  // var merged = [].concat.apply([], arrays);
  // var s = "[" + JSON.stringify(strArthmetic).replace(/\[|]/g,'') +"]";
  let flattened = strArthmetic.flat(Infinity);
  const trimArray = flattened.map(element => {
    return element.split(" ").join("");
  });
  let flattenedSum = trimArray.toString().match(/-?\d+/g).map(Number);
  const count = flattenedSum.reduce((acc, value) => acc + value);

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
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const findEven= arr.filter((num)=> {
       // num%2 === 0 (if even)
        return num%2 !==0
    })
    console.log(findEven) 
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];  
const even = [];
  array.forEach(number => {
    if (number % 2 === 0) {
      even.push(number);
    }
  });
  
  return (
    <div>
      <h3 className='text-center text-decoration-underline'>
        Complex Strings
      </h3>
      <p className='mt-4'>
        Given an incomplete palindrome as a string, return the minimum
        letters needed to be added on to the end to make the string a palindrome.
      </p>
      <div className='w-50 m-auto d-flex'>
        <input type="text" className='w-50' name="text" value={userDetail.show} onChange={(e) => setUserDetail({ ...userDetail, show: e.target.value })} />
        <div className='d-flex w-50'>
          <button onClick={() => makePalindromeApproach1(userDetail.show)} className="submitBtn p-3">Palindrome Approach 1</button>
          <button onClick={() => handlePalindromeApproach2(userDetail.show)} className="submitBtn p-3">Palindrome Approach 2</button>
        </div>
      </div>
      <table className='table w-50 mt-4 m-auto mb-4'>
        <thead>
          <th className='text-center'>word-add for make palindrome</th>
          <th className='text-center'>length</th>
          <th className='text-center'>final String</th>
        </thead>
        <tbody>
          <tr>
            <td>{userDetail.stringsToAdd}</td>
            <td>{userDetail.stringsToAdd.length}</td>
            <td>{userDetail.show}</td>
          </tr>
        </tbody>
      </table>
      <p>Additive Persistence and Multiplicative Persistence Iteration upto a single digit Integer.</p>
      <div className='w-50 m-auto d-flex align-items-center mb-4'>
        <input type="text" name="text" className='w-50' placeholder="Enter only numbers" value={userDetail.show} onChange={(e) => setUserDetail({
          ...userDetail, show: e.target.value
        })} />
        <div className='w-50 d-flex'>
          <button onClick={() => addPersisteneceApproach1(userDetail.show)} className="optionBtn">Add Persistenece</button>
          <button onClick={() => multiPersisteneceApproach1(userDetail.show)} className="optionBtn">Multiple Persistenece</button>
        </div>
      </div>
      <p>{JSON.stringify(userDetail.show)}</p>
      <p>
        {strArthmetic}
        <b>  Ans--- {JSON.stringify(count)}</b>
      </p>
      <p className="m-0 text-decoration-underline mt-4">
        First Recurrence Index
      </p>
      <p>YZTTZMNERXE: {JSON.stringify(RecurrenceIndex("YZTTZMNERXE"))}</p>
      <p className="text-center mb-4">
        Match two objects string --isSimilar(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]]):
        <b>{JSON.stringify(recursionResult)}</b>
      </p>
      <h6>
        Returns an object of all entries having unique marks. If the marks are the same, take who is eldest
      </h6>
      <table className='table'>
        <thead>
          <th className='text-center'>Age</th>
          <th className='text-center'>Name</th>
          <th className='text-center'>Marks</th>
        </thead>
        {uniqueValues?.map((item) => {
          return (
            <tbody>
              <tr>
                <td>{item.age}</td>
                <td>{item.name}</td>
                <td>{item.marks}</td>
              </tr>
            </tbody>
          )
        })}

      </table>
    </div>
  )
}

export default ComplexStrings;
