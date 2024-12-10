// 3 ТООНЫ ИХ
function tooni_ih( too1, too2, too3) {
    if(too1 > too2){
        if (too1 > too3) {
            console.log(too1 + ' ih too');
        } else {
            console.log(too3 + ' ih too');
        }
    } else {
        if(too2 > too3){
            console.log(too2 + ' ih too');
        } else {
            console.log(too3 + " ih too");
        }
    }
} tooni_ih(1, 3, 2);

// 4 ТООНЫ БАГА
function tooni_baga(too1, too2, too3, too4) {
    if(too1<too2){
        if(too1<too3){
            if(too1<too4){
                console.log( too1 + ' baga too');   
            }
        } 
    } 
    if(too2<too1){
        if(too2<too3){
            if(too2<too4){
                console.log( too2 + ' baga too');   
            }
        } 
    } 
    if(too3<too1){
        if(too3<too2){
            if(too3<too4){
                console.log( too3 + ' baga too');   
            }
        } 
    } 
    if(too4<too1){
        if(too4<too3){
            if(too4<too2){
                console.log( too4 + ' baga too');   
            }
        } 
    } 
} tooni_baga(10, 11, 22, 4);


// НИЙЛБЭР 80

function niilber_80(a, b, c, d) {
    let s = 0;
if(a > 80) s+=a;
if(b > 80) s+=b;
if(c > 80) s+=c;
if(d > 80) s+=d;
return s;
} console.log(niilber_80(85, 75, 96, 69));

// ҮРЖВЭР 5

function urjwer_5(a, b, c, d) {
    let s = 1;
    if(a < 5) s*=a;
    if(b < 5) s*=b;
    if(c < 5) s*=c;
    if(d < 5) s*=d;
return s;
} console.log(urjwer_5(3, 6, 2, 4));


// ТЭГШ ТООНУУДЫН НИЙЛБЭР

function tegsh_niilber(a, b, c, ) {
    let s = 0;
    if(a % 2 == 0) s+=a;
    if(b % 2 == 0) s+=b;
    if(c % 2 == 0) s+=c;
    return s;
} console.log(tegsh_niilber(10, 3, 5));


// СОНДГОЙ ТООНУУДЫН ҮРЖВЭР

function sondgoi_urjwer(a, b, c) {
    let s = 1;
    if(a % 2 == 1) s = s * a;
if(b % 2 == 1) s = s * b;
if(c % 2 == 1) s = s * c;
return s;
} console.log(sondgoi_urjwer(5, 2, 3));

// Тэнцүү 5

function tentsuu_5(a, b, c) {
    let s = 0;
    if(a == 5)  s = s + 1;
    if(b == 5)  s = s + 1;
    if(c == 5) s = s + 1;
    return s;
} console.log(tentsuu_5(2, 5, 5));

// 3 -т ХУВААГДАХ

function huwaah_3(a, b, c, d) {
    let s = 0;
    if(a % 3 == 0)  s = s + 1;
    if(b % 3 == 0)  s = s + 1;
    if(c % 3 == 0) s = s + 1;
    if(d % 3 == 0) s = s + 1;
    return s;
} console.log(huwaah_3(3, 12, 8, 9));



// 11 -т ХУВААГДАДГҮЙ ТООНУУДЫН НИЙЛБЭР

function huwaah_11(a, b, c, d) {
    let s = 0;
if(a % 11 !== 0)  s = s + a;
if(b % 11 !== 0) s = s + b;
if(c % 11 !== 0) s = s + c;
if(d % 11 !== 0) s = s + d;
return s;
} console.log(huwaah_11(7, 22, 13, 30));

// 10-с ИХ БОЛ YES ҮГҮЙ БОЛ NO

function ihbaga(a) {
    let s;
    if(a > 10 ) 
        s = "YES"
    else { 
        s = "NO" 
    }
    return s;
} console.log('10-с ИХ БОЛ YES ҮГҮЙ БОЛ NO = ' + ihbaga(11)); 


// 5-с БАГА БОЛ YES ҮГҮЙ БОЛ NO

function baga_5(a) {
    let s;
    if(a > 5 ) 
        s = "YES"
    else { 
        s = "NO" 
    }
    return s;
} console.log('5-с БАГА БОЛ YES ҮГҮЙ БОЛ NO = ' + baga_5(5)); 

