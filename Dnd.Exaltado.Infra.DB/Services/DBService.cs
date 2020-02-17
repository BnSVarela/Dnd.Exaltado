using Dnd.Exaltado.Infra.DB.Interface;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Text;

namespace Dnd.Exaltado.Infra.DB.Services
{
    public class DBService<T> : DBConfig, IDBService<T>
    {
        public IDBConfig _DBConfig = null;
        string stringConn = null;
        public DBService(IConfiguration configuration,
                            IDBConfig DBConfig) : base(configuration)
        {
            _DBConfig = DBConfig;
            stringConn = _DBConfig.GetDBConnection;
        }
        public List<T> SelectMainListSimple<T>()
        {
            using (var context = new DBContext(stringConn))
            {
                PropertyInfo[] properties = typeof(T).GetProperties();
                var table = properties[0].DeclaringType.Name.ToString().ToUpper();

                var Query = $"SELECT * FROM {table}";

                return context.Database.SqlQuery<T>(sql: Query).ToList();
            }

        }
        public T SelectSimple<T>(int Id)
        {
            using (var context = new DBContext(stringConn))
            {

                PropertyInfo[] properties = typeof(T).GetProperties();
                var table = properties[0].DeclaringType.Name.ToString().ToUpper();

                var Query = $"SELECT * FROM {table} WHERE _ID = {Id}";

                return context.Database.SqlQuery<T>(sql: Query).ToList()[0];
            }

        }
        public bool Insert<T>(T obj)
        {
            using (var context = new DBContext(stringConn))
            {
                var strQuery = new StringBuilder();

                PropertyInfo[] properties = typeof(T).GetProperties();
                var table = properties[0].DeclaringType.Name.ToString().ToUpper();

                strQuery.Append("INSERT INTO "+ table);
                strQuery.Append(" (");

                foreach (PropertyInfo property in properties)
                {
                    if (property.Name != "_Id")
                    {
                        strQuery.Append(property.Name);
                        strQuery.Append(",");
                    }
                    
                }

                strQuery.Remove(strQuery.Length - 1, 1);
                strQuery.Append(") values (");

                PropertyInfo[] propertiesValues = typeof(T).GetProperties();
                foreach (PropertyInfo property in propertiesValues)
                {
                    if (property.Name != "_Id")
                    {
                        strQuery.Append("'");
                        if (property.PropertyType.Name.ToString() == "Decimal")
                        {
                            strQuery.Append(property.GetValue(obj)?.ToString().Replace(",", "."));
                        }
                        else
                        {
                            strQuery.Append(property.GetValue(obj)?.ToString());
                        }

                        strQuery.Append("',");
                    }                    
                }

                strQuery.Remove(strQuery.Length - 1, 1);
                strQuery.Append(" );");

                var response = context.Database.ExecuteSqlCommand(strQuery.ToString());

                if (response == 1)
                    return true;
                else
                    return false;

            }
        }
        public bool Delete<T>(int Id)
        {
            using (var context = new DBContext(stringConn)) 
            {
                PropertyInfo[] properties = typeof(T).GetProperties();
                var table = properties[0].DeclaringType.Name.ToString().ToUpper();

                var Query = $"DELETE FROM {table} WHERE _ID = {Id}";

                var response = context.Database.ExecuteSqlCommand(Query);

                if (response == 1)
                    return true;
                else
                    return false;
            }
            
        }
    }
}
