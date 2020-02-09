using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Dnd.Exaltado.Players.Entity
{
    [DataContract]
    public class Players
    {
        [DataMember(Name ="Name")]
        public string Name { get; set; }

    }
}
