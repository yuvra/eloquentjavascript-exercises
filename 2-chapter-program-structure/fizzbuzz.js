for (let i = 0; i < 100; i += 1) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}


/*



var number = prompt("Enter Number");

	if(number % 3 == 0 )
    {
      if(number % 3 ==0 && number % 5 == 0)
      {
        prompt("FizzBuzz");
      }
      else
      {
         prompt("Fizz");       
        
	   }
      
    }
	else if(number % 5 == 0)
    {
      prompt("Buzz")
    } 
*/
