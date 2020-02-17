

using System.Collections.Generic;

namespace Dnd.Exaltado.Infra.DB.Interface
{
    public interface IDBService <T>
    {
        List<T> SelectMainListSimple<T>();
        T SelectSimple<T>(int Id);
        bool Insert<T>(T obj);
        bool Delete<T>(int Id);
    }
}
