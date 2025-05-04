export const getLogin = async (username, password) => {
  try {
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }
    localStorage.setItem("token", data.token);
    return data.token;
  } catch (err) {
    console.log("login error:", err.message);
    return null;
  }
};
