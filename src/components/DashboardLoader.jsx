const DashboardLoader = () => {
  return (
    <section className="min-h-[calc(100dvh-5rem)] align-content-center my-16">
      <div className="animate-pulse ">
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8">
          <div className="bg-slate-400 h-32 w-full rounded-lg"></div>
          <div className="bg-slate-400 h-32 w-full rounded-lg"></div>
          <div className="bg-slate-400 h-32 w-full rounded-lg"></div>
          <div className="bg-slate-400 h-32 w-full rounded-lg"></div>
        </div>
        <div className="my-12 grid md:grid-cols-2 gap-x-8 gap-y-4">
          <div className="bg-slate-400 h-64 w-full rounded-lg"></div>
          <div className="bg-slate-400 h-64 w-full rounded-lg"></div>
        </div>
        <div className="grid gap-x-8 gap-y-4 lg:grid-cols-2">
          <div className="bg-slate-400 h-64 w-full rounded-lg"></div>
          <div className="bg-slate-400 h-64 w-full rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
export default DashboardLoader;
