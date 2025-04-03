import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  getAllTasks() {
    return this.prisma.task.findMany();
  }

  createTask(data: { title: string; description?: string; userId: string }) {
    return this.prisma.task.create({ data });
  }

  getTaskById(id: string) {
    return this.prisma.task.findUnique({ where: { id } });
  }
}