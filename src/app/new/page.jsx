"use client"

import { data } from "autoprefixer"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"


function NewPage({ params }) {

    const route = useRouter()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    useEffect(() => {
        if (params.id) {
            fetch(`/api/tasks/${params.id}`)
                .then(res => res.json()
                    .then(data => {
                        console.log(data)
                        setTitle(data.title)
                        setDescription(data.description)
                    }))
        }
    }, [params.id])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (params.id) {
            route.refresh()
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({ title, description }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json()

            console.log(data)
        } else {
            const res = await fetch("/api/tasks", {
                method: "POST",
                body: JSON.stringify({ title, description }),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await res.json()
            console.log(data)
        }

        route.push('/')
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <form action="" className='bg-slate-800 p-10 lg:w-1/4 md:w-1/2' onSubmit={handleSubmit}>
                <label htmlFor="title" className="font-bold text-sm">Title</label>
                <input
                    placeholder='Title'
                    name="title" type="text"
                    className='border border-gray-400 p-2 mb-4 w-full text-black'
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} />
                <label htmlFor="description" className="font-bold text-sm">Description</label>
                <textarea
                    placeholder='Description on task'
                    className='border border-gray-400 p-2 mb-4 w-full text-black'
                    name="description" id="description" cols="30" rows="3"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}>
                </textarea>

                <button
                    type="submit"
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    {params.id ? "Edict" : "Create"}
                </button>

                {params.id && (
                    <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-6'
                        type="button"
                        onClick={async () => {
                            const res = await fetch(`/api/tasks/${params.id}`, { method: "DELETE" })
                            const data = await res.json()
                            route.refresh()
                            route.back()
                        }
                        }
                    >Delete</button>
                )}
            </form>
        </div>
    )
}

export default NewPage
