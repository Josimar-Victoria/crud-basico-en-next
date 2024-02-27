import TaskCart from "@/components/taskCard/taskCart"
import { prisma } from "@/libs/prisma"

async function loadTasks() {
  // const res = await fetch("http://localhost:3000/api/tasks")
  // const data = await res.json()

  // console.log(data)
  const tasks = await prisma.task.findMany()

  return tasks
  //console.log(tasks)
}

async function HomePages() {

  const taskLis = await loadTasks()
  console.log(taskLis)
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {taskLis.map(task => (
          <TaskCart task={task} key={task.id} />
        ))}
      </div>
    </section>
  )
}

export default HomePages
