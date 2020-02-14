using System;
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
        public DateTime _RegistrationDate { get; set; }
        [DataMember(Name = "_Id")]
        public int _Id { get; set; }
        [DataMember(Name = "_XX")]
        public bool _XX { get; set; }
        [DataMember(Name = "_IdX")]
        public int _IdX { get; set; }
        [DataMember(Name = "_PlayersTeste")]
        public PlayersTeste _PlayersTeste { get; set; }
        [DataMember(Name = "PlayerName1")]
        public string PlayerName1 { get; set; }
        [DataMember(Name = "PlayerName2")]
        public string PlayerName2 { get; set; }
        [DataMember(Name = "PlayerName3")]
        public string PlayerName3 { get; set; }
        [DataMember(Name = "PlayerName4")]
        public string PlayerName4 { get; set; }
        [DataMember(Name = "PlayerName5")]
        public string PlayerName5 { get; set; }
        [DataMember(Name = "PlayerName6")]
        public string PlayerName6 { get; set; }
        [DataMember(Name = "PlayerName7")]
        public string PlayerName7 { get; set; }
        [DataMember(Name = "_PlayersTeste2")]
        public PlayersTeste2 _PlayersTeste2 { get; set; }
    }

    [DataContract]
    public class PlayersTeste
    {
        [DataMember(Name = "PlayerTesteInfo")]
        public string PlayerTesteInfo { get; set; }
        [DataMember(Name = "PlayerTesteInfo2")]
        public string PlayerTesteInfo2 { get; set; }
    }

    [DataContract]
    public class PlayersTeste2
    {
        [DataMember(Name = "PlayerTesteInfo")]
        public string PlayerTesteInfo { get; set; }
        [DataMember(Name = "PlayerTesteInfo2")]
        public string PlayerTesteInfo2 { get; set; }
    }
}
