export type KeyValuePair<V = any> = {
  [key: string]: V
}

export type Nullable<T> = T | null | undefined