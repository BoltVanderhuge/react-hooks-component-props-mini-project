import React from "react";

function Article({minutes, title, date =  "January 1, 1970", preview}) {
    let howLong = displayMinutes(minutes)
    console.log(minutes)
    return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview, howLong}</p>
    </article>
    );
}

function displayMinutes(minutes){
    let bento = "🍱"
    let coffee = "☕️"
    let min = parseInt(minutes)
    let emojiCountCoffee = Math.ceil((min)/5)
    let emojiCountBento = Math.ceil((min)/10)
    if (min >= 30){
        return (`${bento.repeat(emojiCountBento)}min read`)
    } else{
        return(
            `${coffee.repeat(emojiCountCoffee)}${min}min read`
        )
    }
};
  
  export default Article;