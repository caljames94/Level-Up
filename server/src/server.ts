import express from 'express';
import sequelize from './config/connection';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  });


 
