
         
             $(document).ready(function(){
            $('#generiraj').prop('disabled', false);
            $('#generiraj-x-y').prop('disabled', false);
            var UporabljeneCifre = [];
            var generiranaCifra;
            var odgovor;
            var steviloUgibanj = 0;
            var izbranoSteviloUgibanj;
                 
                 $("#1-100").click(function(){
                    $("#generiranjeDo100").css("display", "inline")
                    $("#generiranjeX-Y").css("display", "none")
                    $("#RacunalnikUgiba").css("display", "none")
                 });
                 
                $("#x-y").click(function(){
                    $("#generiranjeDo100").css("display", "none")
                    $("#generiranjeX-Y").css("display", "inline")
                    $("#RacunalnikUgiba").css("display", "none")
                 });
                 
                    $("#computer-guess").click(function(){
                    $("#generiranjeDo100").css("display", "none")
                    $("#generiranjeX-Y").css("display", "none")
                    $("#RacunalnikUgiba").css("display", "inline")
                 });
                 
                 
            
             $("#generiraj").click(function(){
              generiranaCifra =  Math.floor((Math.random() * 100) + 1);
                 console.log(generiranaCifra);
                 $('#generiraj').prop('disabled', true)
                  izbranoSteviloUgibanj = $("#stevilo-ugibanj").val();
                 if(izbranoSteviloUgibanj == 0){
                     izbranoSteviloUgibanj = 99999;
                     console.log(izbranoSteviloUgibanj);
                 }

             
             });
             
             $("#ugibaj").click(function(){
                 console.log(steviloUgibanj);
                var izbranaCifra = $("#stevilka").val();
                if (izbranoSteviloUgibanj-steviloUgibanj===0)
                    {
                        alert("you've used all of your " + izbranoSteviloUgibanj +" tries, refresh the page to try again.")
                    }
                 else {
                 if (generiranaCifra > izbranaCifra) {
                    odgovor = "inputted number is lower than the randomly generated one";       
                 $("#rezultat").text(odgovor);
                     UporabljeneCifre.push(izbranaCifra)
                     steviloUgibanj++;
                 }
                else if(generiranaCifra < izbranaCifra) {
                    odgovor = "inputted number is higher than the randomly generated one";
                    $("#rezultat").text(odgovor);
                    UporabljeneCifre.push(izbranaCifra)
                    steviloUgibanj++;
                 }
                 else {
                    odgovor = "You've found the randomly generated number";
                    $("#rezultat").text(odgovor);
                     UporabljeneCifre.push(izbranaCifra)
                     $("#seznam-ugibanj-1-100").text("In your search you've used " + UporabljeneCifre.length + " attempts, the numbers used were " + UporabljeneCifre + ".");
                     $('#generiraj').prop('disabled', false)
                     UporabljeneCifre =[];

                 }}
                 });
      
             
$("#generiraj-x-y").click(function(){
    var x = $("#stevilkaX").val();
    var y = $("#stevilkaY").val();
    console.log("X = "+x)
    console.log("Y = "+y)
    var razlika = y - x;
    generiranaCifra =  Math.random();
    console.log("samo random " + generiranaCifra)
    generiranaCifra = generiranaCifra * razlika;
    console.log("pomnoženo z razliko " + generiranaCifra)
    generiranaCifra = generiranaCifra + x;
    console.log("s prištetim X " + generiranaCifra)
    generiranaCifra = Math.floor(generiranaCifra);
    console.log(generiranaCifra + " test");
    $('#generiraj-x-y').prop('disabled', true)
     izbranoSteviloUgibanj = $("#stevilo-ugibanj").val();
    if(izbranoSteviloUgibanj == 0){
        izbranoSteviloUgibanj = 99999;
         
        }

    

});

$("#ugibaj-x-y").click(function(){
    var izbranaCifra = $("#stevilka-x-y").val();
    console.log(izbranaCifra);
     if (izbranoSteviloUgibanj-steviloUgibanj===0)
                    {
                    alert("you've used all of your " + izbranoSteviloUgibanj +" tries, refresh the page to try again.")}
                 else {
    if (generiranaCifra > izbranaCifra) {
            odgovor = "inputted number is lower than the randomly generated one";       
            $("#rezultat-x-y").text(odgovor);
            UporabljeneCifre.push(izbranaCifra)
            steviloUgibanj++;
        }
    else if(generiranaCifra < izbranaCifra) {
            odgovor = "inputted number is higher than the randomly generated one";
            $("#rezultat-x-y").text(odgovor);
            UporabljeneCifre.push(izbranaCifra)
            steviloUgibanj++;
        }
    else {
            odgovor = "You've found the randomly generated number";
            $("#rezultat").text(odgovor);
            UporabljeneCifre.push(izbranaCifra)
            $("#seznam-ugibanj-x-y").text("In your search you've used " + UporabljeneCifre.length + " attempts, the numbers used were " + UporabljeneCifre + ".");
            $('#generiraj').prop('disabled', false)
            UporabljeneCifre =[];

                 }}
});
                 
                   });
             

             





            
