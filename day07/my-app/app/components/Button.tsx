"use client"

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function MyButton({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
    bg-indigo-600
    text-white
    font-semibold
    py-2
    px-4
    rounded-lg
    shadow-md
    hover:bg-indigo-700
    transition-colors
    "
    >
      {children}
    </button>
  )
}