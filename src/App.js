import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component{
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"
      })

      console.log("vowelsArray:", vowelsArray)

      // your code here!

      //function created to look for "q" within currentWord
      let lookForQ = currentWord.split("").filter(q => { 
        return q === "q" 
      })
      // console.log("q", lookForQ)

      //function created to look for "y" within currentWord
      let lookForY = currentWord.split("").filter(y => { 
        return y === "y" 
      })
      console.log("y", lookForY)

      //declared a variable to call on the first vowel "string" in the vowelsArra
      let vowelsIndex = vowelsArray[0]

      //to verifty the correct vowel is being called
      console.log("vowelsIndex", vowelsIndex)  
   
      //declare a variable to identify the first characther in the currentWord "string" array to call upon within conditionals
      let firstChar = currentWord.charAt (0);  
      

      //looks for no vowels OR vowel at first character value OR "y" is last character, keep currentWord in tack and add "way"
      if (!vowelsArray[0] || vowelsArray.indexOf(firstChar) >= 0 || lookForY === currentWord.length -1){
        return currentWord + "way"
        //looks for "q" in the currentWord and "u". if both "qu" exist together then splice firstWord pass "u"
        } else if (lookForQ + vowelsArray[0] === "qu") {
          vowelsIndex = currentWord.indexOf(vowelsIndex);
          let firstWord = currentWord.slice(vowelsIndex + 1);
          console.log("firstWord", firstWord)
          let secondWord = currentWord.slice(0, vowelsIndex + 1);
          console.log("secondWord", secondWord)
          return firstWord + secondWord + "ay"

        } else if (currentWord.charAt(1) === "y") {
          //vowelsIndex = currentWord.indexOf(vowelsIndex);
          let firstWord = currentWord.slice(1);
          console.log("firstWord", firstWord)
          let secondWord = currentWord.slice(0, 1);
          console.log("secondWord", secondWord)
          return firstWord + secondWord + "ay"

          } else if (vowelsArray[0] || lookForY[0]) {
            console.log("Index of Y",lookForY.indexOf("y"))
            vowelsIndex = currentWord.indexOf(vowelsIndex);
            let firstWord = currentWord.slice(vowelsIndex);
            console.log("firstWord", firstWord)
            let secondWord = currentWord.slice(0, vowelsIndex);
            console.log("secondWord", secondWord)
            return firstWord + secondWord + "ay"
  }


      
      
      // if (vowels.includes(currentWord[0])) {
      //   return currentWord + "way"

      
      // } else {
      //   return currentWord.shift + "way"
      // }
      // console.log(vowelsIndex("bobby"))

      //const pigLatin = (userInput) => {

     // }


      // define the first [index] of the vowel
      // define a function that takes input of a string

      // conditionals 
      
      //input - else if first index string is "y" && second index is a vowel rtn str - "y" + move "y"  to end of str + "ay"
      //ex: yummy = ummyyay / yvette = yvetteway

      // first input - if 1st letter is vowel return str + "way"
      // ex: ask = askway

      // second input - else if starts with "qu" rtn str + move "qu" to end of str + "ay"
      //ex: queen = eenquay

      //third input - else if start with "sq" rtn str + "u" to end of str + "ay"
      //ex: squeak = eaksquay

      //fourth input - if index of first vowel !== 0 rtn all indexes before the vowel + "ay" to end of str
      //ex: chair = airchay / dog = ogday


      // Remember: console.log is your friend :)


      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord
    })
  

    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPig}
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Pair-programmed by Ross Brantley & Kevin Silver</footer>
      </>
    )
  }
}

export default App
