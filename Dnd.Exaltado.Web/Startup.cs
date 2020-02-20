using Dnd.Exaltado.CrossCutting.Config;
using Dnd.Exaltado.Infra.DB.Interface;
using Dnd.Exaltado.Infra.DB.Services;
using Dnd.Exaltado.Monsters.Interfaces;
using Dnd.Exaltado.Monsters.Services;
using Dnd.Exaltado.Players.Interfaces;
using Dnd.Exaltado.Players.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Dnd.Exaltado.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllersWithViews();

            services.AddSingleton(ConfigBuilder.BuildAppSettings());

            services.AddSingleton<IDBConfig, DBConfig>();
            //Injetar para cada tipo
            services.AddSingleton<IDBService<Players.Entity.Players>, DBService<Players.Entity.Players>>();
            services.AddSingleton<IDBService<Monsters.Entity.Monsters>, DBService<Monsters.Entity.Monsters>>();

            services.AddSingleton<IPlayersServices, PlayersService>();
            services.AddSingleton<IMonstersServices, MonstersService>();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
