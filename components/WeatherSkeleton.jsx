import { Skeleton } from './ui/skeleton';

export function WeatherSkeleton() {
  return (
    <>
      <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Skeleton className="h-6 w-32 mb-2" />
            <div className="flex items-center gap-3 mb-3">
              <Skeleton className="w-12 h-12 rounded" />
              <div>
                <Skeleton className="h-10 w-24 mb-2" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
            <Skeleton className="h-4 w-40" />
          </div>
          <Skeleton className="w-20 h-20 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-center">
              <Skeleton className="w-16 h-16 rounded-full mx-auto mb-3" />
              <Skeleton className="h-4 w-16 mx-auto mb-1" />
              <Skeleton className="h-6 w-12 mx-auto mb-1" />
              <Skeleton className="h-3 w-10 mx-auto" />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
        <Skeleton className="h-6 w-32 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-32 w-full" />
          <div className="flex justify-between">
            {[...Array(7)].map((_, i) => (
              <Skeleton key={i} className="h-4 w-8" />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <Skeleton className="h-6 w-32 mb-4" />
        <div className="flex justify-center gap-6 mb-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="w-3 h-3 rounded-full" />
              <Skeleton className="h-3 w-12" />
            </div>
          ))}
        </div>
        <Skeleton className="h-20 w-full" />
      </div>
    </>
  );
}