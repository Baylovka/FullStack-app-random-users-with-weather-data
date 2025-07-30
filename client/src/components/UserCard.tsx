import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSavedUsers } from "@/context/SavedUsersContext";
import UserCardSkeleton from "./UserCardSkeleton";

type Weather = {
    icon: string;
    temp: number;
    min: number;
    max: number;
};

type UserCardProps = {
    id: string;
    name: string;
    gender: string;
    location: string;
    email: string;
    image: string;
    weather?: Weather;
    loading?: boolean;
    onSave?: () => void;
    onDelete?: () => void;
};

export default function UserCard({
    id,
    name,
    gender,
    location,
    email,
    image,
    weather,
    loading = false,
    onSave,
    onDelete,
}: UserCardProps) {
    const { savedIds, addUser, removeUser } = useSavedUsers();
    const isSaved = savedIds.includes(id);

    if (loading) {
        return (
            <UserCardSkeleton />
        );
    }

    return (
        <Card className="w-full max-w-xs flex flex-col items-center gap-2">
            <CardContent className="flex flex-col items-center pt-6">
                <img src={image} alt={name} className="h-24 w-24 rounded-full object-cover mb-4" />
                <div className="font-bold text-lg mb-1">{name}</div>
                <div className="text-xs text-muted-foreground mb-1">{email}</div>
                <div className="text-sm text-muted-foreground mb-1">{gender}</div>
                <div className="text-sm mb-2">{location}</div>
                {weather && (
                    <div className="flex items-center gap-2 mb-2">
                        <img src={weather.icon} alt="weather" className="h-12 w-12" />
                        <span>{weather.temp}°C</span>
                        <span className="text-xs text-muted-foreground">min: {weather.min}°</span>
                        <span className="text-xs text-muted-foreground">max: {weather.max}°</span>
                    </div>
                )}
            </CardContent>
            <CardFooter className="w-full flex justify-center pb-4">
                {isSaved ? (
                    <Button variant="destructive" onClick={() => { onDelete?.(); removeUser(id); }} className="w-full cursor-pointer">Delete</Button>
                ) : (
                    <Button variant="default" onClick={() => { onSave?.(); addUser(id); }} className="w-full cursor-pointer">Save</Button>
                )}
            </CardFooter>
        </Card>
    );
}
