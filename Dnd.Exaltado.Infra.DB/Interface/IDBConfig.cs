using System;
using System.Collections.Generic;
using System.Text;

namespace Dnd.Exaltado.Infra.DB.Interface
{
    public interface IDBConfig
    {
        string GetDBConnection { get; }
    }
}
