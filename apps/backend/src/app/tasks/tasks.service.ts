import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

/**
 * Service für CRUD-Operationen auf Tasks
 */
@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  getAllTasks(userId: string, status: string) {
    return this.prisma.task.findMany({ where: { userId: userId, status: status } });
  }

  createTask(data: { title: string; description?: string; userId: string; status: string }) {
    return this.prisma.task.create({ data });
  }

  getTaskById(id: string) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  updateTask(id: string, data: { title?: string; description?: string; status?: string }) {
    return this.prisma.task.update({ where: { id }, data });
  }
}
