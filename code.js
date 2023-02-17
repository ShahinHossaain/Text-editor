const textField = document.getElementById('textField');
const textStyle = document.getElementById('textStyle');
textStyle.addEventListener('click', (event) => {
    if(event.target.id === 'bold' || event.target.id === 'italic' || event.target.id === 'underline'){
        event.target.classList.toggle('border-b-2');
        if(event.target.id === 'bold')textField.classList.toggle('font-bold');
        else if(event.target.id === 'italic')textField.classList.toggle('italic');
        else textField.classList.toggle('underline');
    }
})
const textAlign = document.getElementById('textAlign');
textAlign.addEventListener('click', (event) => {
    const parent  = event.target.parentNode;
    child = parent.childNodes;
    for(let i = 1; i < child.length; i+=2) {
        child[i].style.color = 'black';
    }
    event.target.style.color = 'red';
    const id = event.target.id;
    const styles = textField.style;
    textField.style = styles.cssText + `text-align: ${id}`;
})
textSize.addEventListener('change', (event) => {
    textField.style.fontSize = event.target.value + 'px';
})
document.querySelector('select').addEventListener('change', (event) => {
    textField.style.textTransform = event.target.value;
});
const textColor = document.getElementById('textColor');
textColor.addEventListener('change', (event) => {
    textField.style.color = event.target.value;
})