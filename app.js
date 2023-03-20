const rangeWidth = document.getElementById('range-width')
const rangePadding = document.getElementById('range-padding')
const rangeMargin = document.getElementById('range-margin')
const rangeBorder = document.getElementById('range-border')
const rangeBorderRadius = document.getElementById('range-border-radius')

const valueWidth = document.getElementById('value-width')
const valuePadding = document.getElementById('value-padding')
const valueMargin = document.getElementById('value-margin')
const valueBorder = document.getElementById('value-border')
const valueBorderRadius = document.getElementById('value-border-radius')

const box = document.getElementById('box')

box.style.width = rangeWidth.value + "px"
box.style.padding = rangePadding.value + "px"
box.style.margin = rangeMargin.value + "px"
box.style.border = `${rangeBorder.value}px solid #000`
box.style.borderRadius = `${rangeBorderRadius.value}px`

valueWidth.innerHTML = rangeWidth.value
valuePadding.innerHTML = rangePadding.value
valueMargin.innerHTML = rangeMargin.value
valueBorder.innerHTML = rangeBorder.value
valueBorderRadius.innerHTML = rangeBorderRadius.value

rangeWidth.oninput = function() {
    valueWidth.innerHTML = rangeWidth.value
    box.style.width = rangeWidth.value + "px"
}
rangePadding.oninput = function() {
    valuePadding.innerHTML = rangePadding.value
    box.style.padding = rangePadding.value + "px"
}
rangeMargin.oninput = function() {
    valueMargin.innerHTML = rangeMargin.value
    box.style.margin = rangeMargin.value + "px"
}
rangeBorder.oninput = function() {
    valueBorder.innerHTML = rangeBorder.value
    box.style.border = `${rangeBorder.value}px solid #000`
}
rangeBorderRadius.oninput = function() {
    valueBorderRadius.innerHTML = rangeBorderRadius.value
    box.style.borderRadius = `${rangeBorderRadius.value}px`
}