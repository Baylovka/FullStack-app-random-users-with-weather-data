import React from "react";
import UserCard from "./UserCard";
import { Button } from "@/components/ui/button";
import Loader from "./Loader";

export type UserGridUser = {
    id: string;
    name: string;
    gender: string;
    location: string;
    email: string;
    image: string;
    weather?: {
        icon: string;
        temp: number;
        min: number;
        max: number;
    };
};

type UserGridProps = {
    users: UserGridUser[];
    loading?: boolean;
    onSave?: (user: UserGridUser) => void;
    onDelete?: (id: string) => void;
    onLoadMore?: () => void;
    loadingMore?: boolean;
    skeletonCount?: number;
};

export default function UserGrid({
    users,
    loading = false,
    onSave,
    onDelete,
    onLoadMore,
    loadingMore = false,
    skeletonCount = 8,
}: UserGridProps) {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mb-8 justify-items-center">
                {loading
                    ? Array.from({ length: skeletonCount }).map((_, i) => (
                        <UserCard
                            key={i}
                            id=""
                            name=""
                            gender=""
                            location=""
                            email=""
                            image=""
                            loading
                        />
                    ))
                    : users.map((user) => (
                        <UserCard
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            gender={user.gender}
                            location={user.location}
                            email={user.email}
                            image={user.image}
                            weather={user.weather}
                            onSave={onSave ? () => onSave(user) : undefined}
                            onDelete={onDelete ? () => onDelete(user.id) : undefined}
                        />
                    ))}
            </div>
            {onLoadMore && (
                <Button onClick={onLoadMore} disabled={loadingMore} variant="outline" className="mb-8 cursor-pointer">
                    {loadingMore ? (
                        <Loader />
                    ) : (
                        "Load more"
                    )}
                </Button>
            )}
        </div>
    );
}
