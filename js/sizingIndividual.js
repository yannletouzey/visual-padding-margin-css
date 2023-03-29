// Ranges
const rangeWidth = document.getElementById('range-width')
const rangeHeight = document.getElementById('range-height')
    // Padding
const rangePaddingTop = document.getElementById('range-padding-top')
const rangePaddingRight = document.getElementById('range-padding-right')
const rangePaddingBottom = document.getElementById('range-padding-bottom')
const rangePaddingLeft = document.getElementById('range-padding-left')
    // Margin
const rangeMarginTop = document.getElementById('range-margin-top')
const rangeMarginRight = document.getElementById('range-margin-right')
const rangeMarginBottom = document.getElementById('range-margin-bottom')
const rangeMarginLeft = document.getElementById('range-margin-left')
    // Border
const rangeBorderTop = document.getElementById('range-border-top')
const rangeBorderRight = document.getElementById('range-border-right')
const rangeBorderBottom = document.getElementById('range-border-bottom')
const rangeBorderLeft = document.getElementById('range-border-left')
    // Border radius
const rangeBorderRadiusTop = document.getElementById('range-border-radius-top')
const rangeBorderRadiusRight = document.getElementById('range-border-radius-right')
const rangeBorderRadiusBottom = document.getElementById('range-border-radius-bottom')
const rangeBorderRadiusLeft = document.getElementById('range-border-radius-left')

// Values
const valueTextWidth = document.getElementById('value-text-width')
const valueTextHeight = document.getElementById('value-text-height')
    // Values padding
const valueTextPaddingTop = document.getElementById('value-text-padding-top')
const valueTextPaddingRight = document.getElementById('value-text-padding-right')
const valueTextPaddingBottom = document.getElementById('value-text-padding-bottom')
const valueTextPaddingLeft = document.getElementById('value-text-padding-left')
    // Values margin
const valueTextMarginTop = document.getElementById('value-text-margin-top')
const valueTextMarginRight = document.getElementById('value-text-margin-right')
const valueTextMarginBottom = document.getElementById('value-text-margin-bottom')
const valueTextMarginLeft = document.getElementById('value-text-margin-left')
    // Values border
const valueTextBorderTop = document.getElementById('value-text-border-top')
const valueTextBorderRight = document.getElementById('value-text-border-right')
const valueTextBorderBottom = document.getElementById('value-text-border-bottom')
const valueTextBorderLeft = document.getElementById('value-text-border-left')
    // Values border radius
const valueTextBorderRadiusTop = document.getElementById('value-text-border-radius-top')
const valueTextBorderRadiusRight = document.getElementById('value-text-border-radius-right')
const valueTextBorderRadiusBottom = document.getElementById('value-text-border-radius-bottom')
const valueTextBorderRadiusLeft = document.getElementById('value-text-border-radius-left')

// Values witness box
const valueBoxContent = document.getElementById('box-value-content')
valueBoxContent.innerHTML = `<p>${rangeWidth.value} x ${rangeHeight.value}</p>`
    // Margin
const valueBoxMargin = document.getElementById('box-value-margin')
valueBoxMargin.innerHTML = `<p>${rangeMarginTop.value}, ${rangeMarginRight.value}, ${rangeMarginBottom.value}, ${rangeMarginLeft.value} margin</p>`
    // Border
const valueBoxBorder = document.getElementById('box-value-border')
valueBoxBorder.innerHTML = `<p>${rangeBorderTop.value}, ${rangeBorderRight.value}, ${rangeBorderBottom.value}, ${rangeBorderLeft.value} border</p>`
    // Padding
const valueBoxPadding = document.getElementById('box-value-padding')
valueBoxPadding.innerHTML = `<p>${rangePaddingTop.value}, ${rangePaddingRight.value}, ${rangePaddingBottom.value}, ${rangePaddingLeft.value} padding</p>`



// Box content
const box = document.getElementById('box')
box.style.width = `${rangeWidth.value}px`
box.style.height = `${rangeHeight.value}px`

// Padding
    // Top
const boxPaddingTop = document.getElementById('box-padding-top')
boxPaddingTop.style.width = `${rangeWidth.value}px`
boxPaddingTop.style.height = `${rangeHeight.value}px`
    // Rigth
const boxPaddingRight = document.getElementById('box-padding-rigth')
boxPaddingRight.style.width = `${rangeWidth.value}px`
boxPaddingRight.style.height = `${rangeHeight.value}px`
    // Bottom
const boxPaddingBottom = document.getElementById('box-padding-bottom')
boxPaddingBottom.style.width = `${rangeWidth.value}px`
boxPaddingBottom.style.height = `${rangeHeight.value}px`
    // Left
const boxPaddingLeft = document.getElementById('box-padding-left')
boxPaddingLeft.style.width = `${rangeWidth.value}px`
boxPaddingLeft.style.height = `${rangeHeight.value}px`

// Border
const boxBorder = document.getElementById('box-border')
boxBorder.style.width = `${rangeWidth.value}px`
boxBorder.style.height = `${rangeHeight.value}px`

