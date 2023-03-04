const texts = document.querySelector('.texts')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new window.SpeechRecognition()
recognition.interimResults =true

let p = document.createElement('p')


//////////






    
const textMain = document.querySelector('.text-main')
const textAnswer = document.querySelector('.text-answer')


const unit_1 ={
    afraid:'Qorqmoq',
    agree:'Rozi bolmoq',
    angry:'Jahldor',
    arrive: 'Yetib kelmoq',
    attack: 'Hujum qilmoq',
    bottom: 'Tagi , pastki',
    clever: 'Aqilli , ziyrak',
    
}





let i=0



const name=  Object.entries(unit_1)
const ism =  Object.keys(unit_1)
const num = Object.values(unit_1)



console.log('akbar', name[i][1])
console.log(ism)
console.log(num)







let number = Math.floor(Math.random()*name.length)
let akbar = name[number]
let sanjar =akbar[0]
let adham = akbar[1]


textAnswer.textContent = adham



console.log(sanjar )
console.log(adham)



    
    
    






/////


recognition.addEventListener('result', (e)=> {

    const text =Array.from(e.results)
    .map(result=> result[0])
    .map(result => result.transcript)
    .join('')
    console.log('sulton',text)


    p.innerText = text
    texts.appendChild(p)

 


 
    ///////////






////////
    // if(e.results[0].isFinal){
    //     p= document.createElement('p')
    // }



})

recognition.addEventListener('end', ()=> {
    recognition.start()
})

recognition.start()


//////////////////////

// const textMain = document.querySelector('.text-main')
// const textAnswer = document.querySelector('.text-answer')


// const unit_1 ={
//     afraid:'qorqmoq',
//     agree:'rozi bolmoq',
//     angry:'jahldor',
//     arrive: 'yetib kelmoq',
//     attack: 'hujum qilmoq',
//     bottom: 'tagi , pastki',
//     clever: 'aqilli , ziyrak',
    
// }


// if(text == sanjar){
//     textMain.textContent = 'togri'
// }





// const name=  Object.entries(unit_1)
// const ism =  Object.keys(unit_1)
// const num = Object.values(unit_1)
// console.log(name)
// console.log(ism)
// console.log(num)


// let number = Math.floor(Math.random()*name.length)
// let akbar = name[number]
// let sanjar =akbar[0]
// let adham = akbar[1]


// textAnswer.textContent = adham

// console.log(sanjar)
// console.log(adham)