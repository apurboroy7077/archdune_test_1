import {
  lightGalleryBridge,
  lightGalleryMinFunction,
} from "../../js/photogrsphy/lightgallery.min.js";
import {
  autoPlayFunction,
  autoplaybridge,
} from "../../js/photogrsphy/lg-autoplay.min.js";
import {
  commentBridge,
  commentFunctionLightGallery,
} from "../../js/photogrsphy/lg-comment.min.js";
import {
  fullScreenBridge,
  fullScreenFunctionLightGallery,
} from "../../js/photogrsphy/lg-fullscreen.min.js";
import {
  pagerBridge,
  pagerMinFunctionLightGallery,
} from "../../js/photogrsphy/lg-pager.min.js";
import {
  relativeCaptionBridge,
  relativeCaptionBridgeFunctionLightGallery,
} from "../../js/photogrsphy/lg-relative-caption.min.js";
import {
  lgRotateFunctionLightGallery,
  rotateBridge,
} from "../../js/photogrsphy/lg-rotate.min.js";
import {
  shareBridge,
  shareBridgeFunctionLightGallery,
} from "../../js/photogrsphy/lg-share.min.js";
import {
  thumbnailBridge,
  thumbnailFunctionLightgallery,
} from "../../js/photogrsphy/lg-thumbnail.min.js";
import {
  zoomBridge,
  zoomFunctionLightgallery,
} from "../../js/photogrsphy/lg-zoom.min.js";

lightGalleryBridge;
autoplaybridge;
fullScreenBridge;
rotateBridge;
shareBridge;
thumbnailBridge;
zoomBridge;
pagerBridge;
commentBridge;
relativeCaptionBridge;
const gallery = document.getElementById("gallery");
const runLightGallery = () => {
  lightGallery(gallery, {
    controls: true,
    counter: true,
    download: true,
    plugins: [
      lgAutoplay,
      // lgRotate, // You can close the gallery in small screen if you enable lg rotate, I think it is a bug
      lgZoom,
      lgShare,
      lgFullscreen,
      lgThumbnail,
      lgComment,
      lgRelativeCaption,
    ],
  });
};
runLightGallery();
const testImport = () => {
  console.log("import successfull");
};
export { runLightGallery, testImport };
