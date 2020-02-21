using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Dnd.Exaltado.Players.Entity
{
    [DataContract]
    public class Players
    {
        [DataMember(Name = "_Id")]
        public int? _Id { get; set; }
        [DataMember(Name = "_ModalId")]
        public string _ModalId { get; set; }
        [DataMember(Name = "_ModalTitle")]
        public string _ModalTitle { get; set; }


        [DataMember(Name = "PlayerName")]
        public string PlayerName { get; set; }
        [DataMember(Name = "CharacterName")]
        public string CharacterName { get; set; }
    }


}

