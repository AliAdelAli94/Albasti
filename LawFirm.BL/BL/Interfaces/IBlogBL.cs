using LawFirm.DAL.Models;
using System.Collections.Generic;
namespace LawFirm.BL
{
    public interface IBlogBL
    {
        List<BlogDto> GetAllBlogs();

        bool AddBlog(Blog item);

        bool EditBlog(Blog item);

        bool RemoveBlog(Blog item);

        bool AddComment(Comment item);


    }
}
