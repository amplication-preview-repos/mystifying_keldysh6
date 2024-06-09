import { Module } from "@nestjs/common";
import { PlayerModule } from "./player/player.module";
import { MenteeModule } from "./mentee/mentee.module";
import { EventModule } from "./event/event.module";
import { DonationModule } from "./donation/donation.module";
import { ProgressModule } from "./progress/progress.module";
import { FixtureModule } from "./fixture/fixture.module";
import { SponsorModule } from "./sponsor/sponsor.module";
import { TaskModule } from "./task/task.module";
import { AdminModule } from "./admin/admin.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    PlayerModule,
    MenteeModule,
    EventModule,
    DonationModule,
    ProgressModule,
    FixtureModule,
    SponsorModule,
    TaskModule,
    AdminModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
