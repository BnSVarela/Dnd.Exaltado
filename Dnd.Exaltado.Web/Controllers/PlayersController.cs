﻿using Dnd.Exaltado.Players.Interfaces;
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
            return PartialView("_PlayersPartial", players);
        }

        public IActionResult InsertPlayerPartialView()
        {
            Players.Entity.Players players = new Players.Entity.Players();
            return PartialView("_PlayersInsert", players);
        }

        public bool InsertPlayer([FromBody]Players.Entity.Players players)
        {
            return true;
        }

        public IActionResult ViewPlayerPartialView(int id)
        {
            var players = _playersService.SearchPlayers(id);
            return PartialView("_PlayersView", players);
        }

        public bool DeletePlayer(int id)
        {
            return true;
        }


    }
}