import { List } from 'postcss/lib/list';

interface BaseCollection<T> {
  findAll(): Promise<T>;

  insert(data: T);
}

export type { BaseCollection };