import { Movie } from "../api/movies";

export const movies: Movie[] = [
  {
    id: 0,
    title: "Barbie",
    rating: 4.7,
    duration: {
      hours: 1,
      minutes: 47,
    },
    description:
      'Stereotypical Barbie ("Barbie") and fellow dolls reside in Barbieland, a matriarchal society populated by different versions of Barbies, Kens, and a group of discontinued models, who are treated like outcasts due to their unconventional traits. While the Kens spend their days playing at the beach, considering it their profession, the Barbies hold prestigious jobs such as doctor, lawyer, and politician. Beach Ken ("Ken") is only happy when he is with Barbie and seeks a closer relationship, but Barbie rebuffs him in favor of other activities and female friendships.',
    image:
      "https://imgs.search.brave.com/vFfdOpfIzwM8vIttO_Y-NEw9mRBX0xwM1HnJnOsKfEU/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMC8wYi9C/YXJiaWVfMjAyM19w/b3N0ZXIuanBn",
    comments: [
      {
        name: "Anonim",
        message: "Good film",
      },
    ],
  },
  {
    id: 1,
    title: "Inception",
    rating: 4.4,
    duration: {
      hours: 2,
      minutes: 28,
    },
    description:
      "A thief who enters the dreams of others to steal their secrets gets one last job: implanting an idea into a CEO's mind. As they go deeper into the subconscious, the line between dreams and reality blurs.",
    image:
      "https://imgs.search.brave.com/4H2evMIxcR3Q41kFyP6z1b00o03YURK1U9Pg_g54vgI/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMi8yZS9J/bmNlcHRpb25fJTI4/MjAxMCUyOV90aGVh/dHJpY2FsX3Bvc3Rl/ci5qcGc",
    comments: [
      {
        name: "Cinephile123",
        message: "A mind-bending masterpiece!",
      },
      {
        name: "DreamWeaver",
        message: "One of the best sci-fi films ever.",
      },
    ],
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    rating: 4.65,
    duration: {
      hours: 2,
      minutes: 22,
    },
    description:
      "Two imprisoned men form a strong friendship while coping with brutal conditions in Shawshank prison. They bond over hope and a shared dream of freedom.",
    image:
      "https://imgs.search.brave.com/dU5hzLJuCWhVLQbGyhCWozFlNPUiiFFKBz86F61zqFQ/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vOC84MS9T/aGF3c2hhbmtSZWRl/bXB0aW9uTW92aWVQ/b3N0ZXIuanBn",
    comments: [
      {
        name: "MovieBuff99",
        message: "An absolute classic!",
      },
      {
        name: "FreedomSeeker",
        message: "Redemption at its finest.",
      },
    ],
  },
];
