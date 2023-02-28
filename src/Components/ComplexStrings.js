import React, { useState } from 'react'

const ComplexStrings = () => {
  const [userDetail, setUserDetail] = useState({
    show: ""
  });
  // make palindrome
  const makePalindromeApproach1 = (str = "") => {
    let result = str + str.split("").reverse().join("").slice(1);
    setUserDetail({ show: result })
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
        setUserDetail({ show: palindromeResult })
      }
    }
  }
  // object of all entries having unique marks
  const getUniqueValues = {
    0: { age: 18, name: 'john', marks: '400' },
    1: { age: 17, name: 'julie', marks: '400' },
    2: { age: 16, name: 'Robin', marks: '200' },
    3: { age: 16, name: 'Bella', marks: '300' },
    4: { age: 16, name: 'john', marks: '250' },
    5: { age: 15, name: 'julie', marks: '250' }
  }
  let filtered = Object.values(getUniqueValues);
  //1st method
  const uniqueValues = filtered.reduce((accumulator, currentValue) => {
    if (!accumulator.find((item) => item.marks === currentValue.marks)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  // 2nd method for object of all entries having unique marks
  // const AllUniqueValues = [...new Map(filtered.map(items => [items.marks, items])).values()]
  // console.log(AllUniqueValues,"AllUniqueValues")

  // 3rd Method for object of all entries having unique marks
  const uniqueRecord = filtered.filter((item, index, self) => index === self.findIndex((t) => (t.marks === item.marks)))
  console.log(uniqueRecord,"unique record")

  // First Recurrence Index
  let str = "scissors";
  let indices = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "s") {
      indices.push(i);
    }
  }
  // recursion objects compare
  let obj1 = ["cars", "trains", ["roads", ["railways"]]]
  let obj2 = ["cars", "trains", ["roads", ["railways"]]]
  let recursionResult = JSON.stringify(obj1) === JSON.stringify(obj2);

  //Deep Arithmetic
  const stringSum = ["1", "five", "2wenty", "thr33"];
  let sum = stringSum.map((a) => +a.match(/\d+/g)).reduce((a, b) => a + b)
  console.log(sum, "sum")
  const strArthmetic = [["1X2", "t3n"], ["1024", "5", "64"]];
  

  return (
    <div>
      <h3 className='text-center text-decoration-underline'>
        Complex Strings
      </h3>
      <p className='mt-4'>
        Given an incomplete palindrome as a string, return the minimum
        letters needed to be added on to the end to make the string a palindrome.
      </p>
      <div className='w-50 m-auto'>
        <input type="text" className=' mb-3' name="text" value={userDetail.userField} onChange={(e) => setUserDetail({
          ...userDetail, show: e.target.value
        })} />
        <div className='d-flex justify-content-around'>
          <button onClick={() => makePalindromeApproach1(userDetail.show)} className="optionBtn m-auto">Palindrome Approach 1</button>
          <button onClick={() => handlePalindromeApproach2(userDetail.show)} className="optionBtn m-auto">Palindrome Approach 2</button>
        </div>
        <p>{JSON.stringify(userDetail.show)}</p>
      </div>
      <p>
        ["1", "five", "2wenty", "thr33"] :
        <b>Ans--- {JSON.stringify(sum)}</b>
      </p>
      <p className="m-0 text-decoration-underline mt-4">
        First Recurrence Index
      </p>
      <p>scissors: {JSON.stringify(indices)}</p>
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
