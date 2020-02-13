using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Dnd.Exaltado.Players.Entity
{
    [DataContract]
    public class Players
    {
        [DataMember(Name ="PlayerName")]
        public string PlayerName { get; set; }
        [DataMember(Name = "CharacterName")]
        public string CharacterName { get; set; }

    }
}
