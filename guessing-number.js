const answer = Math.floor(Math.random() * 100) + 1
let guessMax = 100
let guessMin = 1
let guess = 0
let count = 0

console.log(`正確數字為：${answer}`)
while (answer !== guess) {
    guess = Math.floor(Math.random() * (guessMax - guessMin + 1)) + guessMin
    count += 1
    if (answer > guess) {
        guessMin = guess + 1
        console.log(`第${count}回合，挑戰者猜${guess}，莊家回答：太小了`)
    } else if (answer < guess) {
        guessMax = guess - 1
        console.log(`第${count}回合，挑戰者猜${guess}，莊家回答：太大了`)
    }
}
console.log(`第${count}回合，挑戰者猜${guess}，莊家回答：恭喜答對!`)