const form_ = document.getElementsByTagName("form")[0];

form_.querySelectorAll('input, select').forEach(element => {
    element.removeAttribute('required')
    element.removeAttribute('maxlength')
    element.removeAttribute('minlength')
    element.removeAttribute('max')
    element.removeAttribute('min')
    element.removeAttribute('pattern')
})