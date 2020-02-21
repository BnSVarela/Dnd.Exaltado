using Dnd.Exaltado.CrossCutting.Interfaces;
using Dnd.Exaltado.Players.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace Dnd.Exaltado.Web.Controllers
{
    public class PlayersController : Controller, IRegisters<Players.Entity.Players>
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

        public IActionResult Search()
        {
            var players = _playersService.SearchPlayers();
            if (players.Count == 0)
            {
                var playersEmpty = new Players.Entity.Players();
                playersEmpty._Id = -99;

                players.Add(playersEmpty);
            }
            return PartialView("_Standard", players);
        }

        public IActionResult InsertPartialView()
        {
            Players.Entity.Players players = new Players.Entity.Players();

            players._ModalId = "PlayersInsert";
            players._ModalTitle = "Insert Player";
            return PartialView("_GenerateFormLayout", players);
        }

        public bool Insert([FromBody]Players.Entity.Players players)
        {
            return _playersService.InsertPlayer(players);
        }

        public IActionResult ViewPartialView(int id)
        {
            var players = _playersService.SearchPlayers(id);
            players._ModalId = "PlayersView";
            players._ModalTitle = "View Player";
            return PartialView("_GenerateFormLayout", players);
        }

        public bool Delete(int id)
        {
            return _playersService.DeletePlayer(id);
        }

        public IActionResult EditPartialView(int id)
        {
            var players = _playersService.SearchPlayers(id);

            players._ModalId = "PlayersEdit";
            players._ModalTitle = "Edit Player";
            return PartialView("_GenerateFormLayout", players);
        }

        public bool Edit([FromBody]Players.Entity.Players players)
        {
            return _playersService.EditPlayer(players);
        }


    }
}