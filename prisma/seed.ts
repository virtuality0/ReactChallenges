import prisma from "../db/index";

async function seedUsers() {
  await prisma.user.upsert({
    where: {
      id: "1",
    },
    create: {
      id: "1",
      firstName: "ayush",
      lastName: "juyal",
      username: "virtuality",
      email: "ayushjuyal246@gmail.com",
    },
    update: {},
  });

  await prisma.user.upsert({
    where: {
      id: "2",
    },
    create: {
      id: "2",
      firstName: "test",
      lastName: "user",
      username: "testing",
      email: "test@gmail.com",
    },
    update: {},
  });
}

async function seedDb() {
  try {
    await seedUsers();
  } catch (err) {
    console.log("Error seeding database : ", err);
    throw err;
  } finally {
    // disconnects from database in any case if it's error or successful seeding
    await prisma.$disconnect();
  }
}

seedDb().catch((err) => {
  console.error(
    "An unexpected error has occured while seeding database : ",
    err,
  );
  process.exit(1);
});
