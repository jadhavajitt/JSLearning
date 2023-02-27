function tcsInterviewEligiblity (gradscore,hscScore,sscScore,candidateName){
    if (gradscore>=70 && hscScore>=80 && sscScore>=90){
        console.log(`Congrats ${candidateName} you are eligible for TCS interview.`);
    }else{
        console.log(`Unfortunately ${candidateName} you are not eligible for TCS interview`);
    }

}

tcsInterviewEligiblity(80,86,90,"Ajit")
tcsInterviewEligiblity(70,65,55,"Ajay")
tcsInterviewEligiblity(60,79,88,"Ramu")