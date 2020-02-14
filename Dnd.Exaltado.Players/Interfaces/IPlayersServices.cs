
namespace Dnd.Exaltado.Players.Interfaces
{
    public interface IPlayersServices
    {
        Entity.Players SearchPlayers();
        Entity.Players SearchPlayers(int id);
    }
}
