using System;
using System.Collections.Generic;
using System.Text;

namespace Dnd.Exaltado.Monsters.Interfaces
{
    public interface IMonstersServices
    {
        List<Entity.Monsters> SearchMonsters();
        Entity.Monsters SearchMonsters(int id);
        bool InsertMonsters(Entity.Monsters players);
        bool DeleteMonsters(int id);
        bool EditMonsters(Entity.Monsters players);
    }
}
