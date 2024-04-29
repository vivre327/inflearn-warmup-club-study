//var 중복선언O, 재할당O (사용X)
// var greeting = 'hello';
// console.log(greeting);

// var greeting = 'hi';
// console.log(greeting);

// var greeting = 'bye';
// console.log(greeting);

//let 중복선언X, 재할당O
// let greeting = 'hello';
// console.log(greeting);

// let greeting = 'hi'; 재할당 불가
// console.log(greeting);

// greeting = 'hi';
// console.log(greeting);

// //const 중복선언X, 재할당X
// const greeting = 'hello';
// console.log(greeting);

// greeting = 'hi'; 재선언 불가
// console.log(greeting);

//유효한 참조 범위
//var => 함수 레벨 스코프
// function func(){
//     if(true){
//         var a = 'a';
//         console.log(a);
//     }
//     console.log(a);
// }
// func();

//let, const => block 레벨 스코프
