import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User | null> {
    const existingUser = await this.userRepository.findOne({ where: { id } });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    return existingUser;
  }

  async findOneByEmail(email: string): Promise<User | null> {
    const existingUser = this.userRepository.findOne({ where: { email } });

    if (!existingUser) {
      throw new NotFoundException('Email not found');
    }

    return existingUser;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.findOneByEmail(createUserDto.email);

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    return await this.userRepository.save(createUserDto);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<void> {
    const existingUser = await this.findOne(id);

    if (existingUser.email !== updateUserDto.email) {
      const existingUser = await this.findOneByEmail(updateUserDto.email);

      if (existingUser) {
        throw new BadRequestException('Email already in use');
      }
    }

    await this.userRepository.update(id, updateUserDto);

    throw new HttpException('User Updated', HttpStatus.OK);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.userRepository.delete(id);

    throw new HttpException('User deleted', HttpStatus.OK);
  }
}
