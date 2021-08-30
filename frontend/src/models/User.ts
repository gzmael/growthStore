export type User = {
  id: string
  email: string
  name: string
  avatar_url?: string
  favorites: Favorite[]
  created_at: Date
  updated_at: Date
}

export type Favorite = {
  id: string
  user_id: string
  source_id: string
  source_type: 'pets' | 'candys'
  created_at: Date
}
