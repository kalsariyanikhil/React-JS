//  task-1
// {
//     let i;
//     for(i = 10 ; i >= 1 ; i-- )
// {
//     document.write(i);
// }
// }

// task-2

// {
//     let x=1;
//     let y=1;

//     while(x<=10){
//         y=y+x;
//         document.write(x);
//         document.write("<br>");
//         x++;
//     }
//     document.write(" <b> total is = \t");
//     document.write(y);
// }


// task-3

// {
//   link:  for (let i = 1; i <= 10; i++)
//   {
//     document.write("<br>");
//         for (let j = 1; j <= 10; j++)
//         {
//             if(i==11)
//             {
//                 break link;
//             }   
//     document.write(i + " * " + j +" = " + i * j );
//     document.write("<br>");
//   }
//  }
// }


// task- 6 
 
// { 
//     let n=6, i=1, fact=1 
 
//     while(i<=n) 
//     { 
//         fact = fact * i 
//         i++ 
//     } 
//     document.write(fact); 
//     document.write("<br>") 
 
//     for(i=1;i<=n;i++) 
//     { 
//         fact=fact*i 
//     } 
//     document.write(fact); 
// }



    // task-8
     // {
    //   let base = 10;
    //   let exponent = 3;
    
    //   let result = 1;
    
    //   while (exponent > 0) {
    //     result *= base;
    //     exponent--;
    //   }
    //   document.write(result);
    // }



  //  task-9

  
// {
//     let i=1;
//     let j;

//   while(i<=5)
//   {
//     j=1;
//     while(j<=i)
//     {
//     document.write("*");
//     j++;
//   }
//     i++;
//     document.write("<br>");
//   }
// }

// task-10 
    
    // {
    //   let arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    //   let searchNumber = 35;
    
    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === searchNumber) {""
    //       document.write("Number found at index:", i);
    //       break;
    //     }
    //   }
    // }
    


    //  task-11 
    
    // {
    //   let i = 0;
    //   while (true) {
    //     if (i % 2 !== 0) {
    //       document.write("The first odd number is:" $ {i});
    //       break;
    //     }
    //     i++;
    //   }
    // }


    // task-14
    
    // {
    //     let i = 1;
    //     for (i=1; i <= 10; i++){
    //         if (i % 2 !== 0){
    //             continue;
    //         }
    //         document.write(i + "\t")
    //     }
    // }


    
    // task-17 
    
    // {
    //     let i = 0;
    //     let num = prompt("enter a number");
        
    //     do {
    //       i++;
    //       if (i % 5 === 0) {
    //         continue;
    //       }
    //       document.write(i + "\t");
    //     } while (i < num);
    // }