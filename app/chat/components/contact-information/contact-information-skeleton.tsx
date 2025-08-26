const ContactInformationSkeleton = () => {
  return (
    <div className="w-80 border-l">
      <div className="h-14 border-b px-4 flex items-center">
        <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="p-4">
        <div className="flex flex-col items-center pb-6 border-b">
          <div className="h-20 w-20 rounded-full bg-gray-300 animate-pulse mb-3" />
          <div className="h-5 w-32 bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="h-4 w-24 bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="flex items-center mt-1">
            <div className="h-2 w-2 rounded-full bg-gray-300 mr-1 animate-pulse"></div>
            <div className="h-3 w-12 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        <div className="py-4 space-y-4">
          <div>
            <div className="h-4 w-32 bg-gray-200 rounded mb-2 animate-pulse" />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex justify-between text-sm">
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex justify-between text-sm">
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>

          <div>
            <div className="h-4 w-32 bg-gray-200 rounded mb-2 animate-pulse" />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <div className="h-3 w-12 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex justify-between text-sm">
                <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex justify-between text-sm">
                <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="h-8 w-full bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
    </div>
  )
}

export default ContactInformationSkeleton
