"use client"

import { useRouter } from "next/navigation"


function TaskCart({ task }) {
    const { title, description, createdAt, id } = task
    const router = useRouter()



    return (
        <div className="bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer" onClick={() => { router.push(`/tasks/edit/${id}`) }}>
            <h3 className="">{title}</h3>
            <p>{description}</p>
            <p>{new Date(createdAt).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCart
