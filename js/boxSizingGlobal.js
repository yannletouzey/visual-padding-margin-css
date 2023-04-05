const rangeWidth = document.getElementById("range-width");
const rangeHeight = document.getElementById("range-height");
const rangePadding = document.getElementById("range-padding");
const rangeMargin = document.getElementById("range-margin");
const rangeBorder = document.getElementById("range-border");
const rangeBorderRadius = document.getElementById("range-border-radius");

const valueTextWidth = document.getElementById("value-text-width");
const valueTextHeight = document.getElementById("value-text-height");
const valueTextPadding = document.getElementById("value-text-padding");
const valueTextMargin = document.getElementById("value-text-margin");
const valueTextBorder = document.getElementById("value-text-border");
const valueTextBorderRadius = document.getElementById(
  "value-text-border-radius"
);

const valueBoxMargin = document.getElementById("box-value-margin");
valueBoxMargin.innerHTML = `<p>${rangeMargin.value} margin</p>`;

const valueBoxBorder = document.getElementById("box-value-border");
valueBoxBorder.innerHTML = `<p>${rangeBorder.value} border</p>`;

const valueBoxPadding = document.getElementById("box-value-padding");
valueBoxPadding.innerHTML = `<p>${rangePadding.value} padding</p>`;

const valueBoxContent = document.getElementById("box-value-content");
valueBoxContent.innerHTML = `<p>${rangeWidth.value} x ${rangeHeight.value}</p>`;

// Box content
const box = document.getElementById("box");
box.style.width = rangeWidth.value + "px";
box.style.height = rangeHeight.value + "px";

// Padding
const boxPadding = document.getElementById("box-padding");
boxPadding.style.width = parseInt(rangeWidth.value) + "px";
boxPadding.style.height = parseInt(rangeHeight.value) + "px";

// Border
const boxBorder = document.getElementById("box-border");
boxBorder.style.width = parseInt(rangeBorder.value) + "px";
boxBorder.style.height = parseInt(rangeBorder.value) + "px";

// Margin
const boxMargin = document.getElementById("box-margin");
boxMargin.style.width =
  parseInt(rangeWidth.value) +
  parseInt(rangeBorder.value) +
  parseInt(rangePadding.value) +
  parseInt(rangeMargin.value) +
  "px";
boxMargin.style.height =
  parseInt(rangeHeight.value) +
  parseInt(rangeBorder.value) +
  parseInt(rangePadding.value) +
  parseInt(rangeMargin.value) +
  "px";

// Hover box-value => box
valueBoxContent.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "#000";
  valueTextWidth.style.color = "red";
  valueTextHeight.style.color = "red";
});
valueBoxContent.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "#95d2fe";
  valueTextWidth.style.color = "white";
  valueTextHeight.style.color = "white";
});
valueBoxPadding.addEventListener("mouseenter", () => {
  boxPadding.style.backgroundColor = "#000";
  valueTextPadding.style.color = "red";
});
valueBoxPadding.addEventListener("mouseleave", () => {
  boxPadding.style.backgroundColor = "#c1f978";
  valueTextPadding.style.color = "white";
});
valueBoxBorder.addEventListener("mouseenter", () => {
  boxBorder.style.backgroundColor = "#000";
  valueTextBorder.style.color = "red";
});
valueBoxBorder.addEventListener("mouseleave", () => {
  boxBorder.style.backgroundColor = "#f7cd73";
  valueTextBorder.style.color = "white";
});
valueBoxMargin.addEventListener("mouseenter", () => {
  boxMargin.style.backgroundColor = "#000";
  valueTextMargin.style.color = "red";
});
valueBoxMargin.addEventListener("mouseleave", () => {
  boxMargin.style.backgroundColor = "#be8202";
  valueTextMargin.style.color = "white";
});

// Origin value
valueTextWidth.innerHTML = rangeWidth.value;
valueTextHeight.innerHTML = rangeHeight.value;
valueTextPadding.innerHTML = rangePadding.value;
valueTextMargin.innerHTML = rangeMargin.value;
valueTextBorder.innerHTML = rangeBorder.value;
valueTextBorderRadius.innerHTML = rangeBorderRadius.value;

// Hover range => value-text
rangeWidth.addEventListener("mouseenter", () => {
  valueTextWidth.style.color = "red";
  valueBoxContent.style.opacity = 0.6;
});
rangeWidth.addEventListener("mouseleave", () => {
  valueTextWidth.style.color = "white";
  valueBoxContent.style.opacity = 1;
});
rangeHeight.addEventListener("mouseenter", () => {
  valueTextHeight.style.color = "red";
  valueBoxContent.style.opacity = 0.6;
});
rangeHeight.addEventListener("mouseleave", () => {
  valueTextHeight.style.color = "white";
  valueBoxContent.style.opacity = 1;
});
rangePadding.addEventListener("mouseenter", () => {
  valueTextPadding.style.color = "red";
  valueBoxPadding.style.opacity = 0.6;
});
rangePadding.addEventListener("mouseleave", () => {
  valueTextPadding.style.color = "white";
  valueBoxPadding.style.opacity = 1;
});
rangeBorder.addEventListener("mouseenter", () => {
  valueTextBorder.style.color = "red";
  valueBoxBorder.style.opacity = 0.6;
});
rangeBorder.addEventListener("mouseleave", () => {
  valueTextBorder.style.color = "white";
  valueBoxBorder.style.opacity = 1;
});
rangeMargin.addEventListener("mouseenter", () => {
  valueTextMargin.style.color = "red";
  valueBoxMargin.style.opacity = 0.6;
});
rangeMargin.addEventListener("mouseleave", () => {
  valueTextMargin.style.color = "white";
  valueBoxMargin.style.opacity = 1;
});
rangeBorderRadius.addEventListener("mouseenter", () => {
  valueTextBorderRadius.style.color = "red";
});
rangeBorderRadius.addEventListener("mouseleave", () => {
  valueTextBorderRadius.style.color = "white";
});

