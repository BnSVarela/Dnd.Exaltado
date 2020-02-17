using Dnd.Exaltado.Infra.DB.Interface;
using Dnd.Exaltado.Players.Interfaces;
using System;
using System.Collections.Generic;

namespace Dnd.Exaltado.Players.Services
{
    public class PlayersService : IPlayersServices
    {
        private readonly IDBService<Entity.Players> _DBService = null;

        public PlayersService(IDBService<Entity.Players> DBService)
        {
            _DBService = DBService;
        }
        public List<Entity.Players> SearchPlayers()
        {
            return _DBService.SelectMainListSimple<Entity.Players>();
        }

        public Entity.Players SearchPlayers(int id)
        {
            return _DBService.SelectSimple<Entity.Players>(id);            
        }

        public bool InsertPlayer(Entity.Players players) 
        {
            return _DBService.Insert<Entity.Players>(players);
        }
        public bool DeletePlayer(int id)
        {
            return _DBService.Delete<Entity.Players>(id);
        }
        public bool EditPlayer(Entity.Players players)
        {
            var Deleted = _DBService.Delete<Entity.Players>(Convert.ToInt32(players._Id));

            return _DBService.Insert<Entity.Players>(players);
        }
    }
}
