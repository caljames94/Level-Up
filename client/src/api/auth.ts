const API_URL = "http://localhost:3001/api/auth"; // Note the addition of '/auth'

// Signup function
export const signup = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Signup failed");
  }

  const responseData = await response.json();
  localStorage.setItem("token", responseData.user.token);

  return responseData;
};

// Login function
export const login = async (data: { email: string; password: string }) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Login failed");
  }

  const responseData = await response.json();
  localStorage.setItem("token", responseData.user.token);

  return responseData;
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem("token");
};

export const setAuthToken = (token: string): void => {
  localStorage.setItem("token", token);
};

export const removeAuthToken = (): void => {
  localStorage.removeItem("token");
};
