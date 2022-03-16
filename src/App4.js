import React, { useState } from "react";
import "./App.css";

function App() {
  const [source, setSource] = useState("");
  const handleCapture = (target) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };
  const constraints = { video: { facingMode: "user" }, audio: false };
  const cameraView = document.querySelector("#camera--view");
  const cameraOutput = document.querySelector("#camera--output");
  const cameraSensor = document.querySelector("#camera--sensor");
  // const cameraTrigger = document.querySelector("#camera--trigger");

  function cameraStart() {
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        // track = stream.getTracks()[0];
        cameraView.srcObject = stream;
        cameraTrigger()
      })
      .catch(function (error) {
        console.error("Oops. Something is broken.", error);
      });
  }

  function cameraTrigger () {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp");
    cameraOutput.classList.add("taken");
  };

  return (
    <div>
      <canvas id="camera--sensor"></canvas>

      <video id="camera--view" autoplay playsinline></video>

      <img src="//:0" alt="" id="camera--output" />

      <button id="camera--trigger" onClick={cameraStart}>
        Take a picture
      </button>
    </div>
  );
}
export default App;
