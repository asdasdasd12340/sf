import React, { useState } from 'react';
import { Copy, Download, Eye, Edit2 } from 'lucide-react';

interface DesignPreset {
  id: string;
  name: string;
  preview: React.ReactNode;
  code: string;
}

export const DesignTemplate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hero' | 'section' | 'card'>('hero');
  const [copied, setCopied] = useState(false);

  const designPresets: Record<string, DesignPreset[]> = {
    hero: [
      {
        id: 'hero-1',
        name: 'Minimal Hero',
        preview: (
          <div className="h-96 bg-gradient-to-br from-slate-900 to-black flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-5xl font-black text-white mb-4">Your Title Here</h2>
              <p className="text-gray-400">Minimal and elegant hero section</p>
            </div>
          </div>
        ),
        code: `<section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-black">
  <div className="text-center">
    <h1 className="text-6xl font-black text-white mb-6">Your Title</h1>
    <p className="text-xl text-gray-400 mb-8">Subheading here</p>
  </div>
</section>`,
      },
      {
        id: 'hero-2',
        name: 'Hero with Image',
        preview: (
          <div className="h-96 bg-black relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-50">
              <img
                src="https://picsum.photos/1920/1080"
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl font-black">Featured Project</h2>
            </div>
          </div>
        ),
        code: `<section className="relative w-full h-screen">
  <div className="absolute inset-0">
    <img src="image-url" alt="Background" className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
  <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
    <h1 className="text-6xl font-black">Title</h1>
  </div>
</section>`,
      },
    ],
    section: [
      {
        id: 'section-1',
        name: 'Two Column Section',
        preview: (
          <div className="bg-slate-950 p-12 min-h-80 flex items-center">
            <div className="grid grid-cols-2 gap-12 w-full">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Left Content</h3>
                <p className="text-gray-400">Add your content here</p>
              </div>
              <div className="bg-slate-900 rounded-lg p-8 flex items-center justify-center">
                <p className="text-gray-500">Visual element</p>
              </div>
            </div>
          </div>
        ),
        code: `<section className="py-20 px-8 bg-slate-950">
  <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12">
    <div>
      <h2 className="text-4xl font-black text-white mb-6">Section Title</h2>
      <p className="text-gray-400 text-lg">Your content here</p>
    </div>
    <div className="bg-slate-900 rounded-lg p-8 flex items-center justify-center">
      <span className="text-gray-500">Media or visual element</span>
    </div>
  </div>
</section>`,
      },
      {
        id: 'section-2',
        name: 'Three Column Section',
        preview: (
          <div className="bg-black p-12 min-h-64">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Section Title</h3>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-slate-900 p-6 rounded-lg text-center">
                  <div className="text-gray-500 mb-3">Icon</div>
                  <p className="text-white font-semibold">Feature {i}</p>
                </div>
              ))}
            </div>
          </div>
        ),
        code: `<section className="py-20 px-8 bg-black">
  <h2 className="text-4xl font-black text-white mb-12 text-center">Section Title</h2>
  <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
    {/* Repeat for each item */}
    <div className="bg-slate-900 p-6 rounded-lg text-center">
      <h3 className="text-white font-semibold mb-2">Feature Title</h3>
      <p className="text-gray-400">Description</p>
    </div>
  </div>
</section>`,
      },
    ],
    card: [
      {
        id: 'card-1',
        name: 'Project Card',
        preview: (
          <div className="p-6 bg-slate-900 rounded-lg hover:bg-slate-800 transition cursor-pointer group">
            <div className="bg-slate-800 h-40 rounded mb-4 group-hover:opacity-80 transition"></div>
            <h3 className="text-white font-semibold mb-2">Project Title</h3>
            <p className="text-gray-400 text-sm mb-4">Brief description of the project</p>
            <div className="flex gap-2">
              <span className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">Tag</span>
            </div>
          </div>
        ),
        code: `<div className="bg-slate-900 rounded-lg overflow-hidden hover:shadow-lg transition group cursor-pointer">
  <div className="aspect-video bg-slate-800 group-hover:opacity-80 transition"></div>
  <div className="p-6">
    <h3 className="text-white font-semibold mb-2">Project Title</h3>
    <p className="text-gray-400 text-sm">Description</p>
  </div>
</div>`,
      },
      {
        id: 'card-2',
        name: 'Feature Card',
        preview: (
          <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-700">
            <div className="w-12 h-12 bg-slate-700 rounded-lg mb-4"></div>
            <h3 className="text-white font-bold mb-2">Feature Name</h3>
            <p className="text-gray-400 text-sm">Feature description goes here</p>
          </div>
        ),
        code: `<div className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 rounded-lg border border-slate-700">
  <div className="w-12 h-12 bg-slate-700 rounded-lg mb-4"></div>
  <h3 className="text-white font-bold mb-2">Feature Name</h3>
  <p className="text-gray-400">Description</p>
</div>`,
      },
    ],
  };

  const presets = designPresets[activeTab];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-5xl font-black text-white mb-4">Design Template</h1>
          <p className="text-gray-400">Explore and customize pre-built design components</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12 border-b border-slate-800">
          {(['hero', 'section', 'card'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 font-semibold transition capitalize ${
                activeTab === tab
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab}s
            </button>
          ))}
        </div>

        {/* Design Presets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {presets.map((preset) => (
            <div key={preset.id} className="space-y-4">
              <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-950">
                <div className="bg-slate-900">
                  {preset.preview}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3">{preset.name}</h3>

                {/* Code Block */}
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-xs overflow-x-auto mb-3 max-h-48">
                  <pre className="text-gray-300">{preset.code}</pre>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => copyToClipboard(preset.code)}
                    className="flex items-center gap-2 flex-1 bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                  >
                    <Copy size={16} />
                    {copied ? 'Copied!' : 'Copy Code'}
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 border border-slate-700 text-white rounded-lg hover:bg-slate-900 transition">
                    <Edit2 size={16} />
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tips */}
        <div className="mt-16 bg-slate-900 rounded-lg p-8 border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-4">Design Tips</h2>
          <ul className="space-y-2 text-gray-400">
            <li>• Use consistent spacing with 8px multiples</li>
            <li>• Keep color palette minimal: black, white, and 2-3 accent colors</li>
            <li>• Add hover effects for interactivity</li>
            <li>• Ensure sufficient contrast for readability</li>
            <li>• Test responsive design on mobile devices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
