
using System.Collections.Generic;

namespace Dnd.Exaltado.Players.Interfaces
{
    public interface IPlayersServices
    {
        List<Entity.Players> SearchPlayers();
        Entity.Players SearchPlayers(int id);
    }
}
