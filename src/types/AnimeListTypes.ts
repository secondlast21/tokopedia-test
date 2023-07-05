export interface AnimeListTypes {
  data: Data
}

export interface Data {
  Page: Page
}

export interface Page {
  media: Media[]
}

export interface Media {
  coverImage: CoverImage
  title: Title
  type: string
  popularity: number
  averageScore: number
  id: number
  characters: Characters
}

export interface Characters {
  nodes: Node[]
}

export interface Node {
  image: Image
  name: Name
  id: number
}

export interface Image {
  large: string
}

export interface Name {
  full: string
}

export interface CoverImage {
  large: string
  color: null | string
}

export interface Title {
  romaji: string
  english: string
  native: string
  userPreferred: string
}
