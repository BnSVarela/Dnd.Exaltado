using System;
using System.Configuration;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;


namespace Dnd.Exaltado.Infra.DB
{
    public class DBContext : DbContext
    {
        public DBContext(string Connection) :
            base(Connection)
        {

            Database.SetInitializer<DBContext>(null);

            Database.ExecuteSqlCommand("SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED");

            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;
            Configuration.ValidateOnSaveEnabled = false;
            Configuration.AutoDetectChangesEnabled = false;

            var objectContext = (this as IObjectContextAdapter).ObjectContext;
            objectContext.CommandTimeout = 6000;
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

        ~DBContext()
        {
            GC.SuppressFinalize(this);
        }
    }
}
