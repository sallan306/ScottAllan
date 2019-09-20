import React, { Component } from "react";
import PortfolioItems from "./PortfolioItems.js";
import { AwesomeButtonSocial, AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-blue.css";
import "./Slideshow.css";

var currentColor = "";
class Slideshow extends Component {
  constructor(props) {
    super();
    this.portfolioRefs = [];
    this.dotRefs = [];

    PortfolioItems.map(item => {
      return (
        (this.portfolioRefs[item.id - 1] = React.createRef()),
        (this.dotRefs[item.id - 1] = React.createRef())
      );
    });
  }
  state = {
    highlighted: "",
    showInfoPanel: false,
    selectedItem: [],
    slideType: "wide",
    slideSize: 600,
    currentSlideshow: 1,
    dotColors: ["navy", "", "", "", "", ""],
    trackDistance: -600,
    currentColor: ""
  };

  mouseEnter = value => {
    this.setState({ highlighted: value });
    // console.log("enter")
  };
  mouseLeave = () => {
    this.setState({ highlighted: "" });
    // console.log("exit")
  };
  mouseClicked = () => {
    // console.log("clicked")
  };
  displayMoreInfo = item => {
    this.setState({
      showInfoPanel: true,
      selectedItem: item
    });
    // console.log("bing!")
    document.addEventListener("mousedown", () => {
      this.setState({
        showInfoPanel: false
      });
    });
  };
  componentDidMount() {
    this.portfolioRefs[0].current.classList.remove("unselected");
    this.dotRefs[0].current.classList.add("dotSelected");

    if (this.props.screenWidth > 420 && this.state.slideType !== "wide") {
      this.setState(
        {
          slideType: "wide",
          slideSize: 550
        },
        () => {
          this.setState({
            trackDistance: -this.state.slideSize
          });
        }
      );
    } else if (this.props.screenWidth < 420 && this.state.slideType !== "box") {
      this.setState(
        {
          slideType: "box",
          slideSize: 300
        },
        () => {
          this.setState({
            trackDistance: -this.state.slideSize
          });
        }
      );
    }
    currentColor = this.props.secondaryColor;

    this.setState({
      dotColors: [this.props.secondaryColor, "", "", "", "", ""]
    });
  }
  componentDidUpdate() {
    if (currentColor !== this.props.secondaryColor) {
      this.dotUnHovered();
      currentColor = this.props.secondaryColor;
    }

    if (this.props.screenWidth > 420 && this.state.slideType !== "wide") {
      this.setState(
        {
          slideType: "wide",
          slideSize: 550
        }
        ,
        () => {
          this.setState({
            trackDistance:
              -this.state.slideSize * (1.2* (this.state.currentSlideshow - 1)) -
              this.state.slideSize
          });
        }
      );
    } else if (this.props.screenWidth < 420 && this.state.slideType !== "box") {
      this.setState(
        {
          slideType: "box",
          slideSize: 300
        }
        ,
        () => {
          this.setState({
            trackDistance:
              -this.state.slideSize * (1.2* (this.state.currentSlideshow - 1)) -
              this.state.slideSize
          });
        }
      );
    }
  }

  goToPortfolioItem = selectedDot => {
    this.setState(
      {
        currentSlideshow: parseInt(selectedDot)
      },
      () => {
        console.log(this.state.currentSlideshow);
        this.setState({
          trackDistance:
            -this.state.slideSize * 1.2 * (this.state.currentSlideshow - 1) -
            this.state.slideSize
        });
      }
    );
    PortfolioItems.map(item => {
      return (
        this.portfolioRefs[item.id - 1].current.classList.add("unselected"),
        this.dotRefs[item.id - 1].current.classList.remove("dotSelected")
      );
    });
    // console.log(selectedDot)
    this.dotHovered(selectedDot);
    this.portfolioRefs[selectedDot - 1].current.classList.remove("unselected");
    this.dotRefs[selectedDot - 1].current.classList.add("dotSelected");
  };
  moveDirection = direction => {
    if (this.state.currentSlideshow > 1 && direction === "left") {
      this.setState(
        {
          currentSlideshow: parseInt(this.state.currentSlideshow) - 1
        },
        () => {
          this.goToPortfolioItem(this.state.currentSlideshow);
        }
      );
    }
    if (this.state.currentSlideshow < 6 && direction === "right") {
      this.setState(
        {
          currentSlideshow: parseInt(this.state.currentSlideshow) + 1
        },
        () => {
          this.goToPortfolioItem(this.state.currentSlideshow);
        }
      );
    }
  };
  dotHovered = itemID => {
    var tempArray = [];
    for (var i = 1; i < 7; i++) {
      if (i === parseInt(itemID)) {
        // console.log(itemID + " matches")

        tempArray[i - 1] = this.props.secondaryColor;
      } else {
        tempArray[i - 1] = this.props.primaryColor;
      }
    }
    this.setState({
      dotColors: tempArray
    });
  };
  dotUnHovered = () => {
    var tempArray = [];
    for (var i = 1; i < 7; i++) {
      // console.log("i: "+i+"selectedItem: "+this.state.currentSlideshow)
      if (i === parseInt(this.state.currentSlideshow)) {
        tempArray[i - 1] = this.props.secondaryColor;
        // console.log("yay")
      } else {
        tempArray[i - 1] = this.props.primaryColor;
      }
    }
    this.setState({
      dotColors: tempArray
    });
  };
  render() {
    return (
      <div
        id="slideshow"
        className="slideshow"
      >
        <div
          className="infoPanel"
          style={{
            opacity: this.state.showInfoPanel ? 1 : 0,
            visibility: this.state.showInfoPanel ? "visible" : "hidden",
            color: this.props.primaryColor,
            borderColor: this.props.primaryColor,
            background: this.props.primaryColor === "white" ? "black" : "white"
          }}
        >
          <p className="infoPanelDescription">
            {this.state.selectedItem.description}
          </p>
          <ul>
            {this.state.selectedItem.technologies
              ? this.state.selectedItem.technologies.map(function(item, i) {
                  return (
                    <li className="infoPanelListItem" key={i}>
                      {item}
                    </li>
                  );
                })
              : "nothing"}
          </ul>
        </div>
        <div className="PortfolioItemsCenteringBox">
          <div
            id="portfolioTrack"
            className="portfolioTrack"
            style={{
              left: this.state.trackDistance,
              width: this.state.slideSize * 8
            }}
          >
            {PortfolioItems.map(item => {
              return (
                <div
                  id={"container" + item.id}
                  className={
                    "portfolioContainer unselected portfolioContainer" + item.id
                  }
                  ref={this.portfolioRefs[item.id - 1]}
                  key={"container" + item.id}
                  style={{
                    borderColor: this.props.primaryColor,
                    background:
                      this.props.primaryColor === "black" ? "white" : "black",
                    width: this.state.slideSize,
                    height:
                      this.state.slideType === "wide"
                        ? this.state.slideSize * 0.5625
                        : this.state.slideSize,
                    margin: this.state.slideSize * 0.1
                  }}
                >
                  <img
                    key={"image" + item.id}
                    className={
                      this.state.highlighted === item.id
                        ? "imgHighlighted portfolioImage"
                        : "portfolioImage"
                    }
                    src={
                      this.props.screenWidth > 420
                        ? item.imgURLWide
                        : item.imgURLBox
                    }
                    alt={item.name}
                  />
                  <div
                    onMouseEnter={() => this.mouseEnter(item.id)}
                    onMouseLeave={() => this.mouseLeave()}
                    className={
                      this.state.highlighted === item.id
                        ? "highlighted hiddenContainer"
                        : "hiddenContainer"
                    }
                    style={{ color: this.props.primaryColor }}
                  >
                    <p
                      key={"title" + item.id}
                      className={"portfolioTitle"}
                      style={{ color: this.props.primaryColor }}
                    >
                      {item.name}
                    </p>
                    <div className="buttonBox">
                      <AwesomeButtonSocial
                        size="icon"
                        href={item.github}
                        type="github"
                      ></AwesomeButtonSocial>
                      <AwesomeButton size="icon" href={item.liveLink}>
                        DEMO
                      </AwesomeButton>
                      <AwesomeButton
                        size="icon"
                        onPress={() => this.displayMoreInfo(item)}
                      >
                        INFO
                      </AwesomeButton>
                    </div>
                    <h6
                      key={"paragraph" + item.id}
                      className="portfolioTitle2"
                      style={{ color: this.props.primaryColor }}
                    >
                      {item.shortDescription}
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <span className="portfolioNavigation">
          <div
            className={
              this.state.currentSlideshow !== 1
                ? "navArrowActive navArrowLeft"
                : "navArrowInactive navArrowLeft"
            }
            onClick={() => this.moveDirection("left")}
            style={{ borderColor: this.props.primaryColor }}
          ></div>
          {PortfolioItems.map(item => {
            return (
              <div
                id={"dotNumber" + item.id}
                className={item.id === 1 ? "dot dotSelected" : "dot"}
                ref={this.dotRefs[item.id - 1]}
                key={item.id}
                style={{
                  backgroundColor:
                    this.state.dotColors[item.id - 1] === ""
                      ? this.props.primaryColor
                      : this.state.dotColors[item.id - 1],
                  width: this.state.slideType === "wide" ? 30 : 20,
                  height: this.state.slideType === "wide" ? 30 : 20
                }}
                onClick={() => this.goToPortfolioItem(item.id)}
                onMouseEnter={() => this.dotHovered(item.id)}
                onMouseLeave={() => this.dotUnHovered()}
              ></div>
            );
          })}
          <div
            onClick={() => this.moveDirection("right")}
            className={
              this.state.currentSlideshow !== 6
                ? "navArrowActive navArrowRight"
                : "navArrowInactive navArrowRight"
            }
            style={{ borderColor: this.props.primaryColor }}
          ></div>
        </span>
      </div>
    );
  }
}

export default Slideshow;
