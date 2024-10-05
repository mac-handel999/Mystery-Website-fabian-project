let  name = document.querySelector('#name');
const btn = document.querySelector('.submit');
const  nameForm = document.querySelector('.name-form');

const anime1 = document.querySelector('.container')


btn.addEventListener('click', (event) => {
   event.preventDefault(); // Prevents form submission and page reload
   
   const input = name.value;
   
  if (input === "Sorochi" || 
  input === "Glory" || 
  input === "Maria Assumter" ||
  input === "Chisaokwu" 
 
  ) {
     anime1.style.display = "block"; // Display the container
    
     alert(`I Love ❤ You So much ${input} `);
     
     console.log(anime1);
     console.log(input);
     
     nameForm.style.display = "inline-block"; 
     
   } else if (input === "") {
     
    alert('Pls Enter Your Name');
    
  } else {
    
    alert(`So Sorry ${input}, This Software Is Not For You`);
  }
});