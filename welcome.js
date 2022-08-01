  // get values from local storage 
        // get name 
        let username =  localStorage.getItem("username");
        document.getElementById("welcome").innerHTML=  "Welcome to our website " + username;

        // get languages 
        let html = parseInt(localStorage.getItem("html"));
        let css = parseInt(localStorage.getItem("css")); 
        let js = parseInt(localStorage.getItem("js")); 
        let python = parseInt(localStorage.getItem("python")); 
        let java =  parseInt(localStorage.getItem("java")); 
        let cpp = parseInt(localStorage.getItem("cpp"));  

        // get reason for learning 
        let reason =  localStorage.getItem("ReasonForLearning"); 
        
        // get patience 
        let patience =   localStorage.getItem("shareTime"); 

        // get interests 
        let mobile  =  localStorage.getItem("mobileInterest");
        let desktop = localStorage.getItem("desktopInterest"); 
        let web = localStorage.getItem("webInterest");
        let all = localStorage.getItem("allInterest"); 

        // display results (temporary) - juste pour etre sur que les bonnes valeura sont transm8ses 
       // document.getElementById("values").innerHTML=  "Values received : " + username  + " html "  + html.toString() +  " css " + css.toString() +  " js " + js.toString() +  " python  " + python.toString() +  " java " + java.toString() +  " cpp " + cpp.toString() +  " " + reason +  " " + patience +  " " + mobile +  " " + desktop +  " " + web +  " " + all;
        // alert("Values received : " + username  + "  "  + html.toString() +  " " + css.toString() +  " " + js.toString() +  " " + python.toString() +  " " + java.toString() +  " " + cpp.toString() +  " " + reason +  " " + patience +  " " + mobile +  " " + desktop +  " " + web +  " " + all);
        // create scenario
        let path = ""; 
        let recommended_language = ""; 
        let recommended_plateform = "" ; 
        // Interest in all plateforms

        if (all === "true") {

            console.log("All true"); 
            if (patience === "now"){
                recommended_language = "javascript";
                recommended_plateform = "web";  
            } else if (patience == "canWait"){
                recommended_language = "javascript";
                recommended_plateform = "crossplateform";  
            } 

        } else if ( mobile === "true"){
            console.log(" mobile true"); 

            if (patience === "now"){
                if (java === 0) {
                 recommended_language = "javascript";
                 recommended_plateform = "mobile";  
                } else if (java != 0 ) {
                    recommended_language = "java";
                    recommended_plateform = "mobile";  
                } 
                
            } else if (patience == "canWait"){
                if (js === 0 ) {    
                    recommended_language = "java";
                    recommended_plateform = "mobile";  
                } else if (js  != 0 ) {
                    recommended_language = "javascript";
                    recommended_plateform = "mobile";  
                }
                
            } 


        } else if (web === "true "){
            console.log("web true"); 

            // seriously, the web is easier with js no matter what (personal opinion XD)
            recommended_language = "javascript";
            recommended_plateform = "web";  

            

        } else if (desktop === "true "){
            console.log("desktop true"); 

            if (patience === "now"){
               if ( java === 0 ){
                    if ( cpp === 0){
                    recommended_language = "javascript";
                    recommended_plateform = "desktop";  
                    } else if (cpp != 0){
                    recommended_language = "c++";
                    recommended_plateform = "desktop";  
                    }

               } else {
                recommended_language = "java";
                recommended_plateform = "desktop";  
               }
                
            } else if (patience == "canWait"){
                if (cpp === 0 ){
                        if (java === 0 ){
                        recommended_language = "c++";
                        recommended_plateform = "desktop";  
                        } else {
                         recommended_language = "java";
                        recommended_plateform = "desktop";  
                        }
                } else {
                    recommended_language = "c++";
                    recommended_plateform = "desktop";  
                }
                
            } 

        }
        
        // let the user know 
        path = " we suggest that you learn the programming language " + recommended_language + " for the plateform  " + recommended_plateform + " "; 
        
        document.getElementById("values").innerHTML= "Based on your reponses, " + path + " ." + " Please click on  the cards ! " ; 

        // display the rights the cards 
        
        // display plateform 
        switch(recommended_plateform){
            case "mobile" : 
                document.getElementById('mobile').style.display='block'; 
                break; 
            case "web": 
                document.getElementById('web').style.display='block'; 
                break; 
            case "desktop": 
                document.getElementById('desktop').style.display='block'; 
                break; 
            case "crossplateform": 
                 document.getElementById('crossplateform').style.display='block'; 
                break; 
        }

        switch(recommended_language){
            case "java" : 
                document.getElementById('java').style.display='block'; 
                break; 
            case "python": 
                document.getElementById('python').style.display='block'; 
                break; 
            case "javascript": 
                document.getElementById('Javascript').style.display='block'; 
                break; 
            case "c++": 
                 document.getElementById('cpp').style.display='block'; 
                break; 
        }