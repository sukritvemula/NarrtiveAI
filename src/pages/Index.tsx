
import { useState } from "react";
import { ArrowUpRight, Mic, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const Index = () => {
  const [message, setMessage] = useState("");
  const [webSearch, setWebSearch] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    // Handle message submission here
    setMessage("");
    setWebSearch(false); // Reset web search after submission
  };

  return (
    <div className="min-h-screen bg-background font-aeonik">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-8 w-8"
            />
            <h1 className="text-2xl font-bold tracking-[0.2em]">NARRATIVE</h1>
          </div>
          <div className="text-sm text-gray-600">Current Chat: Project Discussion</div>
          <Button variant="ghost" className="text-sm font-medium">
            ABOUT US
          </Button>
        </div>
      </header>

      <div className="flex h-screen pt-16">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/20 bg-white/5 backdrop-blur-sm flex flex-col">
          <div className="flex-1 p-4 overflow-auto">
            <div className="space-y-1">
              <div className="text-xs uppercase text-gray-500 font-medium mb-2">Chat History</div>
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="py-2 px-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-sm"
                >
                  <div className="font-medium truncate">Chat Session {i}</div>
                  <div className="text-xs text-gray-500 truncate">Last message...</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Profile Section */}
          <div className="p-4 border-t border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div>
                <div className="text-sm font-medium">User Name</div>
                <div className="text-xs text-gray-500">user@example.com</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 relative flex flex-col">
          <div className="flex-1 overflow-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="max-w-3xl mx-auto">
                {/* Chat Messages */}
                <div className="space-y-4 mb-24">
                  {/* AI Message */}
                  <div className="flex items-start space-x-3">
                    <div className={`w-6 h-6 rounded-full overflow-hidden flex-shrink-0 ${isGenerating ? 'animate-pulse' : ''}`}>
                      <img
                        src="/lovable-uploads/cb052872-907c-40db-b7f9-a5fb0a6621c2.png"
                        alt="AI"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700">
                        Hello! I'm here to help you with your questions.
                      </p>
                      {webSearch && (
                        <div className="mt-2 space-y-2">
                          <div className="text-xs text-gray-500">Sources:</div>
                          <div className="grid grid-cols-2 gap-2">
                            <Card className="p-3 bg-white/50">
                              <div className="text-xs font-medium">Source 1</div>
                              <div className="text-xs text-blue-500">example.com</div>
                            </Card>
                            <Card className="p-3 bg-white/50">
                              <div className="text-xs font-medium">Source 2</div>
                              <div className="text-xs text-blue-500">docs.com</div>
                            </Card>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* User Message */}
                  <div className="flex items-start justify-end">
                    <div className="max-w-[80%]">
                      <p className="text-sm text-gray-700">
                        Hi! I have a question about the project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input Area */}
          <div className="sticky bottom-0 bg-background/80 backdrop-blur-lg py-4">
            <div className="max-w-3xl mx-auto px-4">
              <form onSubmit={handleSubmit}>
                <div className="relative flex items-center gap-2">
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="ghost"
                    className="rounded-full hover:bg-gray-100"
                  >
                    <Paperclip className="h-5 w-5 text-gray-500" />
                  </Button>
                  <Button 
                    type="button" 
                    size="icon" 
                    variant="ghost"
                    className="rounded-full hover:bg-gray-100"
                  >
                    <Mic className="h-5 w-5 text-gray-500" />
                  </Button>
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="Your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full h-12 pl-6 pr-12 rounded-full bg-white/50 backdrop-blur-md border border-white/20 focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={!message.trim()}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-full transition-all duration-200 
                        ${message.trim() 
                          ? 'bg-gray-900 hover:bg-gray-800 text-white' 
                          : 'bg-transparent hover:bg-gray-100'}`}
                    >
                      <ArrowUpRight className={`h-5 w-5 ${!message.trim() ? 'text-gray-400' : ''}`} />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Web Search</span>
                    <Switch
                      checked={webSearch}
                      onCheckedChange={setWebSearch}
                      className="data-[state=checked]:bg-blue-500"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
