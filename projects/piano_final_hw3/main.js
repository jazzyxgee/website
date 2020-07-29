function playPlayerPiano(){
    
    
    function getInput(){
        
        notes_raw = document.getElementById("text_area").value.split(/\r?\n/);//array from textbox
        document.getElementById("shown_code").innerHTML = notes_raw;//display text above text_area
                
    }
    getInput();
    
    var notes_parsed = []; //where parsed notes from text area will go.
    function parseInput(){
        
        k = 0;
        
        while(k < notes_raw.length){
            
            n = 0;
            
            while(n <notes_raw[k].length){
                
                tmp = notes_raw[k][n];
                
                if(tmp == 'A'){
                    notes_parsed.push('A');
                }
                else if(tmp == 'B'){
                    notes_parsed.push('B');
                }               
                else if(tmp == 'C'){
                    notes_parsed.push('C');
                }                   
                else if(tmp == 'D'){
                    notes_parsed.push('D');
                }                         
                
                n++; 
                
            }
            
            k++;
          
        }
          
    }
    parseInput(); //parsing completed 
    console.log(notes_parsed);
    
    
    var musicBox = [];
    function storeMusic(){
        
        i = 0;
        
        while(i < notes_parsed.length){
            
            if (notes_parsed[i] == 'A'){
                
                musicBox.push(new Audio('sounds/a.mp3')); 
            }
            else if (notes_parsed[i] == 'B'){
                
                musicBox.push(new Audio('sounds/b.mp3')); 
            }
            else if (notes_parsed[i] == 'C'){
                
                musicBox.push(new Audio('sounds/c.mp3')); 
            }
            else if (notes_parsed[i] == 'D'){
                
                musicBox.push(new Audio('sounds/d.mp3')); 
            }
            
            i++;    
        }
    

    }
    storeMusic();
    console.log(musicBox); 
    
    
    j = 0;
    function playMusic(){
                  
        if(j == musicBox.length){
            return;
        }  
        musicBox[j].addEventListener('ended', playMusic);
        musicBox[j].play();
        j++;
        
    }
    playMusic();

    function compileCode(){
        
        var htmlTEMPLATE = "<!doctype html>"
        htmlTEMPLATE = htmlTEMPLATE + "<html><head><\/head ><body>"
        htmlTEMPLATE = htmlTEMPLATE + "<script>@@@PLAY_CODE<\/script>"
        htmlTEMPLATE = htmlTEMPLATE + "<\/body ><\/html>"

        code_output = " ";
    
        for(f = 0; f < musicBox.length; f++){
            
            if(notes_parsed[f] == 'A'){
                
                code_output = code_output + " if (notes_parsed[" + f + "] == A"
                code_output = code_output + "{ musicBox.push(new Audio('sounds/a.mp3')); }"
            }
            else if(notes_parsed[f] == 'B'){
                
                code_output = code_output + " if (notes_parsed[" + f + "] == B"
                code_output = code_output + "{ musicBox.push(new Audio('sounds/b.mp3')); }"
            }
            else if(notes_parsed[f] == 'C'){
                
                code_output = code_output + " if (notes_parsed[" + f + "] == C"
                code_output = code_output + "{ musicBox.push(new Audio('sounds/c.mp3')); }"
            }
            else if(notes_parsed[f] == 'D'){
                
                code_output = code_output + " if (notes_parsed[" + f + "] == D"
                code_output = code_output + "{ musicBox.push(new Audio('sounds/d.mp3')); }"
            }
            
        }    
        document.getElementById("compiled_code").innerText = htmlTEMPLATE.replace("@@@PLAY_CODE", code_output);
        
        
        
    }
    compileCode();

}

playPlayerPiano();
