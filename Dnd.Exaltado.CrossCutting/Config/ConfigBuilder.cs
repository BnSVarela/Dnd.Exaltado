using Microsoft.Extensions.Configuration;
using System;

namespace Dnd.Exaltado.CrossCutting.Config
{
    public class ConfigBuilder
    {
        public static IConfiguration BuildAppSettings(string name = null)
        {
            if (string.IsNullOrEmpty(name))
                name = "appsettings";

            return new ConfigurationBuilder()
                .SetBasePath(Environment.CurrentDirectory)
                .AddJsonFile($"{name}.json", false, true)
                .Build();
        }
    }
}
