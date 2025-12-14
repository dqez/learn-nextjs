"use client"; //must first line

//define Interface (Shadow of Props)
interface ProfileProps {
    name: string;
    title: string;
    likes: number;
}

import React, { useState } from "react";

export function ProfileCard({ name, title }: ProfileProps) {
    const [likes, setLikes] = useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }

    return (
        <div className="border p-5 rounded-lg shadow-md max-w-sm m-4 bg-white">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-blue-600">{title}</p>
            <p className="mt-3 text-sm">Likes: {likes}</p>
            <button
                onClick={handleLike}
                className="mt-2 bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition"
            >
                Like
            </button>
        </div>
    );
}

