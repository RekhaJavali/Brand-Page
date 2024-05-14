import "./hero.css"

function Hero () {
    return (
    <>
        <main className="hero container">
            <div className="heroContent">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. </p>
                
                <div className="herobtn">
                    <button className="shopbtn">Shop Now</button>
                    <button className="catbtn">Category</button>
                </div>

                <div className="heroshopping">Also Available on</div>

                <div className="heroicons">
                    <img src ="/images/flipkart.png" alt="flipkatrt" />
                    <img src ="/images/amazon.png" alt="amazon" />
                </div>
                
            </div>
            <div className="heroImage">
                <img src = "/images/shoe_image.png" alt ="" />
            </div>
        </main>
    </>
    )
}

export default Hero;