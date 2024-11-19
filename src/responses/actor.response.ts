import { ApiProperty } from '@nestjs/swagger';

export class ActorResponse {
  @ApiProperty({
    description: 'Id of the actor',
  })
    id: string;

  @ApiProperty({
    description: 'First name of the actor',
  })
    firstName: string;

  @ApiProperty({
    description: 'Last name of the actor',
  })
    lastName: string;
}