// Тэгш ТООНУУД YES 

function tegsh_yes(a, b, c) {
    let s;
    if(a % 2 == 0) 
        s = "YES"
    else {
    s = "NO"
    }
    if(b % 2 == 0) 
        s = "YES"
    else {
        s = "NO"
    }
    if(c % 2 == 0)  s = "YES"
    else {
    s = "NO"
    }
    return s;
} console.log('Тэгш ТООНУУД = ' +  tegsh_yes(3, 4, 5));


// Сондгой ТООНУУД YES 

function sondgoi_yes(a, b, c) {
    let s;
    if(a % 2 !== 0) 
        s = "YES"
    else {
    s = "NO"
    }
    if(b % 2 !== 0) 
        s = "YES"
    else {
        s = "NO"
    }
    if(c % 2 !== 0)  s = "YES"
    else {
    s = "NO"
    }
    return s;
} console.log('Сондгой ТООНУУД YES = ' +  sondgoi_yes(3, 4, 5));


// Тоог эерэг, сөрөг, тэг байдлаар ангилах 

// function eyreg_surug_teg(a, b, c) {
//     let s;
//     let q;
//     let p;
//     if( a > 0 ){
//         s = a + " Эерэг тоо"
//     } else if( a < 0) {
//        q = a + " Сөрөг тоо"
//     } else {
//        p = a + " 0 тоо"
//     }
//     if( b > 0 ){
//        s = b + " Эерэг тоо"
//     } else if( b < 0) {
//          q = b + " Сөрөг тоо"
//     } else {
//         p = b + " 0 тоо"
//     }
//     if( c > 0 ){
//         s = c + " Эерэг тоо"
//     } else if( c < 0) {
//         q = c + " Сөрөг тоо"
//     } else {
//         p = c + " 0 тоо"
//     }
//     return s, q, p ;

// } console.log('Тоог эерэг, сөрөг, тэг байдлаар ангилах  = ' + eyreg_surug_teg(3, -4, 0));


function checkArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log("эерэг");
        } else if (arr[i] < 0) {
            console.log("сөрөг");
        } else {
            console.log("тэг");
        }
    }
};
let arr = [1, 4, -1, 0];
checkArray(arr);
 





// Нэг тоо нөгөө тоогоор хуваагддаг эсэхийг шалгах
function toog_toond(a, b) {
    let s;
    if(a % b == 0) 
       s = ( a + " нь " + b + ' -т хуваагддаг');
else {
    s = ( a + "нь" + b + ' хуваагддаггүй');
}
return s;
} console.log('Нэг тоо нөгөө тоогоор хуваагддаг эсэхийг шалгах = ' +  toog_toond(12, 4));


// Тоон оноог үсгийн дүн (A, B, C, D, F) болгон хувиргах дүнгийн тооцоолуур
function Dun(a) {
    let s;
    if( a <= 100 && a >= 90)
        s = " A авсан байна"
if(a <= 89 && a >= 80) 
    s = " B авсан байна"
if(a <= 79 && a >= 70) 
    s = " C авсан байна"
if(a <= 69 && a >= 60 ) 
   s = " D авсан байна"
if(a <= 59 && a >= 50) 
    s = " F авсан байна"
return s;
} console.log('Дүнгийн тооцоолуур = ' +  Dun(98));


/* Цельсийг Фаренгейтын температурт хувиргах 
ТОМЬЁО: Фаренгейт=(Цельс×9/5)+32 
*/
function celis_farengit(Celis) {
let s;
s = (Celis * 9/5) + 32;
return s;
} console.log("Фаренгейтын температурт бол " + celis_farengit(25));


// Өгөгдсөн жил нь өндөр жил эсэхийг шалгах

function Undur_jil(year) {
    let s;
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
       s = year + ' он бол өндөр жил юм'
    } else {
       s = year = " он бол өндөр жил биш юм"
    }
    return s;
} console.log(Undur_jil(2024));


