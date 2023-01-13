import { Heartbeat } from './heartbeat.js';

const OPENCV_URI = "https://docs.opencv.org/master/opencv.js";
const HAARCASCADE_URI = "haarcascade_frontalface_alt.xml"

// Load opencv when needed
async function loadOpenCv(uri) {
  return new Promise(function (resolve, reject) {
    console.log("starting to load opencv");
    var tag = document.createElement('script');
    tag.src = uri;
    tag.async = true;
    tag.type = 'text/javascript'
    tag.onload = () => {
      cv['onRuntimeInitialized'] = () => {
        console.log("opencv ready");
        resolve();
      }
    };
    tag.onerror = () => {
      throw new URIError("opencv didn't load correctly.");
    };
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  });
}

let demo = new Heartbeat("webcam", "canvas", HAARCASCADE_URI, 30, 6, 250);
var ready = loadOpenCv(OPENCV_URI);
//ready.then(function() {
//debugger;
//  demo.init();
//});


$("#startvideo").click(function () {
  Swal.fire({
    html:
    `<div class="row">
      <div class="col-9" >
    
        <div class="col-10" id="videoScream" style="display:flex !important;">
          <video hidden id="webcam" width="640" height="480"></video>
          <canvas id="canvas" width="640" height="480" style=>"border-radius:5px<"/canvas>
        </div>
      </div>

      <div class="col-3 d-flex align-items-center" style="background-color:#FFFFFF; ">
        <div class="d-flex " style='flex-direction:column'>
          <label class='label m-1' style='border:none'>Please Wait for around 10-12 secs</label>
          <strong class='m-1'> Your Predicted BP is : </strong>
          <label class='label m-1' style='border:none'><span id="dataOne">  </span>&nbsp mmHg</label>
          <button id="closeSwal" class="btn btn-success btn-sm"> OK </button>
        </div>
      </div>
      
    </div>`,
    allowOutsideClick: false,
    height: 600,
    width: 950,
    showConfirmButton:false,
    showCloseButton:false,
  });
  $("#closeSwal").click(function(){
    demo.stop();
    swal.close();
  })

  let demo = new Heartbeat("webcam", "canvas", HAARCASCADE_URI, 30, 6, 250);
  demo.init();
  
});
