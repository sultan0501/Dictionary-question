const texts = document.querySelector('.texts p')

const inputType =document.querySelector('.inputType')
const btnNumber = document.querySelector('.btn')
const btnStop = document.querySelector('.btnStop')



const textQuestion = document.querySelector('.text-question')
const btn = document.querySelector('.btn')



window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new window.SpeechRecognition()
recognition.interimResults =true

let p = document.createElement('p')




    
const textMain = document.querySelector('.text-main')
const textAnswer = document.querySelector('.text-answer')



const arrNumber =[ 
     {},

    

        {
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
            appropriate :" mos, to'g'ri",
            avoid :" yaqinlashmaslik",
            behave :" o'zini tutmoq",
          
            concern :" tashvish, g'am",
            content : "hursand, shod",
            expect :" umid qilmoq, kutmoq",
            frequently :" tez- tez",
            
        },
     
 
    
   {
    carefully:'etibor bilan',
    chemical: 'kimyoviy modda',
    evil:'yomon , yovuz',
    experiment: 'tajriba , sinov',
    kill: "o'ldirmoq",
    laboratory: 'labaratoriya',
    noise: 'shovqin',
    project: 'loyiha',
    secret: 'sir',
    smell: 'hidlamoq',
    terrible: 'juda yomon',
    worse: 'yomonroq',
    },

       {
        alien : "o'zga sayyoralik",
        among :"orasida, ichida",
        chart :" grafik jadval, diagramma",
       
        comprehend : "tushunmoq",
        ever : "qachon bo'lsa ham ",
        fail : "muvaffaqiyatsizlikka uchramoq ",
        friendly :" do'stona, mehribon",
        
        instead: "o'rniga",
        library :"kutubxona ",
        planet :"sayyora, sayyora",
        report : "hisobot",
        several :" bir nechta, bir talay",
    
        suddenly :" to'satdan, birdaniga",
        suppose :" faraz qilmoq ",
        universe :" olam, koinot",
        view : "ko'rmoq, qaramoq",
    
        
    },
    
 {
    appropriate :" mos, to'g'ri",
    avoid :" yaqinlashmaslik",
   
  
    concern :" tashvish, g'am",
    content : "hursand, shod",
    expect :" umid qilmoq, kutmoq",
    frequently :" tez- tez",
    habit :" odat",
    instruct : "ko'rsatma bermoq",
  
    none : "hech qancha",
    patient : "sabrli, toqatli",
    positive :" ijobiy",
    punish :" jazolamoq",
    represent :" vakil bo'lmoq",
    shake :" silkitmoq, siltamoq",
    spread :" tarqatmoq, surkamoq",
    stroll :" sayir qilmoq",
        
    },
    
 {
    
        badly : "yomon, jiddiy",
     
        error :" xato",
        experience : "taassurot, kechinma",
        field : "keng maydon, dala",
        hurt :" jarohat yetkazmoq",
        judgment :" qaror, fikr",
        likely :" ehtimol, balki",
        normal : "odatiy, har doimgi",
        relax :" dam olmoq",
        reside :" istiqomat qilmoq",
        result :" natija, oqibat",
        roll :" yumalatmoq",
        since :" dan beri",
        wild :" yovvoyi",
            
        },


        {
            advantage :" ustun jihat, foyda",
            
            choice : "tanlash imkoniyati",
            community : "jamiyat, jamoa",
           
            distance : "masofa",
            escape :" qochib qutilmoq",
            face : "duch kelmoq",
            follow :" ergashmoq, amal qilmoq",
           
           
            individual :" indvid, kishi",
            pet : "uy hayvoni",
            reach : "yetib bormoq",
            return : "qaytib kelmoq",
            survive : "tirik qolmoq",
            upset : "xafa, tushkun",
            voice : "ovoz, tovush",
            weather :" ob-havo",
            wise : "aqilli, dono",
        },

        {
           
            announce : "e'lon qilmoq",
            beside : "yonma-yon",
            challenge :" qiyinchilik",
            claim :"tasdiqlamoq",
            condition :" holat, ahvol",
            contribute : "hissa qo'shmoq",
            difference : "farq, tafovut",
            divide : "taqsimlamoq, bo'lmoq",
            expert : "eskpert, mutaxassis",
            famous :" mashxur",
            force :" kuch, qudrat",
            harm : "jabr, jarohat",
       
            peace : "tinchlik",
            prince : "shaxzoda",
            protect : "himoya qilmoq",
            sense : "his qilmoq",
          
            therefore :" shuning uchun",
        },

        {
            accept : "qabul qilmoq",
            arrange :" tartibga keltirmoq",
            attend :" bormoq, qatnashmoq",
            balance : "muvozanat saqlamoq",
            contrast :" katta farq",
            encourage :" ruhlantirmoq",
            familiar : "tanish, qadirdon",
            grab :" uzmoq, olmoq",
          
          
            necessary :" kerak, zarur",
            pattern :" uslub, yo'nalish",
            propose : "taklif qilmoq",
            purpose :" maqsad",
            release :" qo'yib yubormoq",
            require :" talab qilmoq",
            single : "bitta, bir dona, yolg'iz",
            success : "muvaffaqiyat",
            tear :" yirtmoq",
            theory :" nazariya",

        },
        {
          
            beach : "sohil",
            damage : "shikaslamoq",
            discover :" kashf qilmoq",
            emotion : "ruhiy kechinma",
            fix :" tuzatmoq, ta'mirlamoq",
            frank :" ochiq, samimiy",
            identify :" tanib bilmoq",
            island : "orol",
          
            perhaps : "ehtimol, balki",
            pleasant :" yoqimli",
            prevent :" to'sqinlik qilmoq",
            rock : "tosh",
            save : "asramoq, saqlamoq",
            step : "yurmoq, qadam",
            still :" haliyam",
          
          
            wave : "to'lqin, mavj",
        },

        {
        
            certain : "ishonchi komil",
            chance : "imkoniyat",
            effect : "ta'sir, samara",
            essential : "juda muhim, zarur",
            far :" uzoq, olis",
            focus : "diqqatini qaratmoq",
            function : "funksiya, vazifa",
            grass : "maysa, o't",
            guard : "qo'riqlamoq",
            image :" rasm, ko'rinish",
            immediate : "tezkor",
            primary : "asosiy, birinchi darajali",
            proud : "fahrlanmoq",
            remain : "qolmoq",
            rest :" dam olmoq",
            separate : "alohida, ajralgan",
            site : "joy",
            tail :" dum",
            trouble : "muammo, qiyinchilik",
        },
        {
            anymore : "ortiq, boshqa",
            asleep :"uxlayotgan, uyquda",
           
            collect : "to'plamoq, yig'moq",
            compete : "musobaqalashmoq",
            conversation :" suhbat, muloqot",
            creature :" jonvor, mavjudot",
            decision :" qaror",
            either : "ikkisidan biri",
            forest :" o'rmon",
            ground : "yer",
            introduce :" tanishtirmoq",
           
            prepare : "tayyorlanmoq",
            sail :" qayiqda suzmoq",
          
            spend :" o'tkazmoq, sarflash",
            strange : "g'alati, noodatiy",
            truth :" haqiqat",
            wake : "uyg'onmoq",
            
            
        },
        {
            alone : "yolg'iz",
            apartment : "kvartira",
            article : "maqola",
            artist : "rassom",
            attitude : "munosabad",
            compare : "taqqoslamoq",
            judge : "baho bermoq , hakam",
            magazine :" jurnal",
            material : "materyal, xom-ashyo",
            meal : "ovqatlanish payti, taom",
            method : "metod, usul",
           
            professional : "kasbiy, profesional",
            profit :" foyda",
            quality :" sifat",
            shape : "shakl",
            space : "bo'sh joy",
           
            symbol : "ramz, belgi",
           
        },
        {
            blood : "qon",
          
            cell :" kamera (turmada) , hujayra",
            contain : "o'z ichiga olmoq",
            correct : "to'g'ri, bexato",
            crop :" hosil, o'rim",
            demand : "talab qilmoq",
            equal :" teng, barobar",
            feed : "ovqatlantirmoq",
          
            increase : "oshirmoq, ko'tarmoq",
            lord : "lord",
            // owe : "qarz bo'lmoq",
            position :" pozitsiya, holat",
            raise : "ko'tarmoq",
            responsible : "masuliyatli",
            sight : "manzara",
            spot : "joy, makon",
            structure : "tuzilish",
            whole : "barcha, butun",
        },
        {
            coach : "murabbiy, trener",
            control : "nazorat qilmoq",
            description : "ta'rif, tavsif",
            direct : "to'g'ridan-to'g'ri",
            exam : "imtihon",
            example :" misol",
            limit : "me'yor",
            local : "mahalliy",
            magical : "sehirli, sirli",
            mail : "xat, pochta",
            novel : "roman",
            outline : "reja",
            poet : "shoir",
            print : "qog'ozga tushirmoq",
            scene : "sahna, epizod",
            sheet : "varoq",
            silly : "ahmoqona",
            store : "do'kon, unvermark",
            suffer : "azoblanmoq",
            technology : "tehnologiya",
        },

        {
            across : "nargi tomoniga",
            breathe : "nafas olmoq",
            characteristic :" xususiyat",
            consume : "istemol qilmoq",
            excite : "hayajonga solmoq",
            extreme : "keskin, shiddatli",
            fear : "qo'rquv",
            fortunate : "omadli",
            happen : "nasib qilmoq",
            length : "uzunlik",
            mistake : "xato",
            observe : "kuzatmoq",
            opportunity : "imkoniyat",
            prize :" mukofot, sovrin",
            race : "poyga",
            realize : "fahmlamoq",
            respond : "javob qaytarmoq",
            risk : "tavakkal",
            wonder : "bilishni xoxlamoq",
            yet : "haliyam",
        }




]

 
//// bu yerdan  ---->

