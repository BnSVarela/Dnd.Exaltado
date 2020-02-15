using Dnd.Exaltado.Players.Interfaces;
using System.Collections.Generic;

namespace Dnd.Exaltado.Players.Services
{
    public class PlayersService : IPlayersServices
    {
        public List<Entity.Players> SearchPlayers()
        {
            List<Entity.Players> playersList = new List<Entity.Players>();
            
            Entity.Players players = new Entity.Players();
            players.PlayerName = "Player";
            players.CharacterName = "Char";
            players._Id = 1;

            playersList.Add(players);


            players = new Entity.Players();
            players.PlayerName = "Player0";
            players.CharacterName = "Char0";
            players._Id = 2;

            playersList.Add(players);

            return playersList;
        }

        public Entity.Players SearchPlayers(int id)
        {
            Entity.Players players = new Entity.Players();
            Entity._PlayersTeste playersTeste = new Entity._PlayersTeste();
            Entity._PlayersGrid playersGrid = new Entity._PlayersGrid();
            List<Entity._PlayersGrid> playersGridList = new List<Entity._PlayersGrid>();
            if (id == 1) 
            {                  
                players.PlayerName = "Player";
                players.CharacterName = "Char";
                players._Id = 1;

                playersTeste.CharacterName1 = "Char2";
                playersTeste.PlayerName1 = "Player2";
                playersTeste.CharacterHP = 100;

                playersGrid.Item = "Full Plate";
                playersGrid.Quantity = 1;

                playersGridList.Add(playersGrid);

                playersGrid = new Entity._PlayersGrid();
                playersGrid.Item = "Full Plate_";
                playersGrid.Quantity = 11;

                playersGridList.Add(playersGrid);

                players._PlayersTeste = playersTeste;
                players._PlayersGrid = playersGridList;
            }

            if (id == 2)
            {
                players.PlayerName = "Player0";
                players.CharacterName = "Char0";
                players._Id = 2;

                playersTeste.CharacterName1 = "Char02";
                playersTeste.PlayerName1 = "Player02";
                playersTeste.CharacterHP = 200;

                playersGrid.Item = "Full Plate0";
                playersGrid.Quantity = 2;

                playersGridList.Add(playersGrid);

                players._PlayersTeste = playersTeste;
                players._PlayersGrid = playersGridList;
            }

            return players;
        }
    }
}
