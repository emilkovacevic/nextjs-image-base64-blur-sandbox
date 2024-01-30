const loading = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div>
              {/* Image Viewer Skeleton */}
              <div className="w-full h-64 animate-pulse bg-gray-300" />

              {/* Thumbnails Skeleton */}
              <div className="flex gap-4 items-center flex-wrap mt-8">
                <div className="w-20 h-20 animate-pulse bg-gray-300" />
                <div className="w-20 h-20 animate-pulse bg-gray-300" />
                <div className="w-20 h-20 animate-pulse bg-gray-300" />
                <div className="w-20 h-20 animate-pulse bg-gray-300" />
              </div>

              {/* Buttons Skeleton */}
              <div className="flex -mx-2 mb-4 mt-8">
                <div className="w-1/2 px-2">
                  <div className="h-10 bg-gray-300 animate-pulse" />
                </div>
                <div className="w-1/2 px-2">
                  <div className="h-20 bg-gray-300 animate-pulse" />
                </div>
              </div>

              {/* Product Details Skeleton */}
              <div className="md:flex-1 px-4 animate-pulse">
                <p className="h-6 bg-gray-300 animate-pulse" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2 h-10 bg-gray-300 animate-pulse" />
                <div className="my-4 py-8 bg-gray-300 animate-pulse" />
                <div className="mb-4 text-xl">
                  <div className="mb-4">
                    <span className="text-gray-700 h-6 bg-gray-300 animate-pulse" />
                    <span className="font-bold text-gray-600 h-6 bg-gray-300 animate-pulse" />
                    <span className="font-bold text-green-600 h-6 bg-gray-300 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
