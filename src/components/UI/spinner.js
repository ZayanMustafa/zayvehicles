"use client";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative w-20 h-20">
        {/* Outer gold ring with shine effect */}
        <div className="absolute inset-0 border-4 border-amber-400 rounded-full animate-spin [animation-duration:3s] opacity-70"></div>
        
        {/* Middle white ring */}
        <div className="absolute inset-2 border-4 border-white rounded-full animate-spin [animation-duration:2s] [animation-direction:reverse] opacity-80"></div>
        
        {/* Inner gold dot with pulse effect */}
        <div className="absolute inset-6 bg-amber-400 rounded-full animate-pulse [animation-duration:1.5s] opacity-90"></div>
        
        {/* Shine reflection effect */}
        <div className="absolute top-1 left-1 w-4 h-4 bg-white/70 rounded-full blur-sm"></div>
      </div>
      
      {/* Loading text with fade animation */}
      <span className="text-white font-medium tracking-wider text-lg animate-pulse [animation-duration:2s] flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-amber-400 rounded-full animate-bounce"></span>
        LOADING
        <span className="inline-block w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:0.3s]"></span>
      </span>
    </div>
  );
};

export default Spinner;