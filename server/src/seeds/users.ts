import { User } from "../models/users.js";

async function seedUsers() {
  try {
    const existingCount = await User.count(); // Count existing rows
    if (existingCount > 0) {
      console.log("Seed data already exists. Skipping...");
      return;
    }

    await User.bulkCreate([
      {
        first_name: "Alice",
        last_name: "Smith",
        email: "alice.smith@example.com",
        password_hash:
          "$2b$10$e3653979288906259595a4593796956773526984513698557340",
        profile_picture_url: "https://i.pravatar.cc/150?img=49",
      },
      {
        first_name: "Bob",
        last_name: "Johnson",
        email: "bob.johnson@example.com",
        password_hash:
          "$2b$10$e3653979288906259595a4593796956773526984513698557341",
        profile_picture_url: "https://i.pravatar.cc/150?img=52",
      },
      {
        first_name: "Charlie",
        last_name: "Brown",
        email: "charlie.brown@example.com",
        password_hash:
          "$2b$10$e3653979288906259595a4593796956773526984513698557342",
        profile_picture_url: "https://i.pravatar.cc/150?img=59",
      },
      {
        first_name: "David",
        last_name: "Williams",
        email: "david.williams@example.com",
        password_hash:
          "$2b$10$e3653979288906259595a4593796956773526984513698557343",
        profile_picture_url: "https://i.pravatar.cc/150?img=50",
      },
    ]);
    console.log("Users have been seeded successfully.");
  } catch (err) {
    console.error("Failed to seed users:", err);
  }
}

export default seedUsers;
