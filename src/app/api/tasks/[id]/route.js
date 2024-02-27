import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const taskId = await prisma.task.findUnique({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(taskId)
}

export async function PUT(request, { params }) {
    const data = await request.json()

    const taskUpdated = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data: data
    })
    return NextResponse.json(taskUpdated)
}

export async function DELETE(request, { params }) {
    try {
        const taskDelete = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })

        return NextResponse.json(taskDelete)

    } catch (error) {
        return NextResponse.json(error.message)
    }
}