import React from 'react';

export default function HomePage() {
  const readMore = () => {
    alert('Redirecting to full article...');
  };

  return (
    <div className="w-screen min-h-screen overflow-x-hidden overflow-y-auto font-sans bg-gray-100 text-black">
      {/* Header */}
      <header className="bg-white flex justify-between items-center px-4 md:px-12 py-5 border-b-2 border-gray-300">
        <div className="text-3xl font-bold">W.</div>
        <nav>
          <ul className="flex gap-6 font-semibold">
            <li><a href="#" className="hover:text-orange-500">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">New</a></li>
            <li><a href="#" className="hover:text-orange-500">Popular</a></li>
            <li><a href="#" className="hover:text-orange-500">Trending</a></li>
            <li><a href="#" className="hover:text-orange-500">Categories</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex gap-8 px-4 md:px-12 py-10 flex-col lg:flex-row">
        {/* Left - Main Article */}
        <section className="flex-2 lg:w-2/3">
          <img
            src="https://helloblen.com/images/blog/Exam_Tips_and_Tricks/blen-How-to-take-advantage-of-the-Mocks-to-ace-your-IBDP-header.jpg"
            alt="Web 3.0"
            className="w-full h-auto"
          />
          <div className="flex flex-col lg:flex-row justify-between items-start mt-4 gap-4" id="one">
            <div>
              <h1 className="text-2xl font-bold mb-2">The Bright Future of Web 3.0?</h1>
              <p className="text-gray-700">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              </p>
              <button
                onClick={readMore}
                className="bg-red-600 text-white px-5 py-2 mt-4 hover:bg-red-700 transition"
              >
                READ MORE
              </button>
            </div>
          </div>
        </section>

        {/* Right - Sidebar News */}
        <aside className="flex-1 bg-black text-white p-6">
          <h1 className="border-b border-gray-400 text-orange-400 text-xl font-bold pb-3 mb-4">New</h1>
          <ul className="space-y-4">
            <li>
              <strong>Hydrogen VS Electric Cars</strong>
              <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
              <hr className="my-2 border-gray-600" />
            </li>
            <li>
              <strong>The Downsides of AI Artistry</strong>
              <p>What are the possible adverse effects of AI-generated art?</p>
              <hr className="my-2 border-gray-600" />
            </li>
            <li>
              <strong>VC Funding Drying Up?</strong>
              <p>Private funding by VC firms is down 50% YOY.</p>
              <hr className="my-2 border-gray-600" />
            </li>
          </ul>
        </aside>
      </main>

      {/* Bottom Articles */}
      <section className="bg-white px-4 md:px-12 py-10 flex flex-col md:flex-row justify-around gap-6">
        {[
          {
            img: "https://c4.wallpaperflare.com/wallpaper/523/218/373/intel-chip-wallpaper-thumb.jpg",
            title: "01",
            desc: "Reviving Retro PCs",
            detail: "What happens when old PCs are given modern upgrades?",
          },
          {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSE6G25V3CNnhIYqH4zf_y8CEv8ouaaRPUxw&s",
            title: "02",
            desc: "Top 10 Laptops of 2022",
            detail: "Our best picks for various needs and budgets.",
          },
          {
            img: "https://img.freepik.com/free-psd/3d-rendering-retro-game-icon-design_23-2151866403.jpg?semt=ais_items_boosted&w=740",
            title: "03",
            desc: "The Growth of Gaming",
            detail: "How the pandemic has sparked fresh opportunities.",
          },
        ].map((article, i) => (
          <div className="flex gap-4 max-w-sm" key={i}>
            <img src={article.img} alt={`Article ${i + 1}`} className="w-[100px] h-[100px] object-cover" />
            <div className="text">
              <h3 className="text-xl text-gray-500">{article.title}</h3>
              <p>
                <strong>{article.desc}</strong><br />
                {article.detail}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}