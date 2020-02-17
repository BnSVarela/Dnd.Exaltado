using Microsoft.Extensions.Configuration;

namespace Dnd.Exaltado.CrossCutting.Config
{
    public abstract class ConfigBase
    {
        protected readonly IConfiguration _configuration = null;

        public ConfigBase(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IConfiguration GetConfiguration => _configuration;

        public IConfigurationSection GetSection(string section) => _configuration.GetSection(section);

        public string GetSectionValue(string section) => GetSection(section).Value;

    }
}
