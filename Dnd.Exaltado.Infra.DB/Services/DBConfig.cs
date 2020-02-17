using Dnd.Exaltado.CrossCutting.Config;
using Dnd.Exaltado.Infra.DB.Interface;
using Microsoft.Extensions.Configuration;

namespace Dnd.Exaltado.Infra.DB.Services
{
    public class DBConfig : ConfigBase, IDBConfig
    {
        public DBConfig(IConfiguration configuration) : base(configuration)
        {
        }

        public string GetDBConnection => GetSectionValue("DB:ConncetionString");
    }
}
