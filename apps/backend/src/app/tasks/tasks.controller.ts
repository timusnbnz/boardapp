import { Controller, Get, Post, Body, Param, Req, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthService } from '../auth/auth.service';

@Controller('tasks')
export class TasksController {
  constructor(
    private tasksService: TasksService,
    private authService: AuthService,
  ) {}

  @Get('getTasks')
  getAllTasks(@Req() req: any, @Query('status') status: string) {
    const userId = this.authService.getUserIdFromRequest(req);
    if (userId.statusCode !== 200) return { statusCode: userId.statusCode, message: userId.message };
    return this.tasksService.getAllTasks(userId.id, status);
  }

  @Post('createTask')
  createTask(@Body() body: { title: string; description?: string; status?: string }, @Req() req: any) {
    const userId = this.authService.getUserIdFromRequest(req);
    if (userId.statusCode !== 200) return { statusCode: userId.statusCode, message: userId.message };
    return this.tasksService.createTask({
      title: body.title,
      description: body.description,
      userId: userId.id,
      status: body.status,
    });
  }

  @Get('getTask:id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getTaskById(id);
  }

  @Post('updateTask:id')
  updateTask(
    @Param('id') id: string,
    @Body() body: { title?: string; description?: string; status?: string },
    @Req() req: any,
  ) {
    const userId = this.authService.getUserIdFromRequest(req);
    if (userId.statusCode !== 200) return { statusCode: userId.statusCode, message: userId.message };
    return this.tasksService.updateTask(id, body);
  }
}
