import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const KrystianChat = () => {
  const [messages, setMessages] = useState([
    { role: 'bot', content: "Hello! I'm Krystian, your AI financial assistant. How can I help you with your budgeting today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }]);
      // Simulate AI response (replace with actual AI integration later)
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: "I'm processing your request. In the meantime, here's a sample budget breakdown." }]);
      }, 1000);
      setInput('');
    }
  };

  // Sample data for the chart
  const data = [
    { name: 'Jan', Expenses: 4000, Income: 2400 },
    { name: 'Feb', Expenses: 3000, Income: 1398 },
    { name: 'Mar', Expenses: 2000, Income: 9800 },
    { name: 'Apr', Expenses: 2780, Income: 3908 },
    { name: 'May', Expenses: 1890, Income: 4800 },
    { name: 'Jun', Expenses: 2390, Income: 3800 },
  ];

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Chat with Krystian</h1>
      <Card className="flex-grow flex flex-col">
        <CardHeader>
          <CardTitle>Financial Assistant</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col">
          <ScrollArea className="flex-grow mb-4">
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {msg.content}
                </span>
              </div>
            ))}
          </ScrollArea>
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Budget Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Expenses" stroke="#8884d8" />
              <Line type="monotone" dataKey="Income" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default KrystianChat;
