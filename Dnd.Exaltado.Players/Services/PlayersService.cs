﻿using Dnd.Exaltado.Players.Interfaces;
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
            if (id == 1) 
            {                  
                players.PlayerName = "Player";
                players.CharacterName = "Char";
                players._Id = 1;

                playersTeste.CharacterName1 = "Char2";
                playersTeste.PlayerName1 = "Player2";

                players._PlayersTeste = playersTeste;
            }

            if (id == 2)
            {
                players.PlayerName = "Player0";
                players.CharacterName = "Char0";
                players._Id = 2;

                playersTeste.CharacterName1 = "Char02";
                playersTeste.PlayerName1 = "Player02";

                players._PlayersTeste = playersTeste;
            }

            return players;
        }
    }
}
