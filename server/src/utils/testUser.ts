import sequelize from '../config/connection.js'; // Ensure .js extension
import { User } from '../models/users.js'; // Ensure .js extension

const testUserModel = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful.');

    // Test creating a user
    const newUser = await User.create({
      first_name: 'Test',
      last_name: 'User',
      email: 'testuser@example.com',
      password_hash: 'testhashedpassword123', // Simulated hashed password
    });

    console.log('New user created:', newUser.toJSON());

    // Test fetching the user
    const fetchedUser = await User.findOne({ where: { email: 'testuser@example.com' } });
    console.log('Fetched user from database:', fetchedUser?.toJSON());
  } catch (error) {
    console.error('Error testing User model:', error);
  } finally {
    await sequelize.close();
  }
};

testUserModel();
