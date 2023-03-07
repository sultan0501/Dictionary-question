const texts = document.querySelector('.texts p')
console.log(texts.textContent)
const textQuestion = document.querySelector('.text-question')
const btn = document.querySelector('.btn')



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
    attack: 'Hujum qilmoq',
    bottom: 'Tagi , pastki',
    clever: 'Aqilli , ziyrak',
    cruel: 'shafqatsiz',
    finally: 'ahiri , vanihoyat',
    hide: 'yashirinmoq',
    hunt: 'ov qilmoq',
    middle: "o'rta , markaz",
    moment: 'sekund',
    promise: 'vada bermoq',
    reply: 'javob bermoq',
    safe: 'hafsiz , behatar',
    trick: 'hiyla , nayrang',
    well: 'yaxshi',
    // evil:'yomon , yovuz',
    // experiment: 'tajriba , sinov',
    // kill: "o'ldirmoq",
    // laboratory: 'labaratoriya',
    // loud: 'shovqin',
    // nervous:'xavotirlangan',
    // noise: 'shovqin',
    // project: 'loyiha',
    // scare: "qo'rqitmoq",
    // secret: 'sir',
    // shout: 'baqiriq , qichqiriq',
    // smell: 'hidlamoq',
    // terrible: 'juda yomon',
    // worse: 'yomonroq',



    
}





let i=0



const name=  Object.entries(unit_1)
const ism =  Object.keys(unit_1)
const num = Object.values(unit_1)



console.log('akbar', name) 

console.log(ism , 'ism')
console.log(num, 'num')







let number = Math.floor(Math.random()*name.length)
let akbar = name[number]
let sanjar =akbar[0]
let adham = akbar[1]








console.log(sanjar , 'sanjar' )
console.log(adham , 'adham')



    





textAnswer.textContent = name[i][1]




function playText(text){
    const utterance =  new  SpeechSynthesisUtterance(text)
    // utterance.rate = speedInput.value || 1
    utterance.lang= 'uz-UZB'
    speechSynthesis.speak(utterance)
    
    }




/////


recognition.addEventListener('result', (e)=> {

    const text =Array.from(e.results)
    .map(result=> result[0])
    .map(result => result.transcript)
    .join('')
    console.log('sulton',text)


    p.innerText = text

    texts.appendChild(p)

///text





function sulton(){

if(name[i][0]== text){
    i++
    if(i>=name.length){
        i=0
    }
textAnswer.textContent = name[i][1]

playText(name[i][1])   //// ovozni chiqaruvchi
///  var ism = name[i][1]
}

}
sulton()











//  if(e.results[0].isFinal){
//       p= document.createElement('p')
        
//     }

})

recognition.addEventListener('end', ()=> {
    recognition.start()
})

recognition.start()

