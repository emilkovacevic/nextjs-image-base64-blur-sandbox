"use client";

const Rating = ({ rating = 0 }: { rating: number }) => {
  // Ensure the rating is within the valid range (0 to 5)
  const normalizedRating = Math.min(5, Math.max(0, rating));

  // Calculate the number of filled and empty stars
  let filledStars: number;

  if (normalizedRating >= 4.5) {
    filledStars = 5;
  } else {
    filledStars = Math.floor(normalizedRating);
  }

  const remainder = normalizedRating - filledStars;

  // Generate an array of stars with appropriate SVG elements
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < filledStars) {
      return <Star key={index} filledLevel={1} />;
    } else if (index === filledStars && remainder > 0) {
      return <Star key={index} filledLevel={remainder} />;
    } else {
      return <Star key={index} filledLevel={0} />;
    }
  });

  return <div className="flex gap-2 items-center">Rating: {stars}</div>;
};

const Star = ({ filledLevel = 0 }: { filledLevel?: boolean | number }) => {
  const fill = typeof filledLevel === "number" ? filledLevel : filledLevel;

  const starColor = fill ? "#ffc107" : "#e4e4e4";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={starColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L14.11 8.37L21 9.27L15.5 14.15L17.61 20.54L12 17.35L6.39 20.54L8.5 14.15L3 9.27L9.89 8.37L12 2Z"
        stroke={starColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Rating;
