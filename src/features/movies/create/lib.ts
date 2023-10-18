import { PostMovieMutationParams } from "@/shared/api/movies";

export type PostMovieForm = {
  title: string;
  description: string;
  minutes: number | "";
  hours: number | "";
  rating: number;
  image: string;
};

export function mapFormToDto(
  formValue: PostMovieForm
): PostMovieMutationParams {
  return {
    body: {
      title: formValue.title,
      description: formValue.description,
      rating: formValue.rating,
      image: formValue.image,
      duration: {
        minutes: parseInt(formValue.minutes.toString()),
        hours: parseInt(formValue.hours.toString()),
      },
    },
  };
}
