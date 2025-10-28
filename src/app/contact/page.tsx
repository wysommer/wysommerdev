'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.currentTarget);
        
        try {
            const response = await fetch('https://formspree.io/f/xzzkeywd', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                e.currentTarget.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-black to-blue-400 flex flex-col items-center justify-center">
            
            <h1 className="text-white text-4xl font-bold font-poppins mb-7">contact me</h1>
            <div className="w-full max-w-lg bg-black/20 border border-white/10 hover:border-lime-500 rounded-xl p-7">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        name="name"
                        placeholder="name" 
                        required
                        className="text-white w-full p-2 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-lime-500" 
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="email" 
                        required
                        className="text-white w-full p-2 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-lime-500" 
                    />
                    <textarea 
                        name="message"
                        placeholder="message" 
                        required
                        rows={5}
                        className="text-white w-full p-2 rounded-xl bg-black/30 border border-white/10 focus:outline-none focus:ring-2 focus:ring-lime-500 resize-none" 
                    />
                    {status === 'success' && (
                        <p className="text-lime-500 font-poppins text-sm">Message sent successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 font-poppins text-sm">Something went wrong. Please try again.</p>
                    )}
                    <button 
                        type="submit" 
                        disabled={status === 'sending'}
                        className="cursor-pointer w-full p-3 rounded-xl bg-lime-500 hover:text-white hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r from-lime-500 to-yellow-500 text-black font-bold font-poppins disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>

            <a href="mailto:hi@wysommer.com" className="mt-7 text-lime-500 font-poppins text-sm hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">or email me directly</a>
        </div>
    )
}