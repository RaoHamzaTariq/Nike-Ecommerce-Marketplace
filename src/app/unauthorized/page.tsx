import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="text-center space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200 max-w-md w-full">
        {/* Icon or Image */}
        <div className="text-6xl text-red-500">🚫</div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">Unauthorized Access</h1>

        {/* Description */}
        <p className="text-gray-600">
         {" You don't have permission to access this page. Please contact the administrator if you believe this is an error."}
        </p>

        {/* Home Button */}
        <Button asChild className="mt-4">
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            Go Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}