import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {
    
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [tasks, setTasks] = useState([])
    
    const submitHandler = (e) => {
        e.preventDefault()
        const copyTasks = [...tasks]
        copyTasks.push({title, details})
        setTasks(copyTasks)
        setTitle('')
        setDetails('')
    }

    const deleteNote = (index) => {
        const copyTasks = [...tasks]
        copyTasks.splice(index, 1)
        setTasks(copyTasks)
    }

    const editNote = (index) => {
        const copyTasks = [...tasks]
        const taskToEdit = copyTasks.splice(index, 1)[0]
        setTitle(taskToEdit.title)
        setDetails(taskToEdit.details)
        setTasks(copyTasks)
    }
    
    return (
        <div className='h-screen lg:flex bg-black text-white'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }} className='flex gap-4 lg:w-1/2 p-10 flex-col items-start'>
                <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>
            <input
                type="text"
                placeholder='Enter Notes Heading'
                className='px-5 w-full font-medium py-2 border-2 outline-none rounded '
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value)
                }}
            />
            
            <textarea
                type="text"
                className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded '
                placeholder='Write Details here'
                value={details}
                onChange={(e) => {
                    setDetails(e.target.value)
                }}
            />

            <button className='bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded'>
                Add Note
            </button>
        </form>
        <div className='lg:w-1/2 lg:border-l-2  p-10'>
            <h1 className='text-4xl font-bold'>Recent Notes</h1>
            <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
                {tasks.map(function (elem, idx) {
                    return <div key={idx} className=" flex justify-between flex-col items-start relative h-68 w-50 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>
                    <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                    <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.details}</p>
                </div>
                
                <div className="flex w-full gap-2 mt-4">
                    <button onClick={() => editNote(idx)}
                        className="flex-1 active:scale-95 bg-blue-500 py-2 text-xs rounded font-bold text-white">
                        Edit</button>
                    <button onClick={() => deleteNote(idx)}
                        className="flex-1 active:scale-95 bg-red-500 py-2 text-xs rounded font-bold text-white">
                        Delete</button>
                </div>
                </div>
                })}
            </div>
        </div>
    </div>
    )
}

export default App