import {
  createJsonMutation,
  createJsonQuery,
  declareParams,
} from "@farfetched/core";
import { zodContract } from "@farfetched/zod";
import { Id, IdContract } from "@/shared/config/common";
import { z } from "zod";
import { combineUrl } from "../common";
import { DurationContract } from "@/shared/lib/duration";

export const CommentContract = z.object({
  name: z.string(),
  message: z.string(),
});
export type Comment = z.infer<typeof CommentContract>;

export const MovieContract = z.object({
  id: IdContract,
  title: z.string(),
  rating: z.number(),
  duration: DurationContract,
  description: z.string(),
  image: z.string(),
  comments: z.array(CommentContract),
});
export type Movie = z.infer<typeof MovieContract>;

export const GetMoviesResponseContract = z.array(MovieContract);
export const getMoviesQuery = createJsonQuery({
  params: declareParams(),
  initialData: [],
  request: {
    method: "GET",
    url: combineUrl({ resource: "movies" }),
  },
  response: {
    contract: zodContract(GetMoviesResponseContract),
  },
});

export type GetOneMovieQueryParams = { id: Id };
export const GetOneMovieResponseContract = MovieContract;
export const getOneMovieQuery = createJsonQuery({
  params: declareParams<GetOneMovieQueryParams>(),
  initialData: {} as Movie,
  request: {
    method: "GET",
    url: ({ id }) => combineUrl({ resource: "movies", other: `${id}` }),
  },
  response: {
    contract: zodContract(GetOneMovieResponseContract),
  },
});

export type PostMovieMutationParams = {
  body: Omit<Movie, "id" | "comments">;
};
export const PostMovieResponseContract = z.any();
export const postMovieMutation = createJsonMutation({
  params: declareParams<PostMovieMutationParams>(),
  request: {
    method: "POST",
    url: combineUrl({ resource: "movies" }),
    body: ({ body }) =>
    ({
      ...body,
      comments: [],
      id: new Date().getUTCMilliseconds(),
    } satisfies Movie),
  },
  response: {
    contract: zodContract(PostMovieResponseContract),
  },
});

export type RateMovieMutationParams = {
  query: {
    id: Id;
  };
  body: {
    rating: number;
  };
};
export const RateMovieResponseContract = z.any();
export const rateMovieMutation = createJsonMutation({
  params: declareParams<RateMovieMutationParams>(),
  request: {
    method: "PATCH",
    url: ({ query }) =>
      combineUrl({ resource: "movies", other: `${query.id}` }),
    body: ({ body }) => body,
  },
  response: {
    contract: zodContract(RateMovieResponseContract),
  },
});

export type PostCommentToMovieMutationParams = {
  query: {
    id: Id;
  };
  body: {
    comments: Comment[];
  };
};

export const PostCommentToMovieResponseContract = z.any();
export const postCommentToMovieMutation = createJsonMutation({
  params: declareParams<PostCommentToMovieMutationParams>(),
  request: {
    method: "PATCH",
    url: ({ query }) =>
      combineUrl({ resource: "movies", other: `${query.id}` }),
    body: ({ body }) => body,
  },
  response: {
    contract: zodContract(PostCommentToMovieResponseContract),
  },
});
