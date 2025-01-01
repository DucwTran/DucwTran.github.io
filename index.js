const inputColor = document.querySelector(".color__attribute-main-input");
const inputWidth = document.querySelector(".color__attribute-width-input");
const inputHeight = document.querySelector(".color__attribute-height-input");
const resultValue = document.querySelector(".result");
const submitButton = document.querySelector(".color__submit-button");

const checkInput = function(inputAttribute){
    if(inputAttribute.value.trim() === "") {
        return false;
    }
    return true;
}

submitButton.addEventListener('click', () =>{
    if(!checkInput(inputColor)) {
        alert("Vui lòng nhập lại mã màu");
        return;
    }
    if(!checkInput(inputHeight)) {
        alert("Vui lòng nhập chiều cao");
        return;
    }
    if(!checkInput(inputWidth)) {
        alert("Vui lòng nhập chiều rộng");
        return;
    }
    const colorValue = "#" + inputColor.value.trim();
    const widthValue = inputWidth.value.trim() + "px";
    const heightValue = inputHeight.value.trim() + "px";

    resultValue.style.backgroundColor = colorValue;
    resultValue.style.width = widthValue;
    resultValue.style.height = heightValue;
    resultValue.style.cursor = "pointer";

    console.log(`Màu: ${colorValue}, Chiều rộng: ${widthValue}, Chiều cao: ${heightValue}`);
});

resultValue.addEventListener("click", () =>{
    inputColor.value = "";
    inputWidth.value = "";
    inputHeight.value = "";
    resultValue.style.removeProperty("width");
    resultValue.style.removeProperty("height");
    resultValue.style.removeProperty("background-color");
});