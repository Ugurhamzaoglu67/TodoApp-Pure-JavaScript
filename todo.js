
const form = document.querySelector('.formAdd')
const myul= document.querySelector('.myul')
const plus = document.querySelector('#plus')
const searchInput = document.querySelector('.search')


searchInput.addEventListener('keyup',(e)=> {
    
      const my_val = e.target.value.trim().toLowerCase()

      myFilter(my_val)
     
})


const myFilter = (my_val) => {
        
      //Eşleşenleri getir sadece , Burda Eşleşmeyenlere display:none yaptık
      Array.from(myul.children).filter((item) => {
            
            return !item.textContent.toLowerCase().includes(my_val)

      }).forEach((item) => {
            item.classList.add('filtered')
      })

      //Silinince liste tekrar ortaya çıksın
      Array.from(myul.children).filter((item) => {
            
            return item.textContent.toLowerCase().includes(my_val)

      }).forEach((item) => {
            item.classList.remove('filtered')
      })
}



//_________________________________ add new li _____________________________________
function addnewTodo(todo) {
      
      let newli =`
            <li class="list-group-item d-flex justify-content-between align-items-center">
                  <span>${todo}</span>
                  <i class="fas fa-trash-alt"></i>
                  <i class="fas fa-check-double"></i>
            </li>

      `

      myul.innerHTML += newli
}



//_________________________________ add form _____________________________________

form.addEventListener('submit', (e) => {
      e.preventDefault()

      const inputVal = form.children[0].children[0].value.trim()

      //const todo  = form.add.value.trim()

      if(inputVal.length){
               
            addnewTodo(inputVal)
            form.reset()
      }
   
})



//_________________________________ plus fantawesome click _______________________________

plus.addEventListener('click', (e) => {
      e.preventDefault()

      const inputVal = form.children[0].children[0].value.trim()

      //const todo  = form.add.value.trim()

      if(inputVal.length){
               
            addnewTodo(inputVal)
            form.reset()
      }
   
})



//_________________________________ ul click _______________________________
myul.addEventListener('click',(e)=> {
      console.log(e.target.classList[1])

      if(e.target.classList[1]=='fa-trash-alt'){
            e.target.parentElement.remove()
      }

      /*2.YOL 

      if( e.target.classList.contains('delete') ){
            e.target.parentElement.remove()
      }
      
      */ 

      /*
            (1) ul'a Tıklandığında eventi yakala
            (2)  tıklanan yerin classListe'sinde 'fa-trash-alt' var  sa
            (3) tıklanan yer -> parent elementi'ni -> SİL         
      */ 
})