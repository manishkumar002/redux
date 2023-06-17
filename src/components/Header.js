// import React from 'react'

// function Header(props) {
//     console.log("home",props.data)
//     return (
//         <div>
//            <div className='add'>
//             <span className='manish'>{props.data.length}</span>
//             <img src="https://img.freepik.com/free-vector/sale-full-shopping-cart-red-pictogram_1284-8505.jpg?w=740&t=st=1686211024~exp=1686211624~hmac=643b1753c3c9ae23dfeeab1b9b33938176fc1f2c92f78cd4f4aac9a2dbe0f320" style={{height:'100px'}}/>
//            </div>
//         </div>
//     )
// }
// export default Header





import React from 'react'
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
        </div>
    )
}

export default Header
