import { Movie } from "@/shared/api/movies";
import { durationToMinutes } from "@/shared/lib/duration";

export type SortParams = {
  field: keyof Pick<Movie, "duration" | "rating" | "title">;
  order: "desc" | "asc";
};

export const orderData: Record<SortParams["order"], string> = {
  desc: "(desc)",
  asc: "(asc)",
};

export function serializeSortParams(params: SortParams | null) {
  if (!params) return "";
  return `${params.field}.${params.order}`;
}
export function deserializeSortParams(raw: string | null): SortParams | null {
  if (!raw) return null;
  const spliten = raw.split(".");
  if (
    (spliten[0] !== "title" &&
      spliten[0] !== "rating" &&
      spliten[0] !== "duration") ||
    (spliten[1] !== "asc" && spliten[1] !== "desc")
  )
    return null;

  return {
    field: spliten[0],
    order: spliten[1],
  };
}

export const sortParamsData = [
  {
    value: serializeSortParams({ field: "rating", order: "asc" }),
    label: "By rating (asc)",
  },
  {
    value: serializeSortParams({ field: "rating", order: "desc" }),
    label: "By rating (desc)",
  },
  {
    value: serializeSortParams({ field: "duration", order: "asc" }),
    label: "By duration (asc)",
  },
  {
    value: serializeSortParams({ field: "duration", order: "desc" }),
    label: "By duration (desc)",
  },
  {
    value: serializeSortParams({ field: "title", order: "asc" }),
    label: "By title (asc)",
  },
  {
    value: serializeSortParams({ field: "title", order: "desc" }),
    label: "By title (desc)",
  },
];

export function sortMovies(movies: Movie[], sortBy: SortParams | null) {
  const moviesCopy = [...movies];

  if (!sortBy) return moviesCopy;

  moviesCopy.sort((a, b) => {
    if (sortBy.field === "duration") {
      return sortBy.order === "desc"
        ? durationToMinutes(b.duration) - durationToMinutes(a.duration)
        : durationToMinutes(a.duration) - durationToMinutes(b.duration);
    }
    return sortBy.order === "desc"
      ? a[sortBy.field] < b[sortBy.field]
        ? 1
        : -1
      : a[sortBy.field] > b[sortBy.field]
        ? 1
        : -1;
  });
  return moviesCopy;
}
