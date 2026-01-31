export type AuthorKey = "mario";

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
  position?: string;
  website?: string;
  twitter?: string;
  github?: string;
}

export const authors: Record<AuthorKey, Author> = {
  mario: {
    name: "Mario Arranz",
    avatar: "/images/mario-suit.jpeg",
    position: "Backend Developer",
    bio: "Backend engineer focused on reliability, APIs, and pragmatic AI integrations.",
    website: "https://marioarranz.com",
    twitter: "marioarranzr",
    github: "marioarranzr",
  },
};

export function getAuthor(key: AuthorKey): Author {
  return authors[key];
}

export function isValidAuthor(key: string): key is AuthorKey {
  return key in authors;
}
