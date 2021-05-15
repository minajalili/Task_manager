import axios from 'axios'

export const TaskAction = () => async(dispatch)=>{
    try{
        
        dispatch({type:'TASK_LIST_REQUEST'})

        const { data }= await axios.get('https://6099176399011f00171401cb.mockapi.io/task')

        dispatch({
            type:'TASK_LIST_SUCCESS',
            payload: data,        
        })
    }catch(error){
        console.log(error);

    }
    
}
export const TaskListUpdater = (tasks)=> async(dispatch)=>{
    dispatch({
        type:'TASK_LIST_DONE',
        payload: tasks,        
    })
}