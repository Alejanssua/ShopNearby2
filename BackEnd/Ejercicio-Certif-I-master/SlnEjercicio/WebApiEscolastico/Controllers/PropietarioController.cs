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
    public class PropietarioController : ApiController
    {
        public IHttpActionResult Post(Propietario materia)
        {
            try
            {
                PropietarioBLL.Create(materia);
                return Content(HttpStatusCode.Created, "Propietario creado correctamente");
            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }
                       
        public IHttpActionResult Get()
        {
            try
            {
                List<Propietario> todos = PropietarioBLL.List();
                return Content(HttpStatusCode.OK, todos);
            }
            catch (Exception ex) {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        public IHttpActionResult Put(Propietario materia)
        {
            try
            {
                PropietarioBLL.Update(materia);
                return Content(HttpStatusCode.OK, "Propietario actualizado correctamente");

            }
            catch (Exception ex) {
                return BadRequest(ex.Message);
            }
        }

        public IHttpActionResult Get(int id)
        {
            try
            {
                Propietario result = PropietarioBLL.Get(id);
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
                PropietarioBLL.Delete(id);
                return Ok("Propietario eliminado correctamente");
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

    }
}