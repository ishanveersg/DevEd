function setValues(form) {
    console.log("worked!")
    let name = form.username.value; 
    let counter = 0; 
    let hasname= true; 

    //variables
    let html = 0, css = 0, js = 0, pyhton = 0, java  = 0, cpp = 0; 

    while(name==="" && counter==0){
        alert("Please enter your name !")
        counter +=1 ; 
        hasname = false;
    }
    if (!hasname){
        // reload the page 
        document.location.href = "quiz.html"; 
    } else {
        // proceed and store value in the localStorage  
            
        // get name 
        localStorage.setItem("username", name);

        // get languages 
        let known_languages = new Array (form.know_html.checked, form.know_css.checked, form.know_js.checked, form.know_python.checked, form.know_java.checked, form.know_cpp.checked);
        let languages = ['html','css', 'js', 'python', 'java','cpp'];
        let languages_values = [0,0,0,0,0,0]; 
        // increment values for the chosen languages 
        for ( let i = 0 ; i < 6 ; i++){
            switch(known_languages[i]){
                case true : 
                    if ( i === 0 ){
                        html+=1; 
                        languages_values[i]+=1 ;
                        console.log("Html true"); 
                    } else if (i === 1 ){
                        css+=1; 
                        languages_values[i]+=1 ; 
                        console.log("css true");
                        console.log(languages_values[i]);
                    } else if (i ===2 ){
                        js +=1 ;
                        languages_values[i]+=1 ;
                        console.log("js true"); 
                    } else if (i === 3 ){
                        python +=1 ;
                        languages_values[i]+=1 ; 
                        console.log("python true");
                    } else if (i === 4) {
                        java +=1 ;
                        languages_values[i]+=1 ; 
                        console.log("java true");
                    } else if (i===5  ){
                        cpp +=1 ; 
                        languages_values[i]+=1 ; 
                        console.log("cpp true");
                    } else {
                        // nothing 
                    }
                    break ; 
                case false : 
                    languages_values[i]+=0 ; 
                    break ; 
            }
        }
        console.log("languages values : " + languages_values);
        for (let i = 0 ; i < 6 ; i++){
            if (languages_values[i] === 0 ){
                localStorage.setItem(languages[i],"0"); 
            } else {
                localStorage.setItem(languages[i],"1"); 
            }
        }

        // get reason for learning 
        let count_reason = - 1  ; 
        for (let count = 0 ; count < 3 ; count++){
            if (form.reason[count].checked){
                count_reason = count; 
                break; 
            }
        }
        let reasons = ["school","projects", "hacking"]
        switch(count_reason){
            case 0 : 
                localStorage.setItem("ReasonForLearning",reasons[0]); 
                break; 
            case 1 : 
            localStorage.setItem("ReasonForLearning",reasons[1]); 
                break; 
            case 2 : 
            localStorage.setItem("ReasonForLearning",reasons[2]); 
                break; 

        }
        

        // get "patience"
        let count_patience = - 1  ; 
        for (let count = 0 ; count < 3 ; count++){
            if (form.shareTime[count].checked){
                count_reason = count; 
                break; 
            }
        }
        let patience = ["now","canWait"]
        switch(count_reason){
            case 0 : 
                localStorage.setItem("shareTime",patience[0]); 
                break; 
            case 1 : 
            localStorage.setItem("shareTime",patience[1]); 
                break; 

        }



        // get particular interests 

        let count_interest = - 1  ; 
        for (let count = 0 ; count < 4 ; count++){
            if (form.interest[count].checked){
                count_interest = count; 
                break; 
            }
        }
        let interest = ["mobileInterest","desktopInterest", "webInterest","allInterest"]
        console.log(" quiz : " + count_interest); 
        //alert(count_interest); 
        switch(count_interest){
            case 0 : 
                // set its value to true 
                localStorage.setItem(interest[0],"true");
                // and all the rest to false 
                localStorage.setItem(interest[1],"false"); 
                localStorage.setItem(interest[2],"false");
                localStorage.setItem(interest[3],"false");
                break; 
            case 1 : 
             // set its value to true 
                  localStorage.setItem(interest[1],"true");
                // and all the rest to false 
                localStorage.setItem(interest[0],"false"); 
                localStorage.setItem(interest[2],"false");
                localStorage.setItem(interest[3],"false");
                break; 
            case 2 : 
             // set its value to true 
             localStorage.setItem(interest[2],"true");
                // and all the rest to false 
                localStorage.setItem(interest[0],"false"); 
                localStorage.setItem(interest[1],"false");
                localStorage.setItem(interest[3],"false"); 
                break; 
            case 3 : 
                 // set its value to true 
                 localStorage.setItem(interest[3],"true");
                // and all the rest to true - since it's all 
                localStorage.setItem(interest[1],"true"); 
                localStorage.setItem(interest[2],"true");
                localStorage.setItem(interest[0],"true");
                break ; 
        }
        


        // and finally go to next page 
        document.location.href = "welcome.html"; 
    }
    
}