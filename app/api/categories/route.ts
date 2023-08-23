import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Categories } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request) => {
   const body: Categories = await request.json();
   console.log(body)
   const category = await prisma.categories.create({
      data: {
         categories: body.categories,
         max_nominal: body.max_nominal
      }
   });

   return NextResponse.json(category);
}