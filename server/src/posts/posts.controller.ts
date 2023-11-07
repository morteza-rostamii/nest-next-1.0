import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

// /posts
@Controller('posts')
export class PostsController {
  // Get: /posts
  @Get('')
  public gets() {
    return ['ali', 'sara', 'morteza'];
  }

  // Get: /posts/:id
  @Get('/:id')
  public get(@Param('id') id: string) {
    return {
      id: id,
      username: 'ali',
    };
  }

  // Post: /posts
  @Post('')
  public create(@Body() body: {username: string}) {
    return 'create post';
  }

  // Put: /posts/:id
  @Put('/:id')
  public update() {
    return 'update post';
  }

  // Delete: /posts/:id
  @Delete('/:id')
  public delete() {
    return 'post deleted';
  }
}
