setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            let am_pm = "AM";
 
            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
            }
            if (hour == 0) {
                hr = 12;
                 am_pm = "AM";
            }
 
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
 
            let currentTime = hour + ":"
                + min + ":" + sec + am_pm;
 
            document.getElementById("clock")
                .innerHTML = currentTime;
                if( sec <= 02  ) {
                    
                    document.getElementById("clock").style.backgroundColor ="#4c4c4c";
                }
                if( sec > 02  ) {
                    
                    document.getElementById("clock").style.backgroundColor ="white";
                }
                
                if(!(min >01) && min == 00  ) {
                    
                    document.getElementById("clock").style.backgroundColor ="#D4A89F";

                }
                var sound = new Audio("clocktick.mp3");
                if (min == 00){
                    playsound();
                }
                function playsound(){
                    sound.play;
                }
            }
        showTime();