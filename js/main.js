



//1-masala
//
//shartga tushunmadm

//2-masala


// function replaceFunc(str,str2){
//     for(let i = 0 ; i < str.length ; i++){
//       result = "";
      

          
               
//              result += str[i].replace(str[i],str2)
                
//           }

//           console.log(str + " o'zgardi " + result + " ga")
//         }
    



// let str = 'hello'

// let str2 = 'Najot ta\'lim' 

// replaceFunc(str,str2)


// 1.1 masala


// function searchNum (str){

//     num = "";


//     for(let  i = 0 ; i < str.length ; i++){
//         if(!isNaN(str[i])){
            
//             num += str[i] * 2;
//         }
        
//     }   
//     console.log(num);
// }


// let str = 'hello1234'

// searchNum(str)


//1.2 masala

// let str = 'hello world'

// console.log(str.substring(0,5))//birinchi so'z


//1.3 shartiga tushunmadm


//1.4 masala

// faqat kichik unli harf bo'lsa ishlaydi

// function sortArr(str){
//     let arr2 = ""
//     for(let i = 0 ; i < str.length ; i++){
//         if (
//           str[i] == 'i' ||
//           str[i] == 'a' ||
//           str[i] == 'u' ||
//           str[i] == 'o' ||
//           str[i] == 'l'
//         ) {
//             arr2 += str[i].replace(str[i],'$')
//         }else{
//             arr2 += str[i]
//         }
        
//     }
//             console.log(arr2);
    
// }


// let str = 'hello world'

// sortArr(str)


// 1.5 masala


// function countarr(str){

//     count = 0;

//     for(let i = str.length-1 ; i > 0 ; i--){
//         if(str[i] == " "){
//             count++
//         }
//     }
//     console.log(count+1 + " ta so'z bor");
    
// }

// let arr  = 'hello world'

// countarr(arr)

// 1.6 masala
// let str = '  ss  ss dd    ';
// result = str.trim();

// console.log(result);


// function arrfunc(str){

// var str2 = ""
//     let count = 0
//     for(let i = 0 ; i < str.length ; i++){
//         count++
//         if(count === 3){
//             count = 0
//             str2 += str[i]?.toUpperCase()
//         }else

        
//         str2 += str[i]
//     }
    
//     console.log(str2);
// }

// let str = 'helloworld'

// arrfunc(str)