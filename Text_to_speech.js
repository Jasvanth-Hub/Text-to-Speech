

let ta = document.getElementById("textarea")

let st = document.getElementById("select")

let btn = document.getElementById("btn")

let speechSynth = speechSynthesis

speechSynth.addEventListener("voiceschanged",loadvoices)

function loadvoices()
{
    let voices = speechSynth.getVoices()
    for(i in voices)
    {
        let option = document.createElement("option")

        option.value=voices[i].name

        option.innerText=`${voices[i].name} ${voices[i].lang}`

        st.appendChild(option)
    }
}   

function texttospeech(text)
{
    let utterance = new SpeechSynthesisUtterance(text)

    for(let voice of speechSynth.getVoices())
    {
        if(voice.name===st.value)
        {
            utterance.voice=voice
        }
    }
    speechSynth.speak(utterance)
}

btn.addEventListener("click",function()
{
    if(ta.value!="")
    {
        if(!speechSynth.speaking)
        {
            texttospeech(ta.value)
        }
    }
    else
    {
        ta.setAttribute("placeholder","Please enter the text ..")
    }
})

