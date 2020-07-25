const TypeWriter = function (textElement, words, wait = 3000){
	
    this.textElement = textElement;
	this.words = words;
	this.txt = '';
	this.wordIndex = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
	
}	


TypeWriter.prototype.type = function(){
    
    //current index of word
    const current = this.wordIndex % this.words.length; 
    const fulltext = this.words[current];
    
    if (this.isDeleting){
        this.txt = fulltext.substring(0, this.txt.length - 1);
    
    }
    else{
        this.txt = fulltext.substring(0, this.txt.length +1);  
        
    }
     
    this.textElement.innerHTML = `<span class = "txt"> ${this.txt} </span>`;
    
    let typeSpeed = 300;

    if(this.isDeleting) {
        typeSpeed /= 2;
       
       }
    

    if(!this.isDeleting && this.txt === fulltext){
        
        typeSpeed = this.wait;
        this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt === ''){
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
    }
    
    setTimeout(() => this.type(), typeSpeed);
    
}

//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);
	
function init(){
		const txtElement = document.querySelector('.txt-type');
		const words = JSON.parse(txtElement.getAttribute('data-words'));
        const wait = txtElement.getAttribute('data-wait');
        new TypeWriter(txtElement,words,wait);
        
}
