import { IRepository } from '../../domain/repositories/i-repository.interface';
import { PrismaService } from '../database/prisma/prisma.service';

export abstract class BaseRepository<T> implements IRepository<T> {
  constructor(protected readonly prisma: PrismaService) {}

  abstract findById(id: string): Promise<T | null>;
  abstract findAll(): Promise<T[]>;
  abstract create(data: Partial<T>): Promise<T>;
  abstract update(id: string, data: Partial<T>): Promise<T>;
  abstract delete(id: string): Promise<void>;
}
