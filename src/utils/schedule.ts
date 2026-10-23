/** Horario habitual, no disponibilidad ni stock en tiempo real. */
export function isWithinServiceHours(
  date: Date,
  opens: string,
  closes: string,
): boolean {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Montevideo",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const minutes =
    Number(parts.find((p) => p.type === "hour")!.value) * 60 +
    Number(parts.find((p) => p.type === "minute")!.value);
  const toMinutes = (time: string) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };
  const start = toMinutes(opens),
    end = toMinutes(closes);
  return start > end
    ? minutes >= start || minutes < end
    : minutes >= start && minutes < end;
}
