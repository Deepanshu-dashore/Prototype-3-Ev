"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/shared/Logo";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // If already logged in, redirect to home
    if (localStorage.getItem("ziko_logged_in") === "true") {
      router.push("/");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    // Simulate Registration Success
    localStorage.setItem("ziko_logged_in", "true");
    window.dispatchEvent(new Event("auth-update"));
    router.push("/");
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary selection:bg-[#BFFF07] selection:text-black transition-colors duration-300">
      {/* Back button */}
      <div className="p-6">
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-gray hover:text-[#BFFF07] transition-colors">
          ➔ Back to Home
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-surface border border-borders rounded-3xl p-8 shadow-2xl flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4 text-center">
            <Logo variant="full" light={true} />
            <div>
              <h2 className="font-general-sans text-2xl font-black uppercase text-primary tracking-wide">Create Account</h2>
              <p className="font-sans text-xs text-neutral-gray mt-1">Join the future of premium electric mobility.</p>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs px-4 py-3 rounded-lg font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] text-neutral-gray font-bold uppercase tracking-wider mb-2">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background border border-borders text-primary rounded-lg px-4 py-3.5 text-xs font-semibold focus:outline-none focus:border-[#BFFF07]"
              />
            </div>
            <div>
              <label className="block text-[10px] text-neutral-gray font-bold uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                required
                placeholder="Enter email (e.g. user@ziko.ev)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background border border-borders text-primary rounded-lg px-4 py-3.5 text-xs font-semibold focus:outline-none focus:border-[#BFFF07]"
              />
            </div>
            <div>
              <label className="block text-[10px] text-neutral-gray font-bold uppercase tracking-wider mb-2">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-background border border-borders text-primary rounded-lg px-4 py-3.5 text-xs font-semibold focus:outline-none focus:border-[#BFFF07]"
              />
            </div>
            <div>
              <label className="block text-[10px] text-neutral-gray font-bold uppercase tracking-wider mb-2">Confirm Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full bg-background border border-borders text-primary rounded-lg px-4 py-3.5 text-xs font-semibold focus:outline-none focus:border-[#BFFF07]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#BFFF07] hover:bg-[#a6df05] text-black font-sans text-xs font-bold tracking-wider uppercase rounded-lg transition-all duration-300 hover:scale-[1.01]"
            >
              Register
            </button>
          </form>

          <div className="text-center font-sans text-xs text-neutral-gray border-t border-borders pt-6">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[#BFFF07] font-semibold hover:underline">
              Sign In instead
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
