
import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

const List = ({Todolist,handle_check_icon_click,handle_cross_icon_click,handle_delete_icon_click}) => {
    console.log("list ko milne wala prop hai",Todolist);
    return (
    

    // <LI KEY = {}> dene ka maqsad bs yhi hai ke react ko pata rahe ki abb props mein kya unique elemnt add hua hai taki iska dom updation smooth and efficient ho
    // to key maddat karega har eleemnt ko uniquely identify karne mein
    // isi wajah se hamne har elemnt ko unique id dene ke liye hi uuid package bhi install kiya tha
    <ul className='space-y-6'>
        {Todolist.map((elem) => (
        <li key= {elem.id}>  
          <span className='bg-yellow-200 px-6 py-1 text-2xl h-3'>{elem.item}</span>
          <span className={`${elem.done ? 'bg-red-200 text-2xl py-1 px-2' : 'bg-yellow-200 text-2xl py-1 px-2'}`}>
            {elem.done ? <CloseIcon onClick = {()=> handle_cross_icon_click(elem.id)} /> : <DoneIcon onClick = {()=> handle_check_icon_click(elem.id)} />}
            <DeleteIcon  onClick = {()=>{handle_delete_icon_click(elem.id)}}/>
          </span>
        </li>
      ))}
    </ul> 
    )
}

export default List


