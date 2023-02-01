// Задание №1

let sumNamOne = +prompt("Введите первое значение")

let sumNamTwo = +prompt("Введите второе значение ")

sum = 0



while (sumNamOne < sumNamTwo ){
    sum = sum + sumNamOne
    sumNamOne++}
  

while (sumNamOne > sumNamTwo){
    sum = sum + sumNamTwo
    sumNamTwo++
}


alert(sum);


// задание №2




let a = +prompt("Введите первое значение"); 
let b = +prompt("Введите второе значние ");  
let ab;
while (a!=b) {
  if (a>b) {
    a = a -b;
  }
  else {
    b = b - a;
  }
}
ab = a;
alert(ab);


// задание №3

let NamTree = +prompt("Введите значение ")

for ( i = 0 ; i <= NamTree; i++) {
   if( NamTree % i == 0)
   console.log(i)
 
}
alert("Полный список выведен в консоль")  

// Задание №4

let NamFoure = prompt("Введите цифру")

for ( i = 0; i < NamFoure.length; i++) {
   console.log(NamFoure.length)
    
  

    
}
alert(`Количество введенных цифр:  ${NamFoure.length}`)

// Задание №5







// Задание №6

do{

let NamSixOne = +prompt("Введите значение №1")

let NamSixTwo = prompt("Введите знак")

let NamSixTree = +prompt("Введите значение №2")

switch (NamSixTwo) {
    case '+':
        result = NamSixOne + NamSixTree
        break;
        case '-':
            result = NamSixOne - NamSixTree
            break;
            case '*':
                result = NamSixOne * NamSixTree
                break;
                case '/': 
                result = NamSixOne / NamSixTree
                break;
                case '%':
                    result = NamSixOne % NamSixTree
                    break;

                  
}

} while(confirm(`Ответ на ваш запрос:  ${result} ` ))
    




// Задание №7

let nunSeven = confirm("Не сделал")

// let NumSeven = prompt("Введите число")

// let NumSeven_move = prompt("Сдвинуть число")














 
//  задание №8



let numEight = confirm("Не сделал")

// let numEight = confirm("увидеть след дату?")


// do{ 

//   switch(numEight){
//     case 1 :
//       x = confirm("Понедельник")
//       break
//       case 2 : 
//       x = confirm("Вторник ")
//       break
      
//   }
 
// } while("")











// Задание №9

let  namberNine_two = 2

let zero_two = 0
for ( const_two = 0; const_two <= 10; const_two++) {

    two = namberNine_two * const_two
  
    console.log(`Все значения для 2 * ${zero_two++} =   ${two}` );
}

let  namberNine_tree = 3
let zero_tree = 0

for ( const_tree = 0; const_tree <= 10; const_tree++) {

    tree = namberNine_tree * const_tree
  
    console.log(`Все значения для 3 * ${zero_tree++} =   ${tree}` );
}

let  namberNine_fore = 4
let zero_fore = 0

for ( const_fore = 0; const_fore <= 10; const_fore++) {

    fore = namberNine_fore* const_fore
  
    console.log(`Все значения для 4 * ${zero_fore++} =   ${fore}` );
}

let  namberNine_five = 5
let zero_five = 0

for ( const_five = 0; const_five <= 10; const_five++) {

    five = namberNine_five* const_five
  
    console.log(`Все значения для 5 * ${zero_five++} =   ${five}` );
}


let  namberNine_six = 6
let zero_six = 0

for ( const_six = 0; const_six <= 10; const_six++) {

    six = namberNine_six * const_six
  
    console.log(`Все значения для 6 * ${zero_six++} =   ${six}` );
}


let  namberNine_seven = 7
let zero_seven = 0

for ( const_seven = 0; const_seven <= 10; const_seven++) {

    seven = namberNine_seven * const_seven
  
    console.log(`Все значения для 7 * ${zero_seven++} =   ${seven}` );
}



let  namberNine_eight = 8
let zero_eight = 0

for ( const_eight = 0; const_eight <= 10; const_eight++) {

    eight = namberNine_eight * const_eight
  
    console.log(`Все значения для 8 * ${zero_eight++} =   ${eight}` );
}




let  namberNine_nine = 9
let zero_nine = 0

for ( const_nine = 0; const_nine <= 10; const_nine++) {

    nine = namberNine_nine * const_nine
  
    console.log(`Все значения для 9 * ${zero_nine++} =   ${nine}` );
}



// задагние №10

let numTen = confirm("Не сделал ")



