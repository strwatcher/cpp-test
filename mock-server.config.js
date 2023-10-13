/** @type {import('mock-config-server').MockServerConfig} */
const mockServerConfig = {
  database: {
    data: {
      movies: [
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
          rating: 8.8,
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
          rating: 9.3,
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
        {
          id: 3,
          title: "The Dark Knight",
          rating: 9.0,
          duration: {
            hours: 2,
            minutes: 32,
          },
          description:
            "When the Joker terrorizes Gotham City, Batman races to stop him. The battle between the caped crusader and the Joker reaches new heights of chaos and destruction.",
          image:
            "https://imgs.search.brave.com/KaPNN8Ku6Q0g1NkNrxxfEWPGi48VhPUOidASW2qIG0U/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMS8xYy9U/aGVfRGFya19Lbmln/aHRfJTI4MjAwOF9m/aWxtJTI5LmpwZw",
          comments: [
            {
              name: "GothamFanatic",
              message: "Heath Ledger's Joker is legendary!",
            },
            {
              name: "BatFan",
              message: "A masterpiece of superhero cinema.",
            },
          ],
        },
        {
          id: 4,
          title: "Pulp Fiction",
          rating: 8.9,
          duration: {
            hours: 2,
            minutes: 34,
          },
          description:
            "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          image:
            "https://imgs.search.brave.com/ZgTTPaf2Ti6gUisoyM_SdTMau-7Uoq_-8bF4l6jOXCo/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMy8zYi9Q/dWxwX0ZpY3Rpb25f/JTI4MTk5NCUyOV9w/b3N0ZXIuanBn",
          comments: [
            {
              name: "CultCinema",
              message: "Quentin Tarantino at his best!",
            },
            {
              name: "VincentVega",
              message: "Iconic film with unforgettable characters.",
            },
          ],
        },
        {
          id: 5,
          title: "Forrest Gump",
          rating: 8.8,
          duration: {
            hours: 2,
            minutes: 22,
          },
          description:
            "The story of a man with low intelligence who achieves great success in life through a series of unlikely events and coincidences.",
          image:
            "https://imgs.search.brave.com/sLzQMENWVtij9Ija35Y438KOd7YIm3d3FnGEJcrV3tQ/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ni82Ny9Gb3JyZXN0/X0d1bXBfcG9zdGVy/LmpwZy81MTJweC1G/b3JyZXN0X0d1bXBf/cG9zdGVyLmpwZw",
          comments: [
            {
              name: "LifeIsLikeABox",
              message: "Heartwarming and inspirational!",
            },
            {
              name: "JennyCurran",
              message: "A classic that never gets old.",
            },
          ],
        },
        {
          id: 6,
          title: "The Matrix",
          rating: 8.7,
          duration: {
            hours: 2,
            minutes: 16,
          },
          description:
            "A computer hacker learns that reality as he knows it is a simulation created by machines. He joins a group of rebels in their fight against the machines.",
          image:
            "https://imgs.search.brave.com/802j2kp2LC2Bhrhb22cmiylAhquf1IOD3QmbE8vKs74/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Yy9jMS9UaGVfTWF0/cml4X1Bvc3Rlci5q/cGcvNTEycHgtVGhl/X01hdHJpeF9Qb3N0/ZXIuanBn",
          comments: [
            {
              name: "Neo123",
              message: "Red pill or blue pill? Mind-blowing!",
            },
            {
              name: "Morpheus",
              message: "Welcome to the real world.",
            },
          ],
        },
        {
          id: 7,
          title: "The Lord of the Rings: The Fellowship of the Ring",
          rating: 8.8,
          duration: {
            hours: 2,
            minutes: 58,
          },
          description:
            "A young hobbit, Frodo Baggins, embarks on a journey to destroy a powerful ring and save Middle-earth from the dark lord Sauron.",
          image:
            "https://imgs.search.brave.com/iMA7gTsTuzjkFPt6cLi70Zl1zin7BNoYAarirHyIaWM/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/OC84YS9UaGVfTG9y/ZF9vZl90aGVfUmlu/Z3MlMkNfVEZPVFJf/JTI4MjAwMSUyOS5q/cGcvNTEycHgtVGhl/X0xvcmRfb2ZfdGhl/X1JpbmdzJTJDX1RG/T1RSXyUyODIwMDEl/MjkuanBn",
          comments: [
            {
              name: "RingBearer",
              message: "Epic fantasy adventure at its finest!",
            },
            {
              name: "Gandalf",
              message: "You shall not pass...without watching this film!",
            },
          ],
        },
        {
          id: 8,
          title: "Gladiator",
          rating: 8.5,
          duration: {
            hours: 2,
            minutes: 35,
          },
          description:
            "A betrayed Roman general seeks revenge against the corrupt emperor who murdered his family and sent him into slavery.",
          image:
            "https://imgs.search.brave.com/BeogayuSuWOyBT6SvGmrBuuOUye7dNa_oadEcoMmFgk/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Zi9mYi9HbGFkaWF0/b3JfJTI4MjAwMF9m/aWxtX3Bvc3RlciUy/OS5wbmcvNTEycHgt/R2xhZGlhdG9yXyUy/ODIwMDBfZmlsbV9w/b3N0ZXIlMjkucG5n",
          comments: [
            {
              name: "MaximusDecimus",
              message: "Are you not entertained? A classic!",
            },
            {
              name: "Commodus",
              message: "My favorite film, for obvious reasons!",
            },
          ],
        },
        {
          id: 9,
          title: "The Godfather",
          rating: 9.2,
          duration: {
            hours: 2,
            minutes: 55,
          },
          description:
            "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          image:
            "https://imgs.search.brave.com/nic94vSuyBFfojmNq2xYUI8CDnD5TLXT5SPc1vJxaV8/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMS8xYy9H/b2RmYXRoZXJfdmVy/MS5qcGc",
          comments: [
            {
              name: "DonCorleone",
              message: "An offer you can't refuse: watch this film!",
            },
            {
              name: "MichaelCorleone",
              message: "A timeless classic with an unforgettable cast.",
            },
          ],
        },
        {
          id: 10,
          title: "Schindler's List",
          rating: 8.9,
          duration: {
            hours: 3,
            minutes: 15,
          },
          description:
            "In German-occupied Poland during World War II, a businessman named Oskar Schindler saves the lives of more than a thousand Polish-Jewish refugees from the Holocaust.",
          image:
            "https://imgs.search.brave.com/3bzzkT_BPVTMT2x33obM1MQeFcEgD1kGN3lPOu8e-nM/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vMy8zOC9T/Y2hpbmRsZXIlMjdz/X0xpc3RfbW92aWUu/anBn",
          comments: [
            {
              name: "OskarSchindler",
              message: "A powerful and moving tribute to courage and humanity.",
            },
            {
              name: "HistoryBuff",
              message: "A film that leaves a lasting impact.",
            },
          ],
        },
      ],
    },
  },
};

export default mockServerConfig;
