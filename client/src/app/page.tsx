"use client";

import { useEffect, useState } from "react";
import UserGrid, { UserGridUser } from "@/components/UserGrid";
import { fetchUsers } from "@/apis/users";
import { deleteSavedUser, saveUser } from "@/apis/savedUsers";

export default function Home() {
    const [users, setUsers] = useState<UserGridUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const LOAD_COUNT_USERS = 8;

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const data = await fetchUsers(LOAD_COUNT_USERS);
                setUsers(data);
            } catch (err) {
                console.error('Error loading users:', err);
            } finally {
                setLoading(false);
            }
        };
        loadUsers();
        console.log('Home page mounted');
    }, []);

    const handleLoadMore = async () => {
        setLoadingMore(true);
        try {
            const newUsers = await fetchUsers(LOAD_COUNT_USERS);
            setUsers(prev => [...prev, ...newUsers]);
        } catch (err) {
            console.error('Error loading more users:', err);
        } finally {
            setLoadingMore(false);
        }
    };

    const handleSave = async (user: UserGridUser) => {
        try {
            await saveUser(user);
        } catch (err) {
            console.error('Error saving user:', err);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteSavedUser(id);
        } catch (err) {
            console.error('Error deleting user:', err);
        }
    };

    return (
        <UserGrid
            users={users}
            loading={loading}
            loadingMore={loadingMore}
            onLoadMore={handleLoadMore}
            onSave={handleSave}
            onDelete={handleDelete}
        />
    );
}
