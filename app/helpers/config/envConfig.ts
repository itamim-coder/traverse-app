export const getBaseUrl = (): string => {
  return (
    process.env.PUBLIC_API_BASE_URL || "https://jsonplaceholder.typicode.com"
  );
};

//  https://traverse-backend.vercel.app/api/v1

// http://localhost:3030/api/v1
