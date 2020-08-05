using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BEUEjercicio.TransactionsShopNearby
{
    public class TiendaBLL
    {
        public static void Create(Tienda a)
        {
            using (DBShopNearbyEntities db = new DBShopNearbyEntities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.Tiendas.Add(a);
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

        public static Tienda Get(int? id)
        {
            DBShopNearbyEntities db = new DBShopNearbyEntities();
            return db.Tiendas.Find(id);
        }

        public static void Update(Tienda Tienda)
        {
            using (DBShopNearbyEntities db = new DBShopNearbyEntities())
            {
                using (var transaction = db.Database.BeginTransaction())
                {
                    try
                    {
                        db.Tiendas.Attach(Tienda);
                        db.Entry(Tienda).State = System.Data.Entity.EntityState.Modified;
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
                        Tienda Tienda = db.Tiendas.Find(id);
                        db.Entry(Tienda).State = System.Data.Entity.EntityState.Deleted;
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

        public static List<Tienda> List()
        {
            DBShopNearbyEntities db = new DBShopNearbyEntities();
            return db.Tiendas.ToList();
        }

    }

}
