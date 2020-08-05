using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEUEjercicio.TransactionsShopNearby
{
    public class PropietarioBLL
    {
        public static void Create(Propietario a)
        {
            using (DBShopNearbyEntities db = new DBShopNearbyEntities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.Propietarios.Add(a);
                        db.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }

        public static Propietario Get(int? id)
        {
            DBShopNearbyEntities db = new DBShopNearbyEntities();
            return db.Propietarios.Find(id);
        }

        public static void Update(Propietario Propietario)
        {
            using (DBShopNearbyEntities db = new DBShopNearbyEntities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.Propietarios.Attach(Propietario);
                        db.Entry(Propietario).State = System.Data.Entity.EntityState.Modified;
                        db.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }

        public static void Delete(int? id)
        {
            using (DBShopNearbyEntities db = new DBShopNearbyEntities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        Propietario Propietario = db.Propietarios.Find(id);
                        db.Entry(Propietario).State = System.Data.Entity.EntityState.Deleted;
                        db.SaveChanges();
                        transaction.Commit();
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }

        public static List<Propietario> List()
        {
            DBShopNearbyEntities db = new DBShopNearbyEntities();
            return db.Propietarios.ToList();
        }

    }
}
