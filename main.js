//Quetion 1
var sum = items.reduce((a, b) => a + b.price, 0)
var avg = sum / items.length
console.log(avg)
document.querySelector("#answer1").innerHTML = `The average price is ${avg.toFixed(2)}`

//Question 2
var between = ''
between += items
.filter(a => a.price > 14 && a.price < 18)
.map(one => {
    return one.title
}).join('\n')
console.log(between) 
document.querySelector("#answer2").innerHTML = `${between}`

//question 3
var name = ''
name += items
.filter(a => a.currency_code === "GBP")
.map(one => {
    return one.title
})

var price = ''
price += items
.filter(a => a.currency_code === "GBP")
.map(one => {
    return one.price
})

var both = name.concat(price)
console.log(both)
document.querySelector("#answer3").innerHTML = `${name} costs &pound${price}`

//question 4

var woodmat = ''
woodmat += items.filter(a => a.materials.includes('wood'))
.map(one => {
    return one.title
}).join('\n')

console.log(woodmat)
document.querySelector("#answer4").innerHTML = `${woodmat}`

//question 5

var eightmats = ''

eightmats += items.filter(a => a.materials.length >= 8)
.map(one => {
    let html = `${one.title} has ${one.materials.length} materials\n\n`
    one.materials.forEach(material => {
        html += material + '\n'
    })
    return html
}).join('\n')

console.log(eightmats)

document.querySelector("#answer5").innerHTML = `${eightmats}`

//question 6
var made = items.filter(one => {return one.who_made == "i_did"})

console.log(made.length)
document.querySelector("#answer6").innerHTML = `${made.length} were made by their sellers`