import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreatePlayerDTO } from './dtos/createPlayer.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
  private players: Player[] = [];

  private readonly logger = new Logger(PlayersService.name);

  async createAndUpdatePlayer({
    name,
    email,
    phone,
  }: CreatePlayerDTO): Promise<void> {
    this.logger.log('AQUI', { name, email, phone });
    this.create({ name, email, phone });
  }

  private create({ name, email, phone }: CreatePlayerDTO): void {
    const player: Player = {
      _id: uuid(),
      name,
      email,
      phone,
      avatarUrl: 'https://avatars.githubusercontent.com/u/52337444?v=4',
      ranking: 'A',
      rankingPosition: 0,
    };

    this.players.push(player);
  }
}