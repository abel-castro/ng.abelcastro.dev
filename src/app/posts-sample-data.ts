export const POST_SAMPLE_DATA = {
  count: 18,
  next: 'https://abelcastro.dev/api/posts/?page=2',
  previous: null,
  results: [
    {
      title: 'Next.js Dashboard Tutorial with a Local Database',
      slug: 'nextjs-dashboard-local-db',
      meta_description:
        'Set up a Next.js Dashboard tutorial with a local database using Docker. See the repository for details: https://github.com/abel-castro/nextjs-dashboard',
      content:
        "I recently followed the Next.js Dashboard tutorial (https://nextjs.org/learn/dashboard-app) and made a few modifications to run the database locally using Docker instead of Vercel's DB hosting. You can check out my repository here: https://github.com/abel-castro/nextjs-dashboard\r\n\r\nI hope this can be useful for someone!\r\n\r\nHappy coding!",
      date: '2024-06-11',
      tags: [
        {
          name: 'TypeScript',
        },
        {
          name: 'Next.js',
        },
      ],
    },
    {
      title: 'Learn NestJS with MikroORM by Creating a Blog Project',
      slug: 'learn-nestjs-with-mikroorm-by-creating-a-blog',
      meta_description:
        'Discover how to build a blog with NestJS and MikroORM in this step-by-step tutorial. Learn to integrate a PostgreSQL database using Docker and develop a full-featured backend API with this powerful Node.js framework.',
      content:
        "In the world of Node.js, frameworks like [NestJS](https://nestjs.com)  have transformed the landscape of building server-side applications by introducing a scalable, maintainable, and modular architecture. Coupled with MikroORM, an intuitive TypeScript ORM, you get a powerful duo that promotes code reliability and database management. This post will guide you through setting up a simple blog application using NestJS and [MikroORM](https://mikro-orm.io).\r\n\r\n## Prerequisites\r\n\r\nBefore we dive in, ensure you have the following installed:\r\n- Node.js\r\n- Docker (for running the PostgreSQL database)\r\n\r\n\r\n## Step 1: Setting Up Your NestJS Project\r\n\r\nFirst, install the NestJS CLI globally, if you haven't already:\r\n\r\n```bash\r\nnpm install -g @nestjs/cli\r\n```\r\n\r\nCreate a new project:\r\n\r\n```bash\r\nnest new blog-nest\r\n```\r\n\r\nNavigate to your project directory:\r\n\r\n```bash\r\ncd blog-nest\r\n```\r\n\r\n## Step 2: Integrating MikroORM\r\n\r\nInstall MikroORM and the PostgreSQL driver:\r\n\r\n```bash\r\nnpm install @mikro-orm/core @mikro-orm/nestjs @mikro-orm/postgresql pg\r\n```\r\n\r\nCreate a `mikro-orm.config.ts` at the root of your project to configure MikroORM:\r\n\r\n```typescript\r\nimport { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';\r\nimport { Post } from './src/posts/post.entity';\r\n\r\nconst config: MikroOrmModuleSyncOptions = {\r\n  entities: [Post],\r\n  dbName: 'blog',\r\n  type: 'postgresql',\r\n  user: 'test',\r\n  password: 'test',\r\n};\r\n\r\nexport default config;\r\n```\r\n\r\n## Step 3: Running PostgreSQL in Docker\r\n\r\nSet up a `docker-compose.yml` file to run PostgreSQL:\r\n\r\n```yaml\r\nversion: '3.8'\r\nservices:\r\n  postgres:\r\n    image: postgres:latest\r\n    environment:\r\n      POSTGRES_DB: blog\r\n      POSTGRES_USER: test\r\n      POSTGRES_PASSWORD: test\r\n    ports:\r\n      - \"5432:5432\"\r\n    volumes:\r\n      - postgres-data:/var/lib/postgresql/data\r\nvolumes:\r\n  postgres-data:\r\n```\r\n\r\nStart your PostgreSQL database:\r\n\r\n```bash\r\ndocker-compose up -d\r\n```\r\n\r\n## Step 4: Building the Blog API\r\n\r\nDefine your Post entity:\r\n\r\n```typescript\r\nimport { Entity, PrimaryKey, Property } from '@mikro-orm/core';\r\n\r\n@Entity()\r\nexport class Post {\r\n  @PrimaryKey()\r\n  id!: number;\r\n  @Property()\r\n  title!: string;\r\n  @Property()\r\n  content!: string;\r\n}\r\n```\r\n\r\nCreate the Posts module, service, and controller to handle CRUD operations.\r\n\r\n### Posts Module\r\n\r\n```typescript\r\nimport { Module } from '@nestjs/common';\r\nimport { MikroOrmModule } from '@mikro-orm/nestjs';\r\nimport { PostsController } from './posts.controller';\r\nimport { PostsService } from './posts.service';\r\nimport { Post } from './post.entity';\r\n\r\n@Module({\r\n  imports: [MikroOrmModule.forFeature([Post])],\r\n  controllers: [PostsController],\r\n  providers: [PostsService],\r\n})\r\nexport class PostsModule {}\r\n```\r\n\r\n### Posts Service\r\n\r\n```typescript\r\nimport { Injectable } from '@nestjs/common';\r\nimport { InjectRepository } from '@mikro-orm/nestjs';\r\nimport { EntityRepository } from '@mikro-orm/core';\r\nimport { Post } from './post.entity';\r\n\r\n@Injectable()\r\nexport class PostsService {\r\n  constructor(\r\n    @InjectRepository(Post)\r\n    private readonly postRepository: EntityRepository<Post>\r\n  ) {}\r\n\r\n  async findAll(): Promise<Post[]> {\r\n    return this.postRepository.findAll();\r\n  }\r\n}\r\n```\r\n\r\n### Posts Controller\r\n\r\n```typescript\r\nimport { Controller, Get } from '@nestjs/common';\r\nimport { PostsService } from './posts.service';\r\nimport { Post } from './post.entity';\r\n\r\n@Controller('posts')\r\nexport class PostsController {\r\n  constructor(private readonly postsService: PostsService) {}\r\n\r\n  @Get()\r\n  async findAll(): Promise<Post[]> {\r\n    return this.postsService.findAll();\r\n  }\r\n}\r\n```\r\n\r\n## Step 5: Running the Application\r\n\r\nRun your application and navigate to `http://localhost:3000/api/posts` to see the posts retrieved from the database:\r\n\r\n```bash\r\nnpm run start\r\n```\r\n\r\n## Conclusion\r\n\r\nYou've just set up a basic blog API using NestJS and MikroORM, with a PostgreSQL database running in a Docker container. This project lays the foundation for building scalable and maintainable applications with advanced features like data mapping, dependency injection, and modular architecture.\r\n\r\nFor the complete source code, check out the GitHub repository: [blog-nest](https://github.com/abel-castro/blog-nest).\r\n\r\nNestJS and MikroORM are powerful tools in your Node.js arsenal. By mastering them, you can greatly enhance your backend development capabilities. Happy coding!",
      date: '2024-06-01',
      tags: [
        {
          name: 'TypeScript',
        },
        {
          name: 'Rest-API',
        },
        {
          name: 'NestJS',
        },
        {
          name: 'Mikro-ORM',
        },
        {
          name: 'Express',
        },
        {
          name: 'Docker',
        },
      ],
    },
    {
      title:
        'The Sports Dashboard now displays the results of the last matchday',
      slug: 'sports-dashboard-displays-last-matchday-results',
      meta_description:
        'Discover the latest updates on the Sports Dashboard 2.0 as it now showcases the results of the recent matchday for various European football leagues. Learn how the new task retrieves and processes data, providing convenient insights without navigating through multiple sports news websites.',
      content:
        'The Sports Dashboard now displays the results of the last matchday.\r\n\r\n![Sports Dashboard 2.0](https://i.imgur.com/Zchxi4B.png" Basic analytics")\r\n\r\nI\'ve been making some updates to the [Sports Dashboard](https://ng.abelcastro.dev/sports-dashboard) to showcase the results of the latest matchday across available leagues. My aim with this project is to provide a convenient overview of major football leagues in Europe without needing to navigate through sports news websites.\r\n\r\nTo achieve this, I\'ve implemented a new task that retrieves results data from [APIFootball](https://apifootball.com), processes it into the required format, and then stores it in the database. The code is designed to be adaptable to different data providers and includes a `DataProviderInterface`, allowing to easy use other data providers if it is needed.\r\n\r\nThis task runs once a day, similar to the task for retrieving standings. The results are now accessible through the endpoint `GET /api/sports/standings/`.\r\n\r\nPlease note that since the dashboard only displays results from the last matchday, there may be instances where the data appears incomplete if not all games have been played yet.\r\n\r\nThe code is publicly available [here](https://github.com/abel-castro/abelcastro.dev/tree/main/app/sports).\r\nEnjoy!',
      date: '2024-04-14',
      tags: [
        {
          name: 'Rest-API',
        },
        {
          name: 'Django',
        },
        {
          name: 'Angular',
        },
      ],
    },
  ],
};
