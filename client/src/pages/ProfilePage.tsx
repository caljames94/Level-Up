import React from "react";

type ClassSchedule = {
  id: number;
  className: string;
  time: string;
  instructor: string;
};

type UserProfile = {
  name: string;
  address: string;
  profileImage?: string;
  schedule: ClassSchedule[];
};

const ProfilePage: React.FC<{ user: UserProfile }> = ({ user }) => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <img
          src={user.profileImage || "https://via.placeholder.com/150"}
          alt="User profile"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            marginRight: "20px",
          }}
        />
        <div>
          <h1 style={{ margin: 0 }}>{user.name}</h1>
          <p style={{ margin: "5px 0" }}>{user.address}</p>
        </div>
      </div>
      <h2>Class Schedule</h2>
      {user.schedule.length > 0 ? (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {user.schedule.map((classInfo) => (
            <li
              key={classInfo.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3 style={{ margin: 0 }}>{classInfo.className}</h3>
              <p style={{ margin: "5px 0" }}>
                <strong>Time:</strong> {classInfo.time}
              </p>
              <p style={{ margin: "5px 0" }}>
                <strong>Instructor:</strong> {classInfo.instructor}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No classes scheduled yet.</p>
      )}
    </div>
  );
};

export default ProfilePage;
