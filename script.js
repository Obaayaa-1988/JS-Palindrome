const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", logicPalindrome);

function logicPalindrome(){
    const word = document.querySelector(".input-text").value;
    //finding the length of the word typed into the input field
    let len = word.length;

    //picking the first two letters of the word typed into the input field

    let startWord = word.substring(0, Math.floor(len / 2)).toLowerCase();
    // alert(startWord);

    let endWord = word.substring(len - Math.floor(len / 2)).toLowerCase();
    //this is for reversing the last two letters to it looks the same as the first two letters(startword) 
    let flipEnd = [...endWord].reverse().join("")

    //comparing the startword to flipEnd to check if they are the same

    if(startWord == flipEnd){
        result.innerHTML = `${word.toUpperCase()} is a Palindrome`
    }else{
        result.innerHTML = `${word.toUpperCase()} is not a Palindrome`

    }


}

// alert("hello")