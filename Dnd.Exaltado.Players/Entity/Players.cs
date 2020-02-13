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
        [DataMember(Name = "_RegistrationDate")]
        public DateTime? _RegistrationDate { get; set; }
        [DataMember(Name = "_Id")]
        public int _Id { get; set; }

    }
}
