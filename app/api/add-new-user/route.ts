import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addToDb(values: any) {
  await prisma.user.create({
    data: {
      name: values.name,
      email: values.email,
    },
  });

  const allUsers = await prisma.user.findMany({});
  console.dir(allUsers, { depth: null });
}

export async function POST(request: Request) {
  const { formValues } = await request.json();
  // Assuming you're sending the data as JSON
  // Here, you can process the 'formValues' data and add it to the db

  addToDb(formValues)
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
  // console to demonstrate the data receiving on the server
  console.log(formValues);

  // Return a response
  return NextResponse.json({ message: "User added successfully" });
}