// Value after range
rangeWidth.oninput = function () {
  valueTextWidth.innerHTML = rangeWidth.value;
  box.style.width = rangeWidth.value + "px";
  valueBoxContent.innerHTML = `<p>${rangeWidth.value} x ${rangeHeight.value}</p>`;
  boxPadding.style.width =
    parseInt(rangeWidth.value) + parseInt(rangePadding.value) + "px";
  boxBorder.style.width =
    parseInt(rangeWidth.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    "px";
  boxMargin.style.width =
    parseInt(rangeWidth.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    parseInt(rangeMargin.value) +
    "px";
};
rangeHeight.oninput = function () {
  valueTextHeight.innerHTML = rangeHeight.value;
  box.style.height = rangeHeight.value + "px";
  valueBoxContent.innerHTML = `<p>${rangeWidth.value} x ${rangeHeight.value}</p>`;
  boxPadding.style.height =
    parseInt(rangeHeight.value) + parseInt(rangePadding.value) + "px";
  boxBorder.style.height =
    parseInt(rangeHeight.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    "px";
  boxMargin.style.height =
    parseInt(rangeHeight.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    parseInt(rangeMargin.value) +
    "px";
};
rangePadding.oninput = function () {
  valueTextPadding.innerHTML = rangePadding.value;
  valueBoxPadding.innerHTML = `<p>${rangePadding.value} padding</p>`;
  boxPadding.style.width =
    parseInt(rangeWidth.value) + parseInt(rangePadding.value) + "px";
  boxPadding.style.height =
    parseInt(rangeHeight.value) + parseInt(rangePadding.value) + "px";
  boxBorder.style.width =
    parseInt(rangeWidth.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    "px";
  boxBorder.style.height =
    parseInt(rangeHeight.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    "px";
  boxMargin.style.width =
    parseInt(rangeWidth.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    parseInt(rangeMargin.value) +
    "px";
  boxMargin.style.height =
    parseInt(rangeHeight.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    parseInt(rangeMargin.value) +
    "px";
};
rangeBorder.oninput = function () {
  valueTextBorder.innerHTML = rangeBorder.value;
  valueBoxBorder.innerHTML = `<p>${rangeBorder.value} border</p>`;
  boxBorder.style.width =
    parseInt(rangeWidth.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    "px";
  boxBorder.style.height =
    parseInt(rangeHeight.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    "px";
  boxMargin.style.width =
    parseInt(rangeWidth.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    parseInt(rangeMargin.value) +
    "px";
  boxMargin.style.height =
    parseInt(rangeHeight.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    parseInt(rangeMargin.value) +
    "px";
};
rangeMargin.oninput = function () {
  valueTextMargin.innerHTML = rangeMargin.value;
  valueBoxMargin.innerHTML = `<p>${rangeMargin.value} margin</p>`;
  boxMargin.style.width =
    parseInt(rangeWidth.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    parseInt(rangeMargin.value) +
    "px";
  boxMargin.style.height =
    parseInt(rangeHeight.value) +
    parseInt(rangePadding.value) +
    parseInt(rangeBorder.value) +
    parseInt(rangeMargin.value) +
    "px";
  boxMargin.style.borderRadius = 0;
  if (parseInt(rangeMargin.value) == 0) {
    boxMargin.style.borderRadius = `${parseInt(rangeBorderRadius.value)}px`;
    boxMargin.style.width =
      parseInt(rangeWidth.value) +
      parseInt(rangePadding.value) +
      parseInt(rangeBorder.value) +
      parseInt(rangeMargin.value) -
      20 +
      "px";
    boxMargin.style.height =
      parseInt(rangeHeight.value) +
      parseInt(rangePadding.value) +
      parseInt(rangeBorder.value) +
      parseInt(rangeMargin.value) -
      20 +
      "px";
  }
};
rangeBorderRadius.oninput = function () {
  valueTextBorderRadius.innerHTML = rangeBorderRadius.value;
  box.style.borderRadius = `${rangeBorderRadius.value}%`;
  boxPadding.style.borderRadius = `${rangeBorderRadius.value}%`;
  boxBorder.style.borderRadius = `${rangeBorderRadius.value}%`;
  if (parseInt(rangeMargin.value) == 0) {
    boxMargin.style.borderRadius = `${parseInt(rangeBorderRadius.value)}px`;
    boxMargin.style.width =
      parseInt(rangeWidth.value) +
      parseInt(rangePadding.value) +
      parseInt(rangeBorder.value) +
      parseInt(rangeMargin.value) -
      20 +
      "px";
    boxMargin.style.height =
      parseInt(rangeHeight.value) +
      parseInt(rangePadding.value) +
      parseInt(rangeBorder.value) +
      parseInt(rangeMargin.value) -
      20 +
      "px";
  }
};
