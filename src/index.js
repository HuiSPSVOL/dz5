//Вам необхідно написати функцію reverseString(str),
// яка приймає на вхід рядок і повертає його у зворотному порядку.
function reverseString(str){
    let reversed = ""
    for(let i=str.length-1;i >= 0;i--){
        reversed+=str[i]
    }
    return reversed
}
console.log (reverseString('omigo'))

