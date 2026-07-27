import { useState } from "react";

const tabs = [
  {
    id: "institution",
    label: "Choose Your Institution",
    url: "/mmu-cate",
    icon: "\uD83C\uDFEB",
    bgColor: "#014fa1",
    imgUrl: "https://www.mmu.edu.my/wp-content/themes/mmu2018/assets/images/logo-mmu2x.png",
  },
  {
    id: "gallery",
    label: "All Photos & Videos",
     url: "/ukm-user",
    icon: "\uD83C\uDFA5",
    bgColor: "#d5a229",
    imgUrl:
      "https://www.ukm.my/portalukm/wp-content/uploads/2022/07/UKMBF.png",
  },
];

const institutions = [
  { name: "MMU", sessions: "12 sessions", albums: "145 photos" },
  { name: "UKM", sessions: "8 sessions", albums: "96 photos" },
];


const Photocateukm = () => {
  const [activeTab, setActiveTab] = useState("institution");

  return (
    <section className="relative isolate min-h-screen w-full overflow-x-hidden bg-blue-50">
      <div className="mx-auto w-full max-w-7xl mt-20 lg:mt-26  p-3  lg:p-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 sm:text-sm">
            {"\uD83D\uDCC1"} Photo Access
          </span>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Browse Conference Memories
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Select your institution or explore the complete media archive. All content is organized
            for quick access and easy sharing.
          </p>
        </div>

        <div className="mt-8 rounded-2xl  bg-slate-200  p-2">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition sm:text-base ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
                  }`}
                >
                  <span aria-hidden="true">{tab.icon}</span>
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          {activeTab === "institution" ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {institutions.map((item, index) => {
                const cardTheme = tabs[index % tabs.length];

                return (
                  <article
                    key={item.name}
                    className="overflow-hidden  rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div
                      className="flex items-center justify-between px-5 py-4"
                      style={{ backgroundColor: cardTheme.bgColor }}
                    >
                      <span className="text-sm font-semibold uppercase tracking-wide text-white">
                        {/* {cardTheme.icon} Institution */}  {item.name}
                      </span>
                      <img
                        src={cardTheme.imgUrl}
                        alt={`${item.name} logo`}
                        className="h-8 w-auto rounded bg-white/95 p-1"
                      />
                    </div>

                    <div className="p-5 flex items-start text-center justify-center">
                      {/* <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                      <p className="mt-2 text-sm text-slate-600">{item.sessions}</p>
                      <p className="text-sm text-slate-600">{item.albums}</p> */}
                      <a
                        href={cardTheme.url}
                        type="button"
                        className="  no-underline inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700 sm:text-sm"
                      >
                        Click Here to View
                        <span aria-hidden="true">{"\u27A1\uFE0F"}</span>
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="overflow-hidden grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="">
                <article className="rounded-2xl  items-center text-center justify-center border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">All Photos</h3>
                  <p className="mt-2 text-sm text-slate-600">1031 photos</p>
                  <a
                    href="https://photos.app.goo.gl/KE2emoBNCU8AdPTs6"
                    target="_blank"
                    rel="noreferrer"
                    type="button"
                    className="no-underline mt-4 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700 sm:text-sm"
                  >
                    Open Drive
                  </a>
                </article>
              </div>
              <div className="">
                <article className="rounded-2xl  items-center text-center justify-center border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">All Videos</h3>
                  <p className="mt-2 text-sm text-slate-600">32 Videos</p>
                  <a
                    href="https://photos.app.goo.gl/RNJJeuvdhyA2ukEM6"
                    target="_blank"
                    rel="noreferrer"
                    type="button"
                    className="no-underline mt-4 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700 sm:text-sm"
                  >
                    Open Drive
                  </a>
                </article>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Photocateukm;
