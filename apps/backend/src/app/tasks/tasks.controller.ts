import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthService } from '../auth/auth.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService,
    private authService: AuthService,
  ) {}

  @Get('getAllTasks')
  getAllTasks(@Req() req: any) {
    const userId = this.authService.getUserIdFromRequest(req);
    if (userId.statusCode !== 200) {
      return { statusCode: userId.statusCode, message: userId.message };
    }
    this.tasksService.getAllTasks(userId.id);
  }

  @Post('createTask')
  createTask(
    @Body() body: { title: string; description?: string },
    @Req() req: any,
  ) {
    const userId = this.authService.getUserIdFromRequest(req);
    if (userId.statusCode !== 200) {
      return { statusCode: userId.statusCode, message: userId.message };
    }
    return this.tasksService.createTask({
      title: body.title,
      description: body.description,
      userId: userId.id,
    });
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }
}
