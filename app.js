const rangeWidth = document.getElementById('range-width')
const rangePadding = document.getElementById('range-padding')
const rangeMargin = document.getElementById('range-margin')
const rangeBorder = document.getElementById('range-border')

const valueWidth = document.getElementById('value-width')
const valuePadding = document.getElementById('value-padding')
const valueMargin = document.getElementById('value-margin')
const valueBorder = document.getElementById('value-border')

const box = document.getElementById('box')

box.style.width = rangeWidth.value + "px"
box.style.padding = rangePadding.value + "px"
box.style.margin = rangeMargin.value + "px"
box.style.border = `${rangeBorder.value}px solid #000`

valueWidth.innerHTML = rangeWidth.value
valuePadding.innerHTML = rangePadding.value
valueMargin.innerHTML = rangeMargin.value
valueBorder.innerHTML = rangeBorder.value

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