import { Class } from "../models/index.js";
async function seedClasses() {
  try {
    // Check if data already exists
    const existingCount = await Class.count(); // Count existing rows
    if (existingCount > 0) {
      console.log("Seed data already exists. Skipping...");
      return;
    }

    // Insert the data if the table is empty
    await Class.bulkCreate([
      {
        class_id: 1,
        class_name: "Yoga Basics",
        instructor: "Emma Taylor",
        difficulty: "Easy",
        description:
          "A beginner yoga class to improve flexibility and reduce stress.",
        start_time: "2024-12-12 09:00:00",
        end_time: "2024-12-12 10:00:00",
        location: "Room 101",
        capacity: 20,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 2,
        class_name: "Advanced Pilates",
        instructor: "James Wilson",
        difficulty: "Medium",
        description:
          "Challenging Pilates routines for experienced practitioners.",
        start_time: "2024-12-12 11:00:00",
        end_time: "2024-12-12 12:30:00",
        location: "Room 102",
        capacity: 15,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 3,
        class_name: "Cardio Kickboxing",
        instructor: "Sophia Davis",
        difficulty: "Hard",
        description: "A high-energy cardio class with kickboxing techniques.",
        start_time: "2024-12-13 18:00:00",
        end_time: "2024-12-13 19:00:00",
        location: "Room 201",
        capacity: 25,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    console.log("Classes have been seeded successfully.");
  } catch (err) {
    console.error("Failed to seed classes:", err);
  }
}

export default seedClasses;
