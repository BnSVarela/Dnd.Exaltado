using Dnd.Exaltado.Players.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

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
            return PartialView("_PlayersPartial", players);
        }

        public IActionResult InsertPlayerPartialView()
        {
            Players.Entity.Players players = new Players.Entity.Players();
            return PartialView("_PlayersInsert", players);
        }

        public bool InsertPlayer([FromBody]Players.Entity.Players players)
        {
            return _playersService.InsertPlayer(players);
        }

        public IActionResult ViewPlayerPartialView(int id)
        {
            var players = _playersService.SearchPlayers(id);
            return PartialView("_PlayersView", players);
        }

        public bool DeletePlayer(int id)
        {
            return _playersService.DeletePlayer(id);
        }

        public IActionResult EditPlayerPartialView(int id)
        {
            var players = _playersService.SearchPlayers(id);
            return PartialView("_PlayersEdit", players);
        }

        public bool EditPlayer([FromBody]Players.Entity.Players players)
        {
            return _playersService.EditPlayer(players);
        }


    }
}