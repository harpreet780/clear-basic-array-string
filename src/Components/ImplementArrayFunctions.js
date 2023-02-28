import React, { useEffect, useState } from 'react';
import { Input, Label } from 'reactstrap';
import Data from "../constants/data.json";

const ImplementArrayFunctions = () => {
    const [datalist, setDatalist] = useState({
        minAge: "",
        maxAge: "",
        searchItem: "",
        selectItems: ""
    });
    const handleOnChangeValues = (e) => {
        setDatalist({ ...datalist, [e.target.name]: e.target.value });
    };
    let minValue = datalist.minAge;
    let maxValue = datalist.maxAge;
    const findAge = Data?.filter((item) => item.age >= minValue && item.age <= maxValue).map((item) => {
        item.country = "Nigeria";
        return item;
    });


    let addkeyValue = Data?.filter((findIp) => findIp.ip_address.startsWith('168.')).map((item) => {
        item["isDefault"] = "true"
        return item;
    });
    // console.log(addkeyValue, "addkeyValue");

    const handleSubmit = (e) => {
        e.preventDefault();
        setDatalist({ ...datalist, minAge: findAge, maxAge: findAge })
    }
    const handleDelete = (id) => {
        let del = findAge?.filter((item) => item.id !== id);
        setDatalist({ ...datalist, minAge: del, maxAge: del });
    }

    useEffect(() => {
        if (datalist.selectItems === "all") {
            const searchList = Data?.map((item) => {
                return item;
            })
            console.log(searchList, "countrysearchList")
            setDatalist({ ...datalist, searchItem: searchList.country })
        }
        if (datalist.selectItems === "country") {
            const searchList = Data?.filter((item) => item?.country?.toLowerCase().includes(datalist?.searchItem?.toLocaleLowerCase()))
            console.log(searchList, "countrysearchList")
            setDatalist({ ...datalist, searchItem: searchList.country })
        }
        if (datalist.selectItems === "gender") {
            const searchList = Data?.filter((item) => item?.gender?.startsWith('M') || item?.gender?.startsWith('F'))
            console.log(searchList, "gendersearchList")
            setDatalist({ ...datalist, searchItem: searchList.gender })
        }
    }, [datalist?.searchItem])

    console.log(datalist, "data");

    return (
        <div className='w-50 m-auto'>
            <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Implement Array Functions</h3>
            {/* filter */}
            <Label className="mt-5 ml-2"><b>Filter Categories</b></Label>
            <div className="d-flex justify-content-center">
                <select className="input w-50 m-2" name="selectItems" onChange={(e) => handleOnChangeValues(e)}>
                    <option value="all">All</option>
                    <option value="country">Country</option>
                    <option value="gender">Gender</option>
                </select>
                <Input
                    type="text"
                    name="searchItem"
                    className="input w-50 m-2"
                    value={datalist.searchItem}
                    onChange={(e) => handleOnChangeValues(e)}
                />
            </div>
            {/* {datalist?.searchItem?.map((i)=>{
                return(
                    <p>{i}</p>
                )
            })} */}
            {/* <p style={{textAlign: "left", marginLeft: '12px'}}>no data found</p> */}
            <div className="d-flex justify-content-center mt-3">
                <div className="w-50 m-2">
                    <Label className="mb-2"><b>Min Age</b></Label>
                    <Input
                        type="number"
                        name="minAge"
                        className="input"
                        value={datalist.minAge}
                        onChange={(e) => handleOnChangeValues(e)}
                    />
                </div>
                <div className="w-50 m-2">
                    <Label className="mb-2"><b>Max Age</b></Label>
                    <Input
                        type="number"
                        name="maxAge"
                        className="input"
                        value={datalist.maxAge}
                        onChange={(e) => handleOnChangeValues(e)}
                    />
                </div>
            </div>
            <button className="submitBtn mt-3" onClick={handleSubmit}>
                Submit
            </button>
            <div className='d-flex align-items-start mt-5'>
                <table className="table m-2">
                    <thead>
                        <th style={{ textAlign: "center" }}>S.No</th>
                        <th style={{ textAlign: "center" }}>age</th>
                        <th style={{ textAlign: "center" }}>Country</th>
                    </thead>
                    <tbody>
                        {findAge?.map((item, index) => {
                            return (
                                <tr>
                                    <td><b>{index + 1}.</b></td>
                                    <td>{item?.age}</td>
                                    <td>{item?.country}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <button className="optionBtn w-25 mt-2" style={{ margin: "unset" }} onClick={handleDelete}>
                    Delete All
                </button>
            </div>
        </div>
    )
}

export default ImplementArrayFunctions;