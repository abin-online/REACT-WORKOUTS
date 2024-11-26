const Shimmer = () => {
    // Create an array of 12 items for the shimmer cards
    const shimmerCards = new Array(12).fill(null);

    return (
        <div className="flex justify-center items-center min-h-screen p-4">
            <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {shimmerCards.map((_, index) => (
                    <div key={index} className="shimmer-card bg-gray-300 animate-pulse w-65 h-80 rounded-lg gap-2"></div>
                ))}
            </div>
        </div>
    );
};




export default Shimmer