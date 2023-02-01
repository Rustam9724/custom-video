/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");

var volumeOffSVG = document.querySelector('.volume-off-svg');
var progressBar = document.querySelector('.progress');
var volumeOnSVG = document.querySelector('.volume-on-svg');
var volumeBar = document.querySelector('.volume');
var togglePlay = document.querySelector('.toggle-play');
var togglePause = document.querySelector('.toggle-pause');
var playButton = document.querySelector('.play-button');
var volumeButton = document.querySelector('.volume-button');
var toggle = document.querySelector('.toggle');
var myVideo = document.querySelector('video');
var savedVolume = '0.5';
function updateProgress() {
    var progress = myVideo.currentTime / myVideo.duration;
    progressBar.value = Math.floor(progress * 10000) / 100 + '';
    progressBar.style.background = "linear-gradient(to right, #BDAE82 0%, #BDAE82 ".concat(progressBar.value, "%, white ").concat(progressBar.value, "%, white 100%)");
}
function playback() {
    if (myVideo.paused) {
        myVideo.play();
        togglePlay.style.display = 'none';
        togglePause.style.display = 'block';
        var progression = setInterval(updateProgress, 200);
        playButton.style.display = 'none';
    }
    else {
        myVideo.pause();
        clearInterval(progression);
        playButton.style.display = 'block';
        togglePlay.style.display = 'block';
        togglePause.style.display = 'none';
    }
}
function updateCurrentPos(e) {
    var newProgress = (e.clientX - progressBar.getBoundingClientRect().x) / progressBar.clientWidth;
    progressBar.value = Math.floor(newProgress * 10000) / 100 + '';
    myVideo.currentTime = newProgress * myVideo.duration;
}
toggle.addEventListener('click', playback);
progressBar.addEventListener('click', updateCurrentPos);
volumeBar.addEventListener('click', function () {
    myVideo.volume = +volumeBar.value / +volumeBar.max;
    savedVolume = +volumeBar.value / +volumeBar.max + '';
    volumeBar.style.background = "linear-gradient(to right, #BDAE82 0%, #BDAE82 ".concat(volumeBar.value, "%, white ").concat(volumeBar.value, "%, white 100%)");
    if (+volumeBar.value / +volumeBar.max === 0) {
        volumeOnSVG.style.display = 'none';
        volumeOffSVG.style.display = 'block';
    }
    else {
        volumeOnSVG.style.display = 'block';
        volumeOffSVG.style.display = 'none';
    }
});
volumeButton.addEventListener('click', function () {
    if (myVideo.volume > 0) {
        myVideo.volume = 0;
        volumeOnSVG.style.display = 'none';
        volumeOffSVG.style.display = 'block';
        volumeBar.value = '0';
    }
    else {
        myVideo.volume = +savedVolume;
        volumeOffSVG.style.display = 'none';
        volumeOnSVG.style.display = 'block';
        volumeBar.value = +savedVolume * 100 + '';
    }
});
if (myVideo.volume === 0) {
    volumeOnSVG.style.display = 'none';
    volumeOffSVG.style.display = 'block';
}
playButton.addEventListener('click', playback);
myVideo.addEventListener('click', playback);
document.addEventListener('keydown', function (event) {
    if (event.code === 'Space') {
        playback();
    }
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map