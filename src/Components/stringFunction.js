import React, { useState } from 'react'

const StringWithFunction = () => {
    const [show1ProblemOptions, setShow1ProblemOptions] = useState(false);
    const [show2ProblemOptions, setShow2ProblemOptions] = useState(false);
    const [show3ProblemOptions, setShow3ProblemOptions] = useState(false);
    const [show4ProblemOptions, setShow4ProblemOptions] = useState(false);
    const [show5ProblemOptions, setShow5ProblemOptions] = useState(false);
    const [show6ProblemOptions, setShow6ProblemOptions] = useState(false);
    const [userDetail, setUserDetail] = useState({
        userField: "",
        anagramField: ""
    });

    // Approaches for Remove Trailing and Leading Zeros
    const problem1Approach1 = (number) => {
        let no = number;
        let data = parseFloat(no);
        setUserDetail({ userField: data })
    }
    const problem1Approach2 = (number) => {
        let no = number;
        let b = parseInt(no);
        setUserDetail(b);
    };

    const problem1Approach3 = (number = "") => {
        let no = number;
        let convert = Number(no);
        setUserDetail({ userField: convert });
    }

    // Reverse a String sentence
    const problem2Approach1 = (string = "") => {
        let str = string;
        let trimed = str.trim();
        let r = trimed.split(" ").reverse().join(' ');
        setUserDetail({ userField: r });
    }
    const problem2Approach2 = (startStr = "") => {
        let startReverse = startStr;
        let listReverse = startReverse.split(" ");
        let finalWord = "";
        let finalResult = "";
        for (let i = listReverse.length - 1; i >= 0; i--) {
            finalWord += listReverse[i] + " ";
            finalResult = finalWord.trim();
        }
        setUserDetail({ userField: finalResult });
    }

    // all capital letters
    const problem3Approach1 = (word = "") => {
        let letters = word;
        let arrangeOrder = letters.split('');
        const uppercase = arrangeOrder.filter((item) => item === item.toUpperCase());
        const lowercase = arrangeOrder.filter((item) => item === item.toLowerCase());
        const filteredItem = [...uppercase, ...lowercase].join('');
        setUserDetail({ userField: filteredItem });
    }
    const problem3Approach2 = (word = "") => {
        const result = [...word].sort((a, b) => /[A-Z]/.test(a) ? /[A-Z]/.test(b) ? 0 : -1 : 0).join('');
        setUserDetail({ userField: result });
    }
    const problem3Approach3 = (word = "") => {
        let value = word;
        let upperLetter = "";
        let lowerLetter = "";
        for (let i of value) {
            if (i >= "A" && i <= "Z") {
                upperLetter += i;
            } else if (i >= "a" && i <= "z") {
                lowerLetter += i;
            }
        }
        setUserDetail({ userField: upperLetter + lowerLetter });
    }
    const problem3Approach4 = (word = "") => {
        let valuItems = word;
        let upper = valuItems.replace(/[^A-Z]*/g, "");
        let lower = valuItems.replace(/[^a-z]*/g, "");
        let getResult = (upper + lower);
        setUserDetail({ userField: getResult });
    }
    // Check for Anagrams
    const checkAnagrams = (item1 = "", item2 = "") => {
        let value1 = item1;
        let value2 = item2;
        let str1 = value1.split('').sort().join('');
        let str2 = value2.split('').sort().join('');
        let anagramResult = "";
        if (str1 === str2) {
            anagramResult = "true"
        } else {
            anagramResult = "False";
        }
        setUserDetail({ ...userDetail, userDetail: anagramResult, anagramField: anagramResult })
        console.log(anagramResult, "anagramResult")
    }
    // duplicate letters
    const removeDuplicateLetters = (letters = "") => {
        let clearDuplicateitem = letters;
        let removeDup = [...new Set(clearDuplicateitem.split(" "))].join(" ");
        setUserDetail({ userField: removeDup });
    }
    // string letters
    const stringExpansion = (s = "") => {
        let findInd = -1;
        let newArray = [];
        let finalStr = "";
        let strArray = s.split("");
        newArray = strArray.map((item) => {
            if (isNaN(item)) {
                switch (findInd) {
                    case -1:
                        return item;
                        break;
                    case 0:
                        return ""
                        break;
                    default:
                        return item.repeat(findInd);
                }
            } else {
                findInd = item;
            }
        });
        finalStr = newArray.join("");
        setUserDetail({ userField: finalStr })
        return finalStr;
        // for 
        // for(num;num<s.length;num++){
        //     let cht =s[num];
        //     if(isNaN(cht)){
        //         if(num) {
        //           d += cht;
        //         }
        //         else{
        //           d += cht.repeat(num)
        //         }
        //     }
        //    else{
        //      // num = cht;
        //    }
        //   }
        
        // let s = "0a2kd6ft001g568gft";
        // let result = "";
        // let currentNum = "";
        // for (let i = 0; i < s.length; i++) {
        //     currentNum = parseInt(s[i]);
        //     console.log(currentNum, "ccc")
        //     if (currentNum && i > 1) {
        //         result += s[(i) + 1]?.repeat(currentNum);
        //     }
        //     else if (i > 1) {
        //         result += s[(i)]
        //     }
        //     // else {
        //     //     result += s[(i)] 
        //     // }

        // }
        // console.log(result, "rrrrr")
        // return result;

        // let newSet = [];
        // let r="";
        //   let number = newSet.filter((items) => items > 0);
        //   console.log(number,"nn")
        // let array = newSet.map((item, index)=>{
        //       if(number) {
        //         r = Array(number).fill(item);
        //         console.log(r,'rrr')
        //       }
        //   return (
        //     {
        //     }
            
        //     )
        // })
    }
    return (
        <div>
            <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Strings with Function</h3>
            <h4 style={{ textAlign: 'start' }}>SOLVE PROBLEMS</h4>
            <p style={{ textAlign: 'start' }}>Problem 1: <b>Remove Trailing and Leading Zeros</b></p>
            <p style={{ textAlign: 'start' }}>Problem 2: <b>Reverse a String sentence</b></p>
            <p style={{ textAlign: 'start' }}>Problem 3: <b>All capital letters to the front of a word</b></p>
            <p style={{ textAlign: 'start' }}>Problem 4: <b>Check for Anagrams</b></p>
            <p style={{ textAlign: 'start' }}>Problem 5: <b>Remove duplicate Letters</b></p>
            <p style={{ textAlign: 'start' }}>Problem 6: <b>String Expansion</b></p>
            <div className="d-flex align-items-center flex-wrap">
                <button onClick={() => {
                    setShow1ProblemOptions(true);
                    setShow2ProblemOptions(false);
                    setShow3ProblemOptions(false);
                    setShow4ProblemOptions(false);
                    setShow5ProblemOptions(false);
                    setShow6ProblemOptions(false);
                }}
                    className="submitBtn mt-4 mx-2"
                >
                    Problem 1
                    {/* Remove Trailing and Leading Zeros */}
                </button>
                <button onClick={() => {
                    setShow1ProblemOptions(false);
                    setShow2ProblemOptions(true);
                    setShow3ProblemOptions(false);
                    setShow4ProblemOptions(false);
                    setShow5ProblemOptions(false);
                    setShow6ProblemOptions(false);
                }}
                    className="submitBtn mt-4 mx-2"
                >
                    Problem 2
                    {/* Reverse a String sentence */}
                </button>
                <button onClick={() => {
                    setShow1ProblemOptions(false);
                    setShow2ProblemOptions(false);
                    setShow3ProblemOptions(true);
                    setShow4ProblemOptions(false);
                    setShow5ProblemOptions(false);
                    setShow6ProblemOptions(false);
                }}
                    className="submitBtn mt-4 mx-2"
                >
                    Problem 3
                    {/* All capital letters to the front of a word */}
                </button>
                <button onClick={() => {
                    setShow1ProblemOptions(false);
                    setShow2ProblemOptions(false);
                    setShow3ProblemOptions(false);
                    setShow4ProblemOptions(true);
                    setShow5ProblemOptions(false);
                    setShow6ProblemOptions(false);
                }}
                    className="submitBtn mt-4 mx-2"
                >
                    Problem 4
                    {/* Check for Anagrams */}
                </button>
                <button onClick={() => {
                    setShow1ProblemOptions(false);
                    setShow2ProblemOptions(false);
                    setShow3ProblemOptions(false);
                    setShow4ProblemOptions(false);
                    setShow5ProblemOptions(true);
                    setShow6ProblemOptions(false);
                }}
                    className="submitBtn mt-4 mx-2"
                >
                    Problem 5
                    {/* Remove duplicate Letters */}
                </button>
                <button onClick={() => {
                    setShow1ProblemOptions(false);
                    setShow2ProblemOptions(false);
                    setShow3ProblemOptions(false);
                    setShow4ProblemOptions(false);
                    setShow5ProblemOptions(false);
                    setShow6ProblemOptions(true);
                }} className="submitBtn mt-4 mx-2">
                    Problem 6
                    {/* String Expansion */}
                </button>
            </div>
            {/* Problem 1 Remove Trailing and Leading Zeros*/}
            {show1ProblemOptions &&
                <div className="d-flex align-items-center mx-2 mt-3 justify-content-center">
                    <button onClick={() => problem1Approach1(userDetail.userField)} className="optionBtn">Approach 1</button>
                    <button onClick={() => problem1Approach2(userDetail.userField)} className="optionBtn">Approach 2</button>
                    <button onClick={() => problem1Approach3(userDetail.userField)} className="optionBtn">Approach 3</button>
                </div>
            }
            {/* Problem 2  Reverse a String sentence*/}
            {show2ProblemOptions &&
                <div className="d-flex align-items-center mx-2 mt-3 justify-content-center">
                    <button onClick={() => problem2Approach1(userDetail.userField)} className="optionBtn">Approach 1</button>
                    <button onClick={() => problem2Approach2(userDetail.userField)} className="optionBtn">Approach 2</button>
                </div>
            }
            {/* Problem 3 All capital letters to the front of a word*/}
            {show3ProblemOptions &&
                <div className="d-flex align-items-center mx-2 mt-3 justify-content-center">
                    <button onClick={() => problem3Approach1(userDetail.userField)} className="optionBtn">Approach 1</button>
                    <button onClick={() => problem3Approach2(userDetail.userField)} className="optionBtn">Approach 2</button>
                    <button onClick={() => problem3Approach3(userDetail.userField)} className="optionBtn">Approach 3</button>
                    <button onClick={() => problem3Approach4(userDetail.userField)} className="optionBtn">Approach 4</button>
                </div>
            }
            {/* Problem 4 Check for Anagrams*/}
            {show4ProblemOptions &&
                <div className="d-flex align-items-center mx-2 mt-3 justify-content-center">
                    <button onClick={() => checkAnagrams(userDetail.userField, userDetail.anagramField)} className="optionBtn">Approach 1</button>
                </div>
            }

            {show4ProblemOptions ?
                <>
                    <input type="text" className='mt-4' name="text" value={userDetail.anagramField} onChange={(e) => setUserDetail({
                        ...userDetail, anagramField: e.target.value,
                    })} />
                </>
                : null}

            {/* Problem 5 Remove duplicate Letters*/}
            {show5ProblemOptions &&
                <div className="d-flex align-items-center mx-2 mt-3 justify-content-center">
                    <button onClick={() => { removeDuplicateLetters(userDetail.userField) }} className="optionBtn"> Approach 1</button>
                </div>
            }
            {/* Problem 6 string expansion*/}
            {show6ProblemOptions &&
                <div className="d-flex align-items-center mx-2 mt-3 justify-content-center">
                    <button onClick={() => { stringExpansion(userDetail.userField) }} className="optionBtn"> Approach 1</button>
                </div>
            }
            {/* input */}
            <input type="text" className='mt-4' name="text" value={userDetail.userField} onChange={(e) => setUserDetail({
                ...userDetail, userField: e.target.value
            })} />
            <p>{JSON.stringify(userDetail.userField)}</p>
        </div>
    )
}

export default StringWithFunction;