import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  getAllTasks(userId: string) {
    return this.prisma.task.findMany({
      where: {
        userId: userId,
      },
    });
  }

  createTask(data: { title: string; description?: string; userId: string }) {
    return this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        userId: data.userId,
      },
    });
  }

  getTaskById(id: string) {
    return this.prisma.task.findUnique({ where: { id } });
  }
}
