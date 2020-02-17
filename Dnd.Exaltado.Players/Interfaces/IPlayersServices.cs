
using System.Collections.Generic;

namespace Dnd.Exaltado.Players.Interfaces
{
    public interface IPlayersServices
    {
        List<Entity.Players> SearchPlayers();
        Entity.Players SearchPlayers(int id);
        bool InsertPlayer(Entity.Players players);
        bool DeletePlayer(int id);
        bool EditPlayer(Entity.Players players);
    }
}
