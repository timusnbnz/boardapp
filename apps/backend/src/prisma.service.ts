import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import prismaCacheMiddleware from 'prisma-cache-middleware';
import Redis from 'ioredis';

/**
 * Service für den Datenbankzugriff via Prisma ORM mit Redis-Caching
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private redis = new Redis();

  constructor() {
    super();
    this.$use(
      prismaCacheMiddleware({
        redisOptions: {
          host: 'localhost',
          port: 6379,
        },
        instances: [
          {
            model: 'User',
            action: 'findFirst',
            ttl: 20,            // Cache-Lebensdauer in Sekunden
            keyPrefix: 'myCache',
          },
          {
            model: 'User',
            action: 'findMany',
          },
        ],
      }),
    );
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.redis.disconnect();
  }
}
