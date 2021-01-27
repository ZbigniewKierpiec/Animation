let burger=document.querySelector('.burger');
let list=document.querySelector('.list');
let faBars=document.querySelector('.fa-bars');
let faTimes=document.querySelector('.fa-times')
burger.addEventListener('click',()=>{
    let li=document.querySelectorAll('li');
    
          li.forEach((list,index)=>{
              if(list.style.animation){
                  list.style.animation=''
              }else{
                  list.style.animation=`zee 0.5s ease forwards ${index/6+1}s`
              }
          })


 
list.classList.toggle('listActive')

if(list.classList.contains('listActive')){
    faBars.classList.add('hiden');
    faTimes.classList.add('acive');
}else{

    faBars.classList.remove('hiden');
    faTimes.classList.remove('acive');

}
})