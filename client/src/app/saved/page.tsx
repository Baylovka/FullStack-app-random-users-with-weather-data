'use client';
import { deleteSavedUser, fetchSavedUsers } from '@/apis/savedUsers';
import UserGrid, { UserGridUser } from '@/components/UserGrid';
import { useSavedUsers } from '@/context/SavedUsersContext';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function SavedUsersPage() {
    const [users, setUsers] = useState<UserGridUser[]>([]);
    const [loading, setLoading] = useState(true);
    const { addUser } = useSavedUsers();

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchSavedUsers();
                setUsers(data);
                data.forEach(u => addUser(u.id));
            } catch (err) {
                console.error('Error loading saved users:', err);
            } finally {
                setLoading(false);
            }
        };
        loadUsers();
        console.log('SavedUsersPage mounted');
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteSavedUser(id);
            setUsers(users.filter(user => user.id !== id));
        } catch (err) {
            console.error('Error deleting user:', err);
        }
    };

    if (users.length === 0 && !loading) {
        return (
            <div className="text-center text-xl text-gray-700">
                <span>No saved users found. </span>
                <Link href='/' className="underline hover:text-blue-700">Go to save!</Link>
            </div>
        );
    }

    return (
        <UserGrid
            users={users}
            loading={loading}
            onDelete={handleDelete}
        />
    );

}
