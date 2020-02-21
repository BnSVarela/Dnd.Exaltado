using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace Dnd.Exaltado.CrossCutting.Interfaces
{
    public interface IRegisters<T>
    {
        public IActionResult Search();
        public IActionResult InsertPartialView();
        public bool Insert([FromBody] T obj);
        public IActionResult ViewPartialView(int id);
        public bool Delete(int id);
        public IActionResult EditPartialView(int id);
        public bool Edit([FromBody] T obj);
        
    }
}
