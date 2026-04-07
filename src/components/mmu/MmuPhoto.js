import { useState } from "react";

const tabList = [
  { id: "person", label: "Person Wise Access" },
  { id: "photos", label: "All Photos" },
  { id: "videos", label: "All Video" },
];

const photoItems = [{ title: "All Photos", count: "236 photos" }];

const videoItems = [{ title: "All Videos", duration: "48 Videos" }];

const personItems = [
  {
    name: "11",
    files: "1 photo",
    imageUrl:
      "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775384550/WhatsApp_Image_2026-04-05_at_6.22.06_PM_iz904x.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/1UXfpwXQjkWALRyk9RdsPFbWvATMePgbx?usp=sharing",
  },
  {
    name: "16",
    files: "1 photo",
    imageUrl:
      "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775384494/WhatsApp_Image_2026-04-05_at_6.19.07_PM_mkw2cj.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/14zvuH-NDybVgaMZr9a_9OlLH8qYdpYk4?usp=sharing",
  },
  {
    name: "44",
    files: "1 photo",
    imageUrl:
      "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775384494/WhatsApp_Image_2026-04-05_at_6.19.08_PM_2_iadl27.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/1Lswj5RtUBB2v_MSinSSRUaFumSK1W-3E?usp=sharing",
  },
  {
    name: "20",
    files: "1 photo",
    imageUrl:
      "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775384550/WhatsApp_Image_2026-04-05_at_6.19.09_PM_1_g1tgec.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/10LJirfc9x2CU2AMjJmNYnfsXOKWs07dT?usp=sharing",
  },
  {
    name: "15",
    files: "1 photo",
    imageUrl:
      "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775384493/WhatsApp_Image_2026-04-05_at_6.19.08_PM_1_g5zpwl.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/1ig-r0Nu0lUxyOsaFyzVT5B1tTbB825Og?usp=sharing",
  },
  {
    name: "15",
    files: "1 photo",
    imageUrl:
      "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775384493/WhatsApp_Image_2026-04-05_at_6.20.31_PM_xyvdlv.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/1tJE2ai_hQs4iEGTC90YHZ_OAK3shtx7G?usp=sharing",
  },
  {
    name: "7",
    files: "1 photo",
    imageUrl:
      "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775384494/WhatsApp_Image_2026-04-05_at_6.19.08_PM_nflfgv.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/1zZR4lRHSVMtANOGqkYYQTDMXPgcu0PUg?usp=sharing",
  },
  {
    name: "35",
    files: "1 photo",
    imageUrl:
      "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775384494/WhatsApp_Image_2026-04-05_at_6.19.09_PM_ku7rqe.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/1aHhZ8EMFuycrHDsChwe0YljTh2LmKwuP?usp=sharing",
  },
  {
    name: "10",
    files: "1 photo",
    imageUrl:
      "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775384718/WhatsApp_Image_2026-04-05_at_6.24.32_PM_cwtaw8.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/1o1OmG-AuYWBse2lV5j0B1VaLgYtYrKVc?usp=sharing",
  },
  {
    name: "15",
    files: "1 photo",
    imageUrl:
      "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775389921/WhatsApp_Image_2026-04-05_at_7.47.37_PM_wyvemu.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/1svA_2cpiGhSLzDz37HQYoRgUqSfnueuT?usp=sharing",
  },
];

const MmuPhoto = () => {
  const [activeTab, setActiveTab] = useState("person");

  return (
    <section className="relative isolate min-h-screen w-screen overflow-hidden  bg-blue-50  ">
      <div className="mx-auto w-full max-w-6xl    p-3   md:p-8">
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            MMU Media Access
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Browse all photos, all videos, or use person-wise access to find specific event files
            quickly.
          </p>
        </div>

        <div className="mt-8 rounded-2xl bg-slate-200 p-2">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
            {tabList.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition sm:text-base ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          {activeTab === "photos" ? (
            <div className="grid grid-cols-1 ">
              {photoItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl items-center text-center justify-center border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.count}</p>
                  <a
                    href="https://drive.google.com/drive/folders/1-dhCfAz2cL7dsBmjtzmaSh_F5SxT2GEA?usp=sharing" target="_blank" rel="noreferrer"
                    className="no-underline mt-4 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700 sm:text-sm"
                  >
                    Open Drive
                  </a>
                </article>
              ))}
            </div>
          ) : null}

          {activeTab === "videos" ? (
            <div className="grid grid-cols-1 ">
              {videoItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl  items-center text-center justify-center border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.duration}</p>
                  <a
                    href="https://drive.google.com/drive/folders/1nIft1RLBo-kD0ssdmehYuldb0YT3xnFA?usp=sharing"
                    target="_blank" rel="noreferrer"
                    type="button"
                    className="no-underline mt-4 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700 sm:text-sm"
                  >
                    Open Drive
                  </a>
                </article>
              ))}
            </div>
          ) : null}

          {activeTab === "person" ? (
            <div className="grid grid-cols-2 gap-2 lg:gap-3   lg:grid-cols-3 xl:grid-cols-4">
              {personItems.map((item) => (
                <article
                  key={item.name}
                  className="group overflow-hidden rounded border border-slate-200 bg-white shadow-sm ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-blue-200"
                >
                  <a
                    href={item.driveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block overflow-hidden"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-44 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/65 via-slate-900/20 to-transparent p-3">
                      <span className="inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-800">
                        Photo Preview
                      </span>
                    </div> */}
                  </a>

                  <div className="p-3">
                    <h3 className="text-base font-semibold text-slate-900 sm:text">
                      Total photos: {item.name}
                    </h3>
                    <p className="  text-xs text-slate-500 sm:text-sm">
                      High-resolution file available
                    </p>

                    <a
                      href={item.driveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 no-underline inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 sm:text-sm"
                    >
                      Access File
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default MmuPhoto;