// Насны ангилал тодорхойлогч (Хүүхэд, Өсвөр үе, Насанд хүрсэн, Ахимаг нас)
function Nasni_angilal(age) {
    let s; 
    if( age <= 14 && age >= 6 ) 
        s =  "Та бол хүүхэд"
if( age <= 17 && age >= 15 ) 
    s = "Та бол өсвөр үеийн хүүхэд"
if( age <= 49 && age >= 18 ) 
    s = "Та бол насанд хүрсэн иргэн."
if( age <= 100 && age >= 50 ) 
    s = "Та бол ахимаг настан."
return s;
} console.log(Nasni_angilal(37));


// Худалдан авсан дүнгийн дагуу янз бүрийн хөнгөлөлтийн хувь хэрэглэдэг хөнгөлөлтийн тооцоолуур
function hungulult(une) {
    let s; 
    if( une <= 99) 
        s = " Уучлаарай та хөнгөлөлт эдлэх боломжгүй байна. "
if( une <= 300 && une >= 100 ) 
   s = " 30% -ын хөнгөлөлттэй. "
if( une <= 1000 && une >= 500 ) 
    s  = " 50% -ын хөнгөлөлттэй. "
return s;
} console.log(hungulult(566));


// Өгөгдсөн гурван урт нь гурвалжин үүсгэх боломжтой эсэхийг шалгах
function gurwaljin(a, b, c) {
    let s;
    if( a + b > c && a + c > b && b + c > a) 
        s = " Гурвалжин үүсэх боломжтой "
    else {
        s = " Гурвалжин үүсэх боломжгүй "
    }
    return s;
} console.log(gurwaljin(5, 5, 8));


// Биеийн жингийн индекс тооцоолуур (Жин бага, Хэвийн, Илүү жинтэй, Тарган)

function indexs(jin) {
    for(let i = 0; i < jin.length; i++){
        if(jin[i] <= 45){
            console.log( " Жин бага"); 
        }
        else if( jin[i] <= 80 && jin >= 46 ){
             console.log(" Хэвийн жинтэй ");
        } else{
            console.log(" Илүүдэл жинтэй");
        }
    }
}
let jin = 46; 
indexs(jin);

// Тэмдэгт эгшиг эсвэл гийгүүлэгч эсэхийг шалгах
/* includes = string dotor todorhoi utga baigaa esehiig shalgadag boolen 
*/
// function Temdegt(char) {
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//         if (vowels.includes(char)) {
//             console.log(char + " нь эгшиг үсэг.");
//         } else {
//             console.log(char + " нь гийгүүлэгч үсэг.");
//         }  
//         return vowels;
// } console.log(Temdegt(e));


// Энгийн хувьтай зээлийн тооцоолуур
/* Энгийн хүү тооцох томьёо:
Хүү = Зээлийн дүн × Хүүгийн хувь × Хугацаа
Нийт төлбөр = Зээлийн дүн + Хүү */
function Zeeliin_tootsoo(zeel) {
    let s;
    let huwi = 12; 
let hugatsaa = 2; 
let huu = zeel * (huwi/100) * hugatsaa;
let tulbur = zeel + huu;
if( zeel >= 100000 && zeel <= 50000000) {
    s = ( "Хүү нь: " + huu + " төгрөг")
    s = ( "Нийт төлбөр: " + tulbur + " төгрөг")
}
return s;
} console.log(Zeeliin_tootsoo(1000000));


// Тэнцсэн унасан
function Tenun(too) {
    if(too > 3) console.log("Тэнцсэн байна")
    else { console.log("Тэнцээгүй байна")
    }
} console.log(Tenun(4));


// 5-c onts ruu
function onts_5(too) {
    let s;
if(too <= 5 && too >= 5 )
    s = "Онц"
if(too <= 4 && too >= 4)
    s = "Сайн"
if(too <= 3 && too >= 3)
    s = "Дунд"
if(too <= 2 && too >= 2)
    s = "Муу"
return s;
} console.log(onts_5(5));

// Garag
// function Garag(n) {

//     for(let i = 1; i< n.length; i++){
//         if(n[i] == 1){
//             s = 'Monday'
//         }else if(n[i] == 2){
//             s = 'Thuesday'
//         }else if(n[i] == 3){
//             s = 'Wednesday'
//         }else if(n[i] == 4){
//            s = 'Thursday'
//         }else if(n[i] == 5){
//            s = 'Friday'
//         }else if(n[i] == 6){
//             s = 'Saturday'
//         }else if(n[i] == 7){
//            s = 'Sunday'
//         }else {
//            s = ' udur baihgvi'
//         }
//     }
//  }; 
//  Garag(7);