// Margin
    // Top
const boxMarginTop = document.getElementById('box-margin-top')
boxMarginTop.style.width = `${rangeWidth.value}px`
boxMarginTop.style.height = `${rangeHeight.value}px`
    // Rigth
const boxMarginRight = document.getElementById('box-margin-rigth')
boxMarginRight.style.width = `${rangeWidth.value}px`
boxMarginRight.style.height = `${rangeHeight.value}px`
    // Bottom
const boxMarginBottom = document.getElementById('box-margin-bottom')
boxMarginBottom.style.width = `${rangeWidth.value}px`
boxMarginBottom.style.height = `${rangeHeight.value}px`
    // Left
const boxMarginLeft = document.getElementById('box-margin-left')
boxMarginLeft.style.width = `${rangeWidth.value}px`
boxMarginLeft.style.height = `${rangeHeight.value}px`
// boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangeBorder.value) + parseInt(rangePadding.value) + parseInt(rangeMargin.value)) + "px"
// boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangeBorder.value) + parseInt(rangePadding.value) + parseInt(rangeMargin.value)) + "px"

// Hover box-value => box
// valueBoxContent.addEventListener('mouseenter', () => {
//     box.style.backgroundColor = "#000"
//     valueTextWidth.style.color = "red"
//     valueTextHeight.style.color = "red"
// })
// valueBoxContent.addEventListener('mouseleave', () => {
//     box.style.backgroundColor = "#95d2fe"
//     valueTextWidth.style.color = "white"
//     valueTextHeight.style.color = "white"
// })
// valueBoxPadding.addEventListener('mouseenter', () => {
//     boxPadding.style.backgroundColor = "#000"
//     valueTextPadding.style.color = "red"
// })
// valueBoxPadding.addEventListener('mouseleave', () => {
//     boxPadding.style.backgroundColor = "#c1f978"
//     valueTextPadding.style.color = "white"
// })
// valueBoxBorder.addEventListener('mouseenter', () => {
//     boxBorder.style.backgroundColor = "#000"
//     valueTextBorder.style.color = "red"
// })
// valueBoxBorder.addEventListener('mouseleave', () => {
//     boxBorder.style.backgroundColor = "#f7cd73"
//     valueTextBorder.style.color = "white"
// })
// valueBoxMargin.addEventListener('mouseenter', () => {
//     boxMargin.style.backgroundColor = "#000"
//     valueTextMargin.style.color = "red"
// })
// valueBoxMargin.addEventListener('mouseleave', () => {
//     boxMargin.style.backgroundColor = "#be8202"
//     valueTextMargin.style.color = "white"
// })

// Origin value
valueTextWidth.innerHTML = rangeWidth.value
valueTextHeight.innerHTML = rangeHeight.value
valueTextPaddingTop.innerHTML = rangePaddingTop.value
valueTextPaddingRight.innerHTML = rangePaddingRight.value
valueTextPaddingBottom.innerHTML = rangePaddingBottom.value
valueTextPaddingLeft.innerHTML = rangePaddingLeft.value
valueTextMarginTop.innerHTML = rangeMarginTop.value
valueTextMarginRight.innerHTML = rangeMarginRight.value
valueTextMarginBottom.innerHTML = rangeMarginBottom.value
valueTextMarginLeft.innerHTML = rangeMarginLeft.value
valueTextBorderTop.innerHTML = rangeBorderTop.value
valueTextBorderRight.innerHTML = rangeBorderRight.value
valueTextBorderBottom.innerHTML = rangeBorderBottom.value
valueTextBorderLeft.innerHTML = rangeBorderLeft.value
valueTextBorderRadiusTop.innerHTML = rangeBorderRadiusTop.value
valueTextBorderRadiusRight.innerHTML = rangeBorderRadiusRight.value
valueTextBorderRadiusBottom.innerHTML = rangeBorderRadiusBottom.value
valueTextBorderRadiusLeft.innerHTML = rangeBorderRadiusLeft.value

// Hover range => value-text
// rangeWidth.addEventListener('mouseenter', ()=>{
//     valueTextWidth.style.color = "red"
//     valueBoxContent.style.opacity = 0.6
// })
// rangeWidth.addEventListener('mouseleave', ()=>{
//     valueTextWidth.style.color = "white"
//     valueBoxContent.style.opacity = 1
// })
// rangeHeight.addEventListener('mouseenter', ()=>{
//     valueTextHeight.style.color = "red"
//     valueBoxContent.style.opacity = 0.6
// })
// rangeHeight.addEventListener('mouseleave', ()=>{
//     valueTextHeight.style.color = "white"
//     valueBoxContent.style.opacity = 1
// })
// rangePadding.addEventListener('mouseenter', ()=>{
//     valueTextPadding.style.color = "red"
//     valueBoxPadding.style.opacity = 0.6
// })
// rangePadding.addEventListener('mouseleave', ()=>{
//     valueTextPadding.style.color = "white"
//     valueBoxPadding.style.opacity = 1
// })
// rangeBorder.addEventListener('mouseenter', ()=>{
//     valueTextBorder.style.color = "red"
//     valueBoxBorder.style.opacity = 0.6
// })
// rangeBorder.addEventListener('mouseleave', ()=>{
//     valueTextBorder.style.color = "white"
//     valueBoxBorder.style.opacity = 1
// })
// rangeMargin.addEventListener('mouseenter', ()=>{
//     valueTextMargin.style.color = "red"
//     valueBoxMargin.style.opacity = 0.6
// })
// rangeMargin.addEventListener('mouseleave', ()=>{
//     valueTextMargin.style.color = "white"
//     valueBoxMargin.style.opacity = 1
// })
// rangeBorderRadius.addEventListener('mouseenter', ()=>{
//     valueTextBorderRadius.style.color = "red"
// })
// rangeBorderRadius.addEventListener('mouseleave', ()=>{
//     valueTextBorderRadius.style.color = "white"
// })



