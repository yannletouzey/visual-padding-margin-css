const rangeWidth = document.getElementById('range-width')
const rangeHeight = document.getElementById('range-height')
const rangePadding = document.getElementById('range-padding')
const rangeMargin = document.getElementById('range-margin')
const rangeBorder = document.getElementById('range-border')
const rangeBorderRadius = document.getElementById('range-border-radius')

const valueTextWidth = document.getElementById('value-text-width')
const valueTextHeight = document.getElementById('value-text-height')
const valueTextPadding = document.getElementById('value-text-padding')
const valueTextMargin = document.getElementById('value-text-margin')
const valueTextBorder = document.getElementById('value-text-border')
const valueTextBorderRadius = document.getElementById('value-text-border-radius')

const valueBoxMargin = document.getElementById('box-value-margin')
valueBoxMargin.innerHTML = `<p>${rangeMargin.value}</p>`

const valueBoxBorder = document.getElementById('box-value-border')
valueBoxBorder.innerHTML = `<p>${rangeBorder.value}</p>`

const valueBoxPadding = document.getElementById('box-value-padding')
valueBoxPadding.innerHTML = `<p>${rangePadding.value}</p>`

const valueBoxContent = document.getElementById('box-value-content')
valueBoxContent.innerHTML = `<p>${rangeWidth.value} x ${rangeHeight.value}</p>`


// Box content
const box = document.getElementById('box')
box.style.width = rangeWidth.value + "px"
box.style.height = rangeHeight.value + "px"

// Padding
const boxPadding = document.getElementById('box-padding')
boxPadding.style.width = (parseInt(rangeWidth.value)) + "px"
boxPadding.style.height = (parseInt(rangeHeight.value)) + "px"

// Border
const boxBorder = document.getElementById('box-border')
boxBorder.style.width = parseInt(rangeBorder.value) + "px"
boxBorder.style.height = parseInt(rangeBorder.value) + "px"

// Margin
const boxMargin = document.getElementById('box-margin')
boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangeBorder.value) + parseInt(rangePadding.value) + parseInt(rangeMargin.value)) + "px"
boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangeBorder.value) + parseInt(rangePadding.value) + parseInt(rangeMargin.value)) + "px"



// Origin value
valueTextWidth.innerHTML = rangeWidth.value
valueTextHeight.innerHTML = rangeHeight.value
valueTextPadding.innerHTML = rangePadding.value
valueTextMargin.innerHTML = rangeMargin.value
valueTextBorder.innerHTML = rangeBorder.value
valueTextBorderRadius.innerHTML = rangeBorderRadius.value

// Value after range
rangeWidth.oninput = function() {
    valueTextWidth.innerHTML = rangeWidth.value
    box.style.width = rangeWidth.value + "px"
    valueBoxContent.innerHTML = `<p>${rangeWidth.value} x ${rangeHeight.value}</p>`
    boxPadding.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value)) + "px"
    boxBorder.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value)) + "px"
    boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
}
rangeHeight.oninput = function() {
    valueTextHeight.innerHTML = rangeHeight.value
    box.style.height = rangeHeight.value + "px"
    valueBoxContent.innerHTML = `<p>${rangeWidth.value} x ${rangeHeight.value}</p>`
    boxPadding.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value)) + "px"
    boxBorder.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value)) + "px"
    boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
}
rangePadding.oninput = function() {
    valueTextPadding.innerHTML = rangePadding.value
    valueBoxPadding.innerHTML = `<p>${rangePadding.value}</p>`
    boxPadding.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value)) + "px"
    boxPadding.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value)) + "px"
    boxBorder.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value)) + "px"
    boxBorder.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value)) + "px"
    boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
    boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
}
rangeBorder.oninput = function() {
    valueTextBorder.innerHTML = rangeBorder.value
    valueBoxBorder.innerHTML = `<p>${rangeBorder.value}</p>`
    boxBorder.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value)) + "px"
    boxBorder.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value)) + "px"
    boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
    boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
}
rangeMargin.oninput = function() {
    valueTextMargin.innerHTML = rangeMargin.value
    valueBoxMargin.innerHTML = `<p>${rangeMargin.value}</p>`
    boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
    boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
}
rangeBorderRadius.oninput = function() {
    valueTextBorderRadius.innerHTML = rangeBorderRadius.value
    box.style.borderRadius = `${rangeBorderRadius.value}px`
    boxPadding.style.borderRadius = `${rangeBorderRadius.value}px`
    boxBorder.style.borderRadius = `${rangeBorderRadius.value}px`
    boxMargin.style.borderRadius = `${parseInt(rangeBorderRadius.value) * 1.3}px`
}