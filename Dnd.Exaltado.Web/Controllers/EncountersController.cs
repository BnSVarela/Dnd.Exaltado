using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dnd.Exaltado.Web.Controllers
{
    public class EncountersController : Controller
    {
        public IActionResult Combat()
        {
            return View();
        }
    }
}