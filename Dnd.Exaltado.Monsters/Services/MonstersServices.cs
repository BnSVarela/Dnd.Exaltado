using Dnd.Exaltado.Infra.DB.Interface;
using Dnd.Exaltado.Monsters.Interfaces;
using System;
using System.Collections.Generic;

namespace Dnd.Exaltado.Monsters.Services
{
    public class MonstersService : IMonstersServices
    {
        private readonly IDBService<Entity.Monsters> _DBService = null;

        public MonstersService(IDBService<Entity.Monsters> DBService)
        {
            _DBService = DBService;
        }
        public List<Entity.Monsters> SearchMonsters()
        {
            return _DBService.SelectMainListSimple<Entity.Monsters>();
        }

        public Entity.Monsters SearchMonsters(int id)
        {
            return _DBService.SelectSimple<Entity.Monsters>(id);
        }

        public bool InsertMonsters(Entity.Monsters monsters)
        {
            return _DBService.Insert<Entity.Monsters>(monsters);
        }
        public bool DeleteMonsters(int id)
        {
            return _DBService.Delete<Entity.Monsters>(id);
        }
        public bool EditMonsters(Entity.Monsters monsters)
        {
            var Deleted = _DBService.Delete<Entity.Monsters>(Convert.ToInt32(monsters._Id));

            return _DBService.Insert<Entity.Monsters>(monsters);
        }
    }
}
