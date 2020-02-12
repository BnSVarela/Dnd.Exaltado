using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dnd.Exaltado.Players.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Dnd.Exaltado.Web.Controllers
{
    public class PlayersController : Controller
    {
        private readonly IPlayersServices _playersService;

        public PlayersController(IPlayersServices playersServices)
        {
            _playersService = playersServices;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult SearchPlayers()
        {
            var players = _playersService.SearchPlayers();
            return PartialView("_PlayersPartial");
        }
    }
}