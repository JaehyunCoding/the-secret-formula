// Part 1: The alerter

let alertForm = document.querySelector(`#alert`)
let alertText = document.querySelector(`#typeText`)

alertForm.addEventListener(`submit`, function(event){
    event.preventDefault()
    alert(`${alertText.value}`)
    alertText.value=""
})


// Part 2: Sandwich builder (queryAll 이용한 for loop가 가장 효율적. 원 의도는 각 query였음... 게다가 space넣고 싶었으면 html의 value 내 str에게 띄어쓰기 넣으면 된 거였음...)

let sandwichform = document.querySelector(`#sandwich`)
let ingredients = document.querySelectorAll(`#ingredient input`)
console.log(ingredients)

sandwichform.addEventListener(`submit`, function(event){
    event.preventDefault()
    let checkedIng = []
    for (let i=0 ; i<ingredients.length; i++){
        if(ingredients[i].checked === true){
            checkedIng.push(ingredients[i].value)
        }
    }
   alert (`Your sandwich contains: ${checkedIng.toString()}`) 
})


// Part 3: Haircut appointment scheduler // 롱이냐 쇼트냐를 결정할 div가 필요한가
let hairForm = document.querySelector(`#hair`)
let date = document.querySelector(`#date`)
let cutter = document.querySelector(`#cutter`)

let long = document.querySelector(`#long`)
let short = document.querySelector(`#short`)

hairForm.addEventListener(`submit`, function(event){
    event.preventDefault()
    if (long.checked === true && short.checked === false){
        alert (`Haircut scheduled for ${date.value} with ${cutter.value} for ${long.value} hair.`)
    }   else if (long.checked === false && short.checked === true){
        alert (`Haircut scheduled for ${date.value} with ${cutter.value} for ${short.value} hair.`)
    }   else if (long.checked === true && short.checked === true){
        alert (`You can choose only one on the hair length.`)
    }   else if (long.checked === false && short.checked === false){
        alert (`Please choose the length of your hair.`)
    }

    date.value = ``
    cutter.value = ``
    long.value = ``
    short.value = ``

})

// let hairLength = shortHairInput.checked ? `Short` : `Long`

// Part 4: Create account

let AccountForm = document.querySelector(`#account`)
let userName = document.querySelector(`#Username`)
let Email = document.querySelector(`#Email`)
let PassWord = document.querySelector(`#Password`)
let PassConfirm = document.querySelector(`#PasswordConfirm`)

AccountForm.addEventListener(`submit`, function(event){
    event.preventDefault()
    if(PassWord.value === PassConfirm.value){
        alert (`ID: ${userName.value}, Email: ${Email.value}`)
        userName.value = ``
        Email.value = ``
        PassWord.value = ``
        PassConfirm.value = ``
    }   else {
        alert (`Please enter the correct password.`)
        PassWord.value = ``
        PassConfirm.value = ``
    }
   
})



