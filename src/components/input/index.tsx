"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

export function Input() {
  const ref = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    console.log("valor digitado:", ref.current?.value);

    if (ref.current?.value === "") return;

    if (ref.current) {
      router.push(`/game/search/${ref.current.value}`);
      ref.current.value = "";
    }
  }

  return (
    <form
      onSubmit={handleSearch}
      className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
    >
      <input
        className="bg-slate-200 outline-none w-11/12"
        type="text"
        placeholder="Procurando algum jogo?..."
        ref={ref}
      />
      <button type="submit" className="hover:cursor-pointer">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
}
