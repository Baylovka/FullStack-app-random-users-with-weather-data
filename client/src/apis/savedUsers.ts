import { UserGridUser } from '@/components/UserGrid';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchSavedUsers = async (): Promise<UserGridUser[]> => {
    const res = await fetch(`${BASE_URL}/save`);
    if (!res.ok) throw new Error('Failed to fetch saved users');
    return res.json();
};

export const saveUser = async (user: UserGridUser): Promise<void> => {
    const res = await fetch(`${BASE_URL}/save`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
    });
    if (!res.ok) throw new Error('Failed to save user');
};

export const deleteSavedUser = async (id: string): Promise<void> => {
    const res = await fetch(`${BASE_URL}/save/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error('Failed to delete saved user');
};