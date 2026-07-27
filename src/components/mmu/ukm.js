const UKM = () => {
  return (
    <section className="relative isolate min-h-screen w-screen overflow-hidden bg-blue-50">
      <div className="mx-auto w-full max-w-6xl p-3 md:p-8">
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            UKM Media Access
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Browse all photos, all videos, or use person-wise access to find specific event files
            quickly.
          </p>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1">
            <article className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Find your photos</h3>
                <p className="mt-2 text-sm text-slate-600">Picture:981</p>
                <a
                  href="https://photos.app.goo.gl/2cEwgDxHgUBv9kwr5"
                  target="_blank"
                  rel="noreferrer"
                  type="button"
                  className="no-underline mt-4 inline-flex rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-slate-700 sm:text-sm"
                >
                  Open Drive
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UKM;
