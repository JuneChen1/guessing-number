let answer = Math.floor(Math.random() * 100) + 1
let guess = 0
let count = 0

console.log(`正確數字為：${answer}`)
while (answer !== guess) {
    guess = Math.floor(Math.random() * 100) + 1
    count += 1
    if (answer > guess) {
        console.log(`第${count}回合，挑戰者猜${guess}，莊家回答：太小了`)
    } else if (answer < guess) {
        console.log(`第${count}回合，挑戰者猜${guess}，莊家回答：太大了`)
    } else {
        console.log(`第${count}回合，挑戰者猜${guess}，莊家回答：恭喜答對!`)
    }
}