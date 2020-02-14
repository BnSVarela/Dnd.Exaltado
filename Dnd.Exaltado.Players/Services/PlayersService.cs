using Dnd.Exaltado.Players.Interfaces;

namespace Dnd.Exaltado.Players.Services
{
    public class PlayersService : IPlayersServices
    {
        public Entity.Players SearchPlayers()
        {
            Entity.Players players = new Entity.Players();
            players.PlayerName = "Player";
            players.CharacterName = "Char";
            players._Id = 1;

            return players;
        }

        public Entity.Players SearchPlayers(int id)
        {
            Entity.PlayersTeste playersTeste = new Entity.PlayersTeste();
            Entity.Players players = new Entity.Players();
            players.PlayerName = "Player";
            players.CharacterName = "Char";
            players._Id = 1;

            playersTeste.CharacterName = "Char2";
            playersTeste.PlayerName = "Player2";

            players._PlayersTeste = playersTeste;

            return players;
        }
    }
}
