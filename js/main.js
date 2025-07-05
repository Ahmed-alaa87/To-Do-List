let todo=document.getElementById('todo');
let list=JSON.parse(localStorage.getItem('list'))||[];

function add(){
    let to=todo.value;
    if (to =='') {
        alert("please enter")  
    }
    else{
    list.push(to);
    localStorage.setItem('list',JSON.stringify(list));
    clear();
    display();
}
}
function clear(){
    todo.value='';
}
function display(){
    let show='';
    for(let i=0;i<list.length;i++){
        show+= 
        `
        <tr>
        <td>
            <input type="checkbox" id="check-${i}" onclick="done(${i})">

        </td>
       <td><h2 id="h2-${i}" class='list'>${list[i]}</h2></td>
        <td><button class="btn btn-outline-danger" onclick="del(${i})">delete</button></td>
    </tr>
        
        `
    }
    document.getElementById('list').innerHTML=show;
}
function del(index){
    list.splice(index,1)
    localStorage.setItem('list',JSON.stringify(list));
    display();

}
function done(index){
    let checkbox=document.getElementById(`check-${index}`);
    let h2=document.getElementById(`h2-${index}`);
    if(checkbox .checked){
        h2.innerHTML="done";
    }else{
        h2.innerHTML=list[index];
    }
    
}display()