﻿using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Dnd.Exaltado.Players.Entity
{
    /// <summary>
    /// Propriedades que começam com "_" não aparecem na lista.
    /// </summary>
    [DataContract]
    public class Players
    {
        [DataMember(Name ="PlayerName")]
        public string PlayerName { get; set; }
        [DataMember(Name = "CharacterName")]
        public string CharacterName { get; set; }
        [DataMember(Name = "_Id")]
        public int _Id { get; set; }
        [DataMember(Name = "_PlayersTeste")]
        public PlayersTeste _PlayersTeste { get; set; }
    }

    [DataContract]
    public class PlayersTeste
    {
        [DataMember(Name = "PlayerName1")]
        public string PlayerName1 { get; set; }
        [DataMember(Name = "CharacterName1")]
        public string CharacterName1 { get; set; }
    }

}
