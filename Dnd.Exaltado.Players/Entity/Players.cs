using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Dnd.Exaltado.Players.Entity
{
    /// <summary>
    /// Propriedades que começam com "_" não aparecem na lista.
    /// SubClasse e Propriedade do tipo da subclasse precisam ter o mesmo nome.
    /// </summary>
    [DataContract]
    public class Players
    {
        [DataMember(Name = "_Id")]
        public int? _Id { get; set; }
        [DataMember(Name = "PlayerName")]
        public string PlayerName { get; set; }
    }
}
