import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Krystian</h1>
        <p className="text-xl text-gray-600 mb-6">Your AI-powered financial assistant for couples</p>
        <ul className="list-disc text-left inline-block mb-6">
          <li>Connect your bank accounts</li>
          <li>Create budgets together</li>
          <li>Get visual insights on your finances</li>
          <li>Chat with Krystian for personalized advice</li>
        </ul>
        <div>
          <Button asChild>
            <Link to="/chat">Start Chatting with Krystian</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
