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
    arrive: 'Yetib kelmoq',
    attack: 'Hujum qilmoq',
    bottom: 'Tagi , pastki',
    clever: 'Aqilli , ziyrak',
    
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


/////


recognition.addEventListener('result', (e)=> {

    const text =Array.from(e.results)
    .map(result=> result[0])
    .map(result => result.transcript)
    .join('')
    console.log('sulton',text)


    p.innerText = text
    texts.appendChild(p)







function sulton(){

if(name[i][0]== text){
    i++
    if(i>=name.length){
        i=0
    }
textAnswer.textContent = name[i][1]

///  var ism = name[i][1]
}

}
sulton()










// function akbar(){
// if(name[i][0]== texts.textContent){
//     i++ 
    
//  if(i>=name.length){
//     i=0
  
//  }

//  textAnswer.textContent= name[i][1] 
//  //shu yerni tekshir

//  sulton()
// }

  
// }

// akbar()



// function sulton(){

//     if(text == sanjar){
   
//    textAnswer.textContent= name[i][1]   // shu yerni tekshir
    
   
//     }
   
//    }
//    sulton()


















//  if(e.results[0].isFinal){
//       p= document.createElement('p')
        
//     }

})

recognition.addEventListener('end', ()=> {
    recognition.start()
})

recognition.start()

