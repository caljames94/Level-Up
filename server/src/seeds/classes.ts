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
        start_time: "2024-12-16 09:00:00",
        end_time: "2024-12-16 10:00:00",
        location: "Room 101",
        capacity: 20,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 2,
        class_name: "Intermediate Yoga",
        instructor: "James Wilson",
        difficulty: "Medium",
        description:
          "A yoga class for people who regularly practice.",
        start_time: "2024-12-16 11:00:00",
        end_time: "2024-12-16 12:30:00",
        location: "Room 102",
        capacity: 15,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 3,
        class_name: "Bikram Yoga",
        instructor: "Sophia Davis",
        difficulty: "Hard",
        description: "A high intensity yoga class at high heat",
        start_time: "2024-12-17 18:00:00",
        end_time: "2024-12-17 19:00:00",
        location: "Room 201",
        capacity: 25,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 4,
        class_name: "Max Intensity Yoga",
        instructor: "Sarah Thompson",
        difficulty: "Extreme",
        description:
          "A yoga class that will push you to the limits of comfort.",
        start_time: "2024-12-17 11:00:00",
        end_time: "2024-12-17 12:00:00",
        location: "Room 103",
        capacity: 10,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        class_id: 5,
        class_name: "Pilates Basics",
        instructor: "Emma Taylor",
        difficulty: "Easy",
        description:
          "A beginner pilates class to improve flexibility and reduce stress.",
        start_time: "2024-12-16 11:00:00",
        end_time: "2024-12-16 12:00:00",
        location: "Room 101",
        capacity: 20,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 6,
        class_name: "Intermediate Pilates",
        instructor: "James Wilson",
        difficulty: "Medium",
        description:
          "A pilates class for people who regularly practice.",
        start_time: "2024-12-16 12:00:00",
        end_time: "2024-12-16 13:30:00",
        location: "Room 102",
        capacity: 15,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 7,
        class_name: "High Intensity Pilates",
        instructor: "Sophia Davis",
        difficulty: "Hard",
        description: "A high intensity pilates class that is set at a high tempo",
        start_time: "2024-12-17 18:00:00",
        end_time: "2024-12-17 19:00:00",
        location: "Room 201",
        capacity: 12,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 8,
        class_name: "Super Pilates",
        instructor: "James Wilson",
        difficulty: "Extreme",
        description:
          "A pilates class that will push you to the limits of comfort.",
        start_time: "2024-12-17 11:00:00",
        end_time: "2024-12-17 12:00:00",
        location: "Room 103",
        capacity: 10,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        class_id: 9,
        class_name: "Boxing Basics",
        instructor: "Sophia Davis",
        difficulty: "Easy",
        description:
          "A beginner boxing class to learn the basics.",
        start_time: "2024-12-17 09:00:00",
        end_time: "2024-12-17 10:00:00",
        location: "Room 101",
        capacity: 20,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 10,
        class_name: "Intermediate Boxing",
        instructor: "Sarah Thompson",
        difficulty: "Medium",
        description:
          "A boxing class for people who want to improve form and regularly practice.",
        start_time: "2024-12-16 05:00:00",
        end_time: "2024-12-16 07:30:00",
        location: "Room 102",
        capacity: 15,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 11,
        class_name: "Boxing Sparing",
        instructor: "Sarah Thompson",
        difficulty: "Hard",
        description: "A boxing class focused on sparing with an opponent.",
        start_time: "2024-12-17 08:00:00",
        end_time: "2024-12-17 09:00:00",
        location: "Room 201",
        capacity: 12,
        current_bookings: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        class_id: 12,
        class_name: "Knockout Boxing",
        instructor: "James Wilson",
        difficulty: "Extreme",
        description:
          "The fight club of boxing, two enter one leaves.",
        start_time: "2024-12-17 01:00:00",
        end_time: "2024-12-17 02:00:00",
        location: "Room 103",
        capacity: 6,
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
