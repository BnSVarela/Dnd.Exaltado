using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dnd.Exaltado.Monsters.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Dnd.Exaltado.Web.Controllers
{
    public class MonstersController : Controller
    {
        private readonly IMonstersServices _MonstersServices;

        public MonstersController(IMonstersServices monstersServices)
        {
            _MonstersServices = monstersServices;
        }
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Search()
        {
            var monsters = _MonstersServices.SearchMonsters();
            if (monsters.Count == 0)
            {
                var monstersEmpty = new Monsters.Entity.Monsters();
                monstersEmpty._Id = -99;

                monsters.Add(monstersEmpty);
            }
            return PartialView("_Standard", monsters);
        }

        public IActionResult InsertPartialView()
        {
            Monsters.Entity.Monsters monsters = new Monsters.Entity.Monsters();

            monsters._ModalId = "MonstersInsert";
            monsters._ModalTitle = "Insert Monsters";
            return PartialView("_GenerateFormLayout", monsters);
        }

        public bool InsertMonsters([FromBody]Monsters.Entity.Monsters monsters)
        {
            return _MonstersServices.InsertMonsters(monsters);
        }

        public IActionResult ViewPartialView(int id)
        {
            var monsters = _MonstersServices.SearchMonsters(id);
            monsters._ModalId = "MonstersView";
            monsters._ModalTitle = "View Monsters";
            return PartialView("_GenerateFormLayout", monsters);
        }

        public bool Delete(int id)
        {
            return _MonstersServices.DeleteMonsters(id);
        }

        public IActionResult EditPartialView(int id)
        {
            var monsters = _MonstersServices.SearchMonsters(id);

            monsters._ModalId = "MonstersEdit";
            monsters._ModalTitle = "Edit Monsters";
            return PartialView("_GenerateFormLayout", monsters);
        }

        public bool Edit([FromBody]Monsters.Entity.Monsters monsters)
        {
            return _MonstersServices.EditMonsters(monsters);
        }
    }
}