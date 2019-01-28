import React from 'react';

function Portfolio(props) {
        var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }
    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // slides[slideIndex-1].style.display = "block"; 
    // dots[slideIndex-1].className += " active";
    }

    
    return (
        <div>

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
                    <button className="prev" onclick={plusSlides(-1)}>❮</button>
                    <button className="next" onclick={plusSlides(1)}>❯</button>
                    </div>
                    <br />
                    {/* The dots/circles */}
                    <div style={{textAlign: 'center'}}>
                    <span className="dot" onclick={currentSlide(1)} /> 
                    <span className="dot" onclick={currentSlide(2)} /> 
                    <span className="dot" onclick={currentSlide(3)} /> 
                    </div>
                </div>  

        </div>
    );
};

export default Portfolio;