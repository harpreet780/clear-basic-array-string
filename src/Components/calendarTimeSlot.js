import React, { useEffect, useState } from 'react';

const CalendarTimeSlot = () => {
    const [date, setDate] = useState();
    const [startTime, setStartTime] = useState();
    const [endTime, setEndTime] = useState();
    // const [slots, setSlots] = useState([
    //     {
    //         start_time: '10:00',
    //         end_time: '12:00'
    //     },
    // ]);

    const handleDate = (e) => {
        setDate(e.target.value);
    }
    let start_time = '10:00';
    let end_time = '12:00'

    const slot = () => {
        const diff = 2;
        const mints = diff * 60 / 30;
        const firstSlot = { time: '' }
        const slots = Array(mints).fill(firstSlot);
        firstSlot.time = 30;
        let findIndex = slots[0];
        // findIndex.time = start_time;
        // const hours = [];
        // hours.push(start_time)
        // console.log(hours, "hour")
        // console.log("index==0", findIndex)
        console.log(slots, "slots")

    }
    useEffect(() => {
        slot();
    }, [slot])

    return (
        <div style={{ width: '50%', margin: 'auto' }}>
            <div className="inputBoxes">
                <input
                    type="date"
                    value={date}
                    name="date"
                    onChange={handleDate}
                />
                <input
                    type="time"
                    value={startTime}
                    name="startTime"
                    onChange={(e) => setStartTime(e.target.value)}
                // defaultValue={start_time}
                />
                <input
                    type="time"
                    value={endTime}
                    name="endTime"
                    onChange={(e) => setEndTime(e.target.value)}
                // defaultValue={end_time}
                />
            </div>
            {startTime && endTime ?
                <div className='slots'>
                    {/* {
                        slots?.map?.((item, index) => (
                            <p key={index}>{item.start_time}</p>
                        ))
                    } */}
                </div>
                : null}
        </div>
    )
}

export default CalendarTimeSlot;