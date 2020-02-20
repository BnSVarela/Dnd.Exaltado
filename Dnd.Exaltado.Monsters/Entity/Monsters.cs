using System.Runtime.Serialization;

namespace Dnd.Exaltado.Monsters.Entity
{
    /// <summary>
    /// Propriedades que começam com "_" não aparecem na lista.
    /// SubClasse e Propriedade do tipo da subclasse precisam ter o mesmo nome.
    /// </summary>
    [DataContract]
    public class Monsters
    {
        [DataMember(Name = "_Id")]
        public int? _Id { get; set; }
        [DataMember(Name = "_ModalId")]
        public string _ModalId { get; set; }
        [DataMember(Name = "_ModalTitle")]
        public string _ModalTitle { get; set; }


        [DataMember(Name = "MonsterName")]
        public string MonsterName { get; set; }
        [DataMember(Name = "HitPoints")]
        public int HitPoints { get; set; }
    }
}
