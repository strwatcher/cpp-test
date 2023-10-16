import z from "zod";

export const DurationContract = z.object({
  hours: z.number(),
  minutes: z.number(),
});
export type Duration = z.infer<typeof DurationContract>;

export function formatDuration(duration: Duration) {
  return `${duration.hours}:${duration.minutes}`;
}
