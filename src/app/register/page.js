"use client";
import { useState } from "react";
import Image from "next/image";
export default function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Email and Password are required");
    } else {
      try {
        const res = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: { "Content-Type": "application/json" },
        });
        if (res.ok) {
          const form = e.target;
          form.reset();
          console.log("Form resetted");
        } else {
          console.log("User Registration Failed");
        }
      } catch (error) {
        console.log("Error during registration", error);
      }
    }
  };
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <div className="my-4 text-center text-gray-500">
          or login with provider
        </div>
        <button className="flex gap-4 justify-center">
          <Image
            src={"/google.png"}
            alt={"Google Image"}
            width={24}
            height={24}
          />
          Login With Google
        </button>
      </form>
    </section>
  );
}
