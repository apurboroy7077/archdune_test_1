const toolbar = document.getElementById("lg-toolbar-1");
const closeButton = document.getElementById("lg-close-1");

if (toolbar && closeButton && toolbar.contains(closeButton)) {
  console.log("Close button exists within the toolbar.");
} else {
  const closeButton = document.createElement("button");
  closeButton.setAttribute("type", "button");
  closeButton.setAttribute("aria-label", "Close gallery");
  closeButton.setAttribute("id", "lg-close-1");
  closeButton.classList.add(
    "lg-close",
    "lg-icon",
    "absolute",
    "right-0px",
    "top-40px",
    "pointer-events-none"
  );

  toolbar.appendChild(closeButton);
}
