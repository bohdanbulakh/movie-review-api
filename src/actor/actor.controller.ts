import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { ApiBadRequestResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ActorResponse } from '../responses/actor.response';

@Controller('actors')
export class ActorController {
  constructor (private readonly actorService: ActorService) {}

  @ApiOperation({
    summary: 'Create a new actor',
  })
  @ApiOkResponse({
    type: ActorResponse,
  })
  @ApiBadRequestResponse({
    description: `\n
    InvalidBodyException:
      First name must be shorter than 50 characters long
      First name must be at least 3 characters long
      First name must be a string
      First name cannot be empty
      Last name must be shorter than 50 characters long
      Last name must be at least 3 characters long
      Last name must be a string
      Last name cannot be empty`,
  })
  @Post()
  create (@Body() createActorDto: CreateActorDto) {
    return this.actorService.create(createActorDto);
  }

  @Get()
  findAll () {
    return this.actorService.findAll();
  }

  @Get(':id')
  findOne (@Param('id') id: string) {
    return this.actorService.findOne(id);
  }

  @Patch(':id')
  update (@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorService.update(id, updateActorDto);
  }

  @Delete(':id')
  remove (@Param('id') id: string) {
    return this.actorService.remove(id);
  }
}
