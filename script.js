// // console.log('hi')
// // // alert('hello')
// // // variables
// // var a=9;

// // var a=10;
// // console.log(a);  //  block 1

// // {
// //     var a=20;
// //     console.log(a);                // block 2
// // }
// // let b=23;
// // console.log(b);
// // {
// //     let b=34;
// //     console.log(b);
// // }
// // b=44;
// // console.log(b);

// // // const
// //  const t=30;
// //  console.log(t);
// //  {
// //     const t=90;
// //     console.log(t);
// //  }
// //  console.log(t);

// // //  data types
// // var nam='hi there, welcome to vimala college .its our hostel day, all are welcome . ';
// // console.log(typeof(nam));
// // // numbers
// // var count=10;
// // console.log(typeof(count));
// // // Boolean
// // var bb=true;
// // console.log(typeof(bb));

// // var gtype;
// // console.log(typeof(gtype));
// // // arrays
// // let arr=['red','blue','white',10]
// // console.log(arr[3]);
// // console.log(arr.length);
// //  arr.push('violet');
// // console.log(arr);
// // arr.pop();
// // console.log(arr);

// // // javascript objects
// // let car={
// // mileage:100,
// // model:'i10',
// // color:'red'
// // }
// // console.log(car);
// // console.log(car.model);
// // console.log(car.mileage);

// // let person=new Object();
// // person.gender='male';
// // person.height='180';
// // console.log(person);

// // var A=6, C=4;
// // console.log(A+C);
 
// // var a=6 , b=4;
// // console.log(a-b);


// var a=10;
// var b=++a;
// console.log(b);
// console.log(a);

// // var a=10;
// // var b=a++;
// // console.log(b);
// // console.log(a);

// // if else
// if (a!=b) {
//   console.log('a is equal to b')   
// } else {
//     console.log('a is not equal to b')
// }

// if (a==b && a==10) {
//     console.log('a is equal to b')   
//   } else {
//       console.log('a is not equal to b and a is not equal to 10')
//   }

// var c=('10');
// var d=10;
//   if (c==d) {
//     console.log('c equal to d')
//   } else {
//     console.log('c not equal to d')
//   }


//  var C=16
//  var D=6
//   if (C==D && C==20) {
//     console.log('c is greater than d')
//   } else {
//     console.log('c is smaller than d')
//   }

//   var C=20
//   var D=20
//    if (C==D && C==20) {
//      console.log('c is greater than d')
//    } else {
//      console.log('c is smaller than d')
//    }

  //  let add=6;
  //  add += 3;
  //  console.log(add);

//    let s=6;
//    s-= 3;
//    console.log(s);
   
//   let a=10;
//   let b=34;
//   let c=70;
//   let d=12;
//   var exp=a+b*(c-d)-7;
//   console.log(exp);
   
// functions

function display(name){
  console.log('Hi '+name+ ' welcome to JS');
}
display ('gopika');   // function call

function addition(t,s){
  var result=t+s;
  return result;
}
 var result=addition (10,30);
 console.log('the sum is '+result);

function sub(t,s){
  var result=t-s;
  return result;
}
 var result=sub (30,10);
 console.log('the difference is '+result);


 function mul(p,q){
  var result=p*q;
  return result;
}
 var result=mul (30,10);
 console.log('the product is '+result);
 