// Value after range
rangeWidth.oninput = function() {
    valueTextWidth.innerHTML = rangeWidth.value
    box.style.width = rangeWidth.value + "px"
    valueBoxContent.innerHTML = `<p>${rangeWidth.value} x ${rangeHeight.value}</p>`
    boxPadding.style.width = (parseInt(rangeWidth.value) + parseInt(rangePaddingRight.value) + parseInt(rangePaddingLeft.value)) + "px"
}
rangeHeight.oninput = function() {
    valueTextHeight.innerHTML = rangeHeight.value
    box.style.height = rangeHeight.value + "px"
    valueBoxContent.innerHTML = `<p>${rangeWidth.value} x ${rangeHeight.value}</p>`
    boxPadding.style.height = (parseInt(rangeHeight.value) + parseInt(rangePaddingTop.value)) + "px"
}
rangePaddingTop.oninput = function() {
    let newPaddingHeight = (parseInt(rangePaddingTop.value) + parseInt(rangePaddingRight.value) / 2)
    let newPaddingWidth = (parseInt(rangePaddingRight.value) / 2)
    valueTextPaddingTop.innerHTML = rangePaddingTop.value
    valueBoxPadding.innerHTML = `<p>${rangePaddingTop.value} padding</p>`
    boxPadding.style.height = (parseInt(rangeHeight.value) + parseInt(rangePaddingTop.value)) + "px"
    boxPadding.style.width = (parseInt(rangeWidth.value) + parseInt(rangePaddingRight.value)) + "px"
    if (rangePaddingTop.value > 0) {
        boxPadding.style.transform = `translateY(-${newPaddingHeight}px)`
    }
}
rangePaddingRight.oninput = function() {
    let newPaddingRight = parseInt(rangePaddingRight.value) / 2
    valueTextPaddingRight.innerHTML = rangePaddingRight.value
    valueBoxPadding.innerHTML = `<p>${rangePaddingRight.value} padding</p>`
    boxPadding.style.width = (parseInt(rangeWidth.value) + parseInt(rangePaddingRight.value)) + "px"
    boxPadding.style.height = (parseInt(rangeHeight.value) + parseInt(rangePaddingTop.value)) + "px"
    boxPadding.style.transform = `translateX(-${newPaddingRight}px)`
    // boxPadding.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value)) + "px"

    // boxBorder.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value)) + "px"
    // boxBorder.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value)) + "px"
    // boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
    // boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
}
// rangeBorder.oninput = function() {
//     valueTextBorder.innerHTML = rangeBorder.value
//     valueBoxBorder.innerHTML = `<p>${rangeBorder.value} border</p>`
//     boxBorder.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value)) + "px"
//     boxBorder.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value)) + "px"
//     boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
//     boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
// }
// rangeMargin.oninput = function() {
//     valueTextMargin.innerHTML = rangeMargin.value
//     valueBoxMargin.innerHTML = `<p>${rangeMargin.value} margin</p>`
//     boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
//     boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value)) + "px"
//     boxMargin.style.borderRadius = 0
//     if (parseInt(rangeMargin.value) == 0) {
//         boxMargin.style.borderRadius = `${parseInt(rangeBorderRadius.value)}px`
//         boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value) - 20) + "px"
//         boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value) - 20) + "px"
    
//     }
// }
// rangeBorderRadius.oninput = function() {
//     valueTextBorderRadius.innerHTML = rangeBorderRadius.value
//     box.style.borderRadius = `${rangeBorderRadius.value}%`
//     boxPadding.style.borderRadius = `${rangeBorderRadius.value}%`
//     boxBorder.style.borderRadius = `${rangeBorderRadius.value}%`
//     if (parseInt(rangeMargin.value) == 0) {
//         boxMargin.style.borderRadius = `${parseInt(rangeBorderRadius.value)}px`
//         boxMargin.style.width = (parseInt(rangeWidth.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value) - 20) + "px"
//         boxMargin.style.height = (parseInt(rangeHeight.value) + parseInt(rangePadding.value) + parseInt(rangeBorder.value) + parseInt(rangeMargin.value) - 20) + "px"
//     }
// }