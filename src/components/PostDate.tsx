export function formatPostDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function PostDate({ date }: { date: string }) {
  return (
    <time
      dateTime={date}
      className="bg-white/10 border border-white/20 text-sand-light/70 text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full"
    >
      {formatPostDate(date)}
    </time>
  );
}
