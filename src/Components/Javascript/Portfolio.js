import React from "react";

function Portfolio(props) {
    return (
        <div>
           
           <div className="portfolio mainContent" data-visible="false">
                    <div className="imageBox">
                        {/* Slideshow container */}
                        <div className="slideshow-container">
                        {/* Full-width images with number and caption text */}
                        <div className="mySlides fade">
                            <div className="numbertext" />
                            <img alt="1"src="./images/1-Sunny.png" style={{width: '100%'}} />
                            <div className="text">Caption Text</div>
                        </div>
                        <div className="mySlides fade">
                            <div className="numbertext" />
                            <img alt="2" src="./images/2-Brew.png" style={{width: '100%'}} />
                            <div className="text">Caption Two</div>
                        </div>
                        <div className="mySlides fade">
                            <div className="numbertext" />
                            <img alt="3" src="./images/3-Giraffe.png" style={{width: '100%'}} />
                            <div className="text">Caption Three</div>
                        </div>
                        {/* Next and previous buttons */}
                        <button className="prev" onclick={"Slideshow.plusSlides(-1)"}>❮</button>
                        <button className="next" onclick={"Slideshow.plusSlides(1)"}>❯</button>
                        </div>
                        <br />
                        {/* The dots/circles */}
                        <div style={{textAlign: 'center'}}>
                        <span className="dot" onclick={"this.currentSlide(1)"} /> 
                        <span className="dot" onclick={"this.currentSlide(2)"} /> 
                        <span className="dot" onclick={"this.currentSlide(3)"} /> 
                        </div>
                    </div>  

        </div>
        </div>
    );
};

export default Portfolio;
                
