using BEUEjercicio;
using BEUEjercicio.TransactionsShopNearby;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using System.Web.Mvc;

namespace WebApiEscolastico.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class TiendaController : ApiController
    {
        public IHttpActionResult Post(Tienda materia)
        {
            try
            {
                TiendaBLL.Create(materia);
                return Content(HttpStatusCode.Created, "Tienda creado correctamente");
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
                       
        public IHttpActionResult Get()
        {
            try
            {
                List<Tienda> todos = TiendaBLL.List();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex) {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Put(Tienda materia)
        {
            try
            {
                TiendaBLL.Update(materia);
                return Content(HttpStatusCode.OK, "Tienda actualizado correctamente");

            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                Tienda result = TiendaBLL.Get(id);
                if (result == null) {
                    return NotFound();
                }
                return Content(HttpStatusCode.OK, result);
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Delete(int id)
        {
            try
            {
                TiendaBLL.Delete(id);
                return Ok("Tienda eliminado correctamente");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

    }
}