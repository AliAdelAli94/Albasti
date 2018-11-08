using LawFirm.DAL;

namespace LawFirm.BL
{ 

    public class BlogBL : IBlogBL
    {

        private IUnitOfWork iUnitOfWork;
        public BlogBL(IUnitOfWork iUOF)
        {
            this.iUnitOfWork = iUOF;
        }
     
    }
}
