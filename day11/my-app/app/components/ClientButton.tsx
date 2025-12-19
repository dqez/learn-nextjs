"use client";

import React, { useState } from "react";

interface ClientButtonProps {
  initialText: string;
}

export function ClientButton({ initialText }: ClientButtonProps) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }


  return (
    <button
      onClick={handleClick}
      className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition mt-4"
    >
      {initialText} - Bạn đã nhấn {count} lần
    </button>
  )
}