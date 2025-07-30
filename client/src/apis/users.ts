import { UserGridUser } from '@/components/UserGrid';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchUsers = async (count: number): Promise<UserGridUser[]> => {
    const res = await fetch(`${BASE_URL}/users?count=${count}`);
    if (!res.ok) throw new Error('Failed to fetch users');
    return res.json();
};