using Dnd.Exaltado.Players.Interfaces;

namespace Dnd.Exaltado.Players.Services
{
    public class PlayersService : IPlayersServices
    {
        public Entity.Players SearchPlayers()
        {
            Entity.Players players = new Entity.Players();
            players.PlayerName = "Teste";
            players.CharacterName = "Char";
            players._Id = 1;

            return players;
        }
    }
}
