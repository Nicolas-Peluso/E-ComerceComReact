import React from 'react'

function Head({ head }) {

    React.useEffect(() => {
        document.title = "Ecomerce | " + head
    }, [head])

    return (
        <div>

        </div>
    )
}

export default Head
