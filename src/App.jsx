import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import gsap from "gsap";
import Flip from "gsap/Flip";
import { Controller, Scene } from "react-scrollmagic";
import locomotiveScroll from "locomotive-scroll";
import ImageUploading from "react-images-uploading";
function App() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  // const scrollRef = React.createRef();
  // const [active, setActive] = useState();
  // const [flipped, setFlipped] = useState(false);
  // const hoverHandler = () => {
  //   setActive(true);
  //   gsap.to(".dropdown-menu", { opacity: 1, duration: 0.3, y: 0 });
  //   gsap.to(".box", { opacity: 1, duration: 0.3, y: 0 });
  // };
  // const removeMouseHandler = () => {
  //   setActive(false);
  //   gsap.to(".dropdown-menu", { opacity: 0, duration: 0.3, y: 20 });
  //   gsap.to(".box-1", { opacity: 0, duration: 0.3, y: -20 });
  //   gsap.to(".box-2", { opacity: 0, duration: 0.3, y: 20 });
  // };
  // useEffect(() => {
  //   gsap.registerPlugin(Flip);
  // }, []);
  // const flipHandler = () => {
  //   let flipBox = document.querySelector(".flipBox");
  //   const state = Flip.getState(flipped);
  //   setFlipped(!flipped);
  //   Flip.from(state, { duration: 0.5, ease: "power2.inOut", scale: true });
  // };
  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });
  // });

  return (
    <>
      <h6 contentEditable className="p-5"></h6>
      <div className="app">
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                className="upload-btn"
                style={
                  isDragging
                    ? { color: "red", backgroundColor: "lightBlue" }
                    : undefined
                }
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img
                    style={{
                      height: "100px",
                      width: "100px",
                      objectFit: "cover",
                    }}
                    src={image["data_url"]}
                    alt=""
                    width="100"
                  />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
    </>
  );
}

export default App;
