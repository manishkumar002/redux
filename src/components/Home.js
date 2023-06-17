import React from 'react'

function Home(props) {
    console.log("home",props.data)
    return (
        <div>
           <div className='add'>
            <span className='manish'>{props.data.length}</span>
            <img src="https://img.freepik.com/free-vector/sale-full-shopping-cart-red-pictogram_1284-8505.jpg?w=740&t=st=1686211024~exp=1686211624~hmac=643b1753c3c9ae23dfeeab1b9b33938176fc1f2c92f78cd4f4aac9a2dbe0f320" style={{height:'100px'}}/>
           </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://th.bing.com/th/id/R.8d180be45c075f74a5bd730820840fda?rik=ACHCWDx%2bdoXKQA&riu=http%3a%2f%2fcdn.mos.cms.futurecdn.net%2fXgUwVBT5uyf2eKrmsF5F2D.jpg&ehk=%2fWYQFHRZQWH5Kfbbc9G%2fWG5EFjqljfsC5asc8goT0gY%3d&risl=&pid=ImgRaw&r=0" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price:<b style={{color:'red'}}> $1000.00</b>
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:1000,name:'i phone 11'})}
                        }>
                        Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home
