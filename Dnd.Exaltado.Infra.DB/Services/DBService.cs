using Dnd.Exaltado.Infra.DB.Interface;
using Microsoft.Extensions.Configuration;
using System;

namespace Dnd.Exaltado.Infra.DB.Services
{
    public class DBService : DBConfig, IDBService
    {
        public IDBConfig _DBConfig = null;
        public DBService(IConfiguration configuration,
                            IDBConfig DBConfig) : base(configuration)
        {
            _DBConfig = DBConfig;
        }
        public bool teste()
        {
            var stringC = _DBConfig.GetDBConnection;

            return true;
        }
    }
}
