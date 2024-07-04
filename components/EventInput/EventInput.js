'use client'
import { use, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import List from "../List/List";

const EventInput = () => {
   
    const[event_input,event_changer] = useState("");
    const[todo_list,todo_list_changer] = useState([]);
    
    
    
    
    const event_setter = (e) => {
        event_changer(e.target.value);
    }
    
    const todo_setter = () =>{
        const to_do_item = {
            id: uuidv4(),
            item: event_input,
            done: false,
        }
        if(event_input!=""){
            todo_list_changer([...todo_list,to_do_item]);
        }
        
        event_changer("");
        // console.log(event_input)
    }

    const handle_check_icon_click = (item_id)=>{
        const new_to_do_list = todo_list.map((elem)=>{
            if(elem.id === item_id){
                return {...elem,done:true};
            }
            return elem;
        })
        todo_list_changer(new_to_do_list);
    }

    const handle_cross_icon_click = (item_id)=>{
        const new_to_do_list = todo_list.map((elem)=>{
            if(elem.id === item_id){
                return {...elem,done:false};
            }
            return elem;
        })
        todo_list_changer(new_to_do_list);
    }

    const handle_delete_icon_click = (item_id) =>{
        const new_to_do_list = todo_list.filter((elem)=>{
            if(elem.id !== item_id){
                return true;
            }
            else{
                false;
            }
        })
        todo_list_changer(new_to_do_list);
    }


    const clear_all_click_handler = () => {
        todo_list_changer([]);
    }

    
    
    console.log(todo_list)


return (
    <div className='h-screen w-screen bg-yellow-50 flex flex-col'> 
        <div className='flex items-center justify-center bg-yellow-50 '>
            <div className="flex  items-center">
                <input type="text" placeholder='add your event here'  className='bg-green-300 h-12 px-8 my-10 font-semibold' value={event_input} onChange={event_setter}/>
                <button className='bg-green-300 h-12 w-8 px-8 text-2xl font-extralight flex items-center justify-center hover:bg-blue-500'onClick={todo_setter}>+</button>
            </div>
            <div className="">
                 <button className="bg-blue-500 mx-10 h-12 font-light px-4 text-18px hover:bg-red-400" onClick={clear_all_click_handler}>Clear All</button>
            </div>
        </div>
        <div className="flex  justify-center  py-8">
            {todo_list.length>0   &&   <List Todolist = {todo_list}  handle_check_icon_click = {handle_check_icon_click} handle_cross_icon_click={handle_cross_icon_click} handle_delete_icon_click = {handle_delete_icon_click} />}
        </div>
    </div>
  )
}

export default EventInput