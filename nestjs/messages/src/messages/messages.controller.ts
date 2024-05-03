import { Body, Controller, Get, Param, Post } from '@nestjs/common';

// class decorator
@Controller('messages')
export class MessagesController {
  // method decorator
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  // argument decorator
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