let i=1


let name = arrNumber[i]

btnNumber.addEventListener('click', (e)=> {
e.preventDefault()
    console.log(e)
    let i =0

 let abbos = arrNumber[inputType.value]
 let tihir = Object.entries(abbos)

 

 textAnswer.textContent = tihir[i][1]
 

 

recognition.addEventListener('result', (e)=> {

    const text =Array.from(e.results)
    .map(result=> result[0])
    .map(result => result.transcript)
    .join('')
    let card = text.slice(0)
    
    console.log(card)
    
  


    // p.innerText = text

    // texts.appendChild(p)



  
    




function sulton(){
   

if(tihir[i][0]== text){
    i++
    if(i>=tihir.length){
        i=0
    }
textAnswer.textContent = tihir[i][1]


playText(tihir[i][1])  



}

}
sulton()





 if(e.results[0].isFinal){
      p= document.createElement('p')
        
    }

})

})


// let ism = Object.entries(name)
// console.log(ism)



// console.log('akbar', name) 


// let number = Math.floor(Math.random()*ism.length)


// textAnswer.textContent = ism[i][1]




function playText(text){
    const utterance =  new  SpeechSynthesisUtterance(text)
    // utterance.rate = speedInput.value || 1
    utterance.lang= 'uz-UZB'
    speechSynthesis.speak(utterance)
    

    }

    
    function speakingPause(){
        speechSynthesis.resume()
        speechSynthesis.cancel()
}
speakingPause()



//  function addNumber(){
//  btnNumber.addEventListener('click', ()=> {

//  })

//  }
//  addNumber()



// recognition.addEventListener('result', (e)=> {

//     const text =Array.from(e.results)
//     .map(result=> result[0])
//     .map(result => result.transcript)
//     .join('')
//     console.log(text)


//     p.innerText = text

//     // texts.appendChild(p)



  

// function sulton(){

// if(ism[i][0]== text){
//     i++
//     if(i>=ism.length){
//         i=0
//     }
// textAnswer.textContent = ism[i][1]


// // playText(ism[i][1])   


// }




// }
// sulton()




//  if(e.results[0].isFinal){
//       p= document.createElement('p')
        
//     }



// })

recognition.addEventListener('end', ()=> {
    recognition.start()
})

recognition.start()

