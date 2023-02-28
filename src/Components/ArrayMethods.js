import React from 'react'

const ArrayMethods = () => {
    let mainItem = [1, 2, 3, 4, 5, 6]
    let addItem = mainItem.push(7);
    let addFrontItem = mainItem.unshift(40);
    mainItem.splice(3, 1, 56);

    return (
        <div>
            {JSON.stringify(mainItem)}
        </div>
    )
}

export default ArrayMethods;