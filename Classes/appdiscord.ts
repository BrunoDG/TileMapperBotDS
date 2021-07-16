import {
  Discord,
  On,
  Once,
  ArgsOf,
  CommandMessage,
  CommandNotFound,
  Command,
} from "@typeit/discord";
import { Client } from "@typeit/discord";

@Discord("!") // Decora a classe, informando
abstract class AppDiscord {
  @Command("olar") // Se eu der o comando "!olar"
  private olar(message: CommandMessage) {
    // Print("olar, meu amigo. Você é um amigo.")
  }

  @CommandNotFound()
  private notFound(message: CommandMessage) {
    // Print("Não tem esse comando aqui não, chapa...")
  }

  @On("message")
  private onMessage(
    [message]: ArgsOf<"message">, // Digitar mensagem automaticamente
    client: Client, // Instância do cliente injetada aqui
    guardPayload: any
  ) {
    // ...
  }

  @Once("messageDelete")
  private onMessageDelete() {
    // ...
  }
}
