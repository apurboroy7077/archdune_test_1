import { lightGalleryBridge } from "../../js/photogrsphy/lightgallery.min.js";
import { autoplaybridge } from "../../js/photogrsphy/lg-autoplay.min.js";
import { commentBridge } from "../../js/photogrsphy/lg-comment.min.js";
import { fullScreenBridge } from "../../js/photogrsphy/lg-fullscreen.min.js";
import { pagerBridge } from "../../js/photogrsphy/lg-pager.min.js";
import { relativeCaptionBridge } from "../../js/photogrsphy/lg-relative-caption.min.js";
import { rotateBridge } from "../../js/photogrsphy/lg-rotate.min.js";
import { shareBridge } from "../../js/photogrsphy/lg-share.min.js";
import { thumbnailBridge } from "../../js/photogrsphy/lg-thumbnail.min.js";
import { zoomBridge } from "../../js/photogrsphy/lg-zoom.min.js";

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
const runLightGallery = () => {
  const gallery = document.getElementById("gallery");
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
