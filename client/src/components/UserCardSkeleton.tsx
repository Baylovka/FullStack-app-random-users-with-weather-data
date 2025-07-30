import React from 'react';
import { Card, CardContent } from './ui/card';
import { Skeleton } from './ui/skeleton';

export default function UserCardSkeleton() {
    return (
        <Card className="w-full max-w-xs">
            <CardContent className="flex flex-col items-center pt-6">
                <Skeleton className="h-24 w-24 rounded-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-2/3 mb-2" />
                <Skeleton className="h-4 w-5/6 mb-4" />
                <Skeleton className="h-12 w-7/8 mb-4" />
                <Skeleton className="h-8 w-1/2 mb-3" />
            </CardContent>
        </Card>
    );
}
