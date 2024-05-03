import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';

// class decorator
@Controller('messages')
export class MessagesController {
  // method decorator
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    console.log(body);
  }

  @Get('/:id')
  // argument decorator
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
