const showCloseIconFunction2 = (serial) => {
    const toolbar = document.getElementById(`lg-toolbar-${serial}`);
    const closeButton = document.getElementById(`lg-close-${serial}`);
    if (toolbar && closeButton && toolbar.contains(closeButton)) {
        console.log("Close button exists within the toolbar.");
    }
    else {
        const closeButton = document.createElement("button");
        closeButton.setAttribute("type", "button");
        closeButton.setAttribute("aria-label", "Close gallery");
        closeButton.setAttribute("id", "lg-close-1");
        closeButton.classList.add("lg-close", "lg-icon");
        closeButton.style.right = "0px";
        closeButton.style.position = "absolute";
        closeButton.style.top = "40px";
        closeButton.style.pointerEvents = "none";
        toolbar?.appendChild(closeButton);
    }
};
export { showCloseIconFunction2 };