function Garag(n) {
if(n == 1)console.log( 'Monday');
if(n == 2)console.log( 'Thuesday');
if(n == 3)console.log( 'Wednesday');
if(n == 4)console.log( 'Thursday');
if(n == 5)console.log( 'Friday');
if(n == 6)console.log( 'Saturday');
if(n == 7)console.log( 'Sunday');
} console.log(Garag(4))


// Uliral
function Uliral(u) {
    if(u == 11 || u == 12 || u == 1 )console.log( 'Winter');
if(u == 2 || u == 3 || u == 4)console.log( 'Spring');
if(u == 5 || u == 6 || u == 7)console.log( 'Summer');
if(u == 8 || u == 9 || u == 10)console.log( 'Autumn');
} console.log(Uliral(5));



// Илэрхийлэл
function ilerhiilel(a, b, c) {
    let s;
    s = a * b - c;
    return s;
} console.log( 'Илэрхийлэл хариу' + ilerhiilel(2, 3, 4));
 

// IOI 3 UDAA

for(let i = 0; i < 3; i++ ){
    console.log("IOI")
}
// IOI n udaa
// let n = 8;
// for(let i = 0; i <= n ; i++ ){
//     console.log("IOI");
// }
// Ehnii n toonii niilber
// let n = 5;
// let niilber = 0;
// for(i = 1; i <= n; i++ ){
//     niilber = niilber + i
// } console.log(niilber)

// n!
// let n = 5;
// let urjwer = 1; 
// for(i = 1; i <= n; i++){
//     urjwer = urjwer * i
// } console.log(urjwer)

//  100 -g n udaa nem
// let n = 6;
// let niilber = 0;
// for(i = 1; i <= n; i++ ){
//     niilber = niilber + 100
// } console.log(niilber)

// a toog n udaa nem
// let n = 6;
// let niilber = 0;
// for(i = 1; i <= n; i++ ){
//     niilber = niilber + 50
// } console.log(niilber)

// 2-in n zereg
// let n = 5;
// let niilber = 1;
// for(i = 1; i <= n; i++ ){
//     niilber = niilber * 2
// } console.log(niilber)

// a tooni n zereg
// let n = 4;
// let niilber = 1;
// for(i = 1; i <= n; i++ ){
//     niilber = niilber * 3
// } console.log(niilber)

// Tooni hurd
// let n = 3;
// let hurd = 1;
// for(i = 1; i <= 10; i++){
//     hurd = n * i;
//     console.log( n + " * " + i + ' = ' + hurd)
// }

// Toonii zergiin hurd
let n = 5;
let j = 3
let hurd = 1;
for(i = 1; i <= n; i++){
    hurd = hurd * j;
    console.log( j + " * " + i + ' = ' + hurd )
}

// //  array элементрүү хандах
// let studenAges = [10, 20, 30, 40];
// console.log(studenAges[0]);
// console.log(studenAges[studenAges.length -1]);
 
 
// array ямар нэг элементийн утгыг өөрчлөх
// let tsuivan = [ 'mah', 'guril', 'tums', 'luuwan', ' baitsai'];
// tsuivan[tsuivan.length -1 ] = 'onion';
// tsuivan[1] = 'onion';
// console.log(tsuivan);
 
// array & loop жишээ
// let userBalance = [1000, 2000, 2500, 4000000, 13054, 323425];
// let i = 0;
// let sum = 0;
// while( i < userBalance.length){
//     userBalance[i] *= 1.15;
//     i++;
// } console.log(userBalance);
//  Олон хэмжээст array
/* Array утга ямар ч төрөл байж болох ба бид Array дотор array бас хийж болно.
*/
//  let x=[[1, 2, 3], [4, 5, 6] [7, 8, 9]]
//  for(i = 0; i < x.length; i++){
//     for(let j = 0; j < x[0].length; j++){
//         console.log(x[i]+[j]);
//     }
//  }
const d = new Date();
year = d.getFullYear();
console.log(year);
 












    

















