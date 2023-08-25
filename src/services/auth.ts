import Config from "@/config";

export async function registerWaitlist(email: string) {
  const res = await fetch(`${Config.BASE_URL}/auth/waitlist/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });
  return await res.json();
}

export async function register(email: string, password: string) {
  const res = await fetch(`${Config.BASE_URL}/auth/email/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  return await res.json();
}

export async function login(email: string, password: string) {
  const res = await fetch(`${Config.BASE_URL}/auth/email/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  return await res.json();
}
