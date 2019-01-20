using LawFirm.DAL;
using LawFirm.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;


namespace LawFirm.BL
{ 

    public class BlogBL : IBlogBL
    {

        private IUnitOfWork iUnitOfWork;
        public BlogBL(IUnitOfWork iUOF)
        {
            this.iUnitOfWork = iUOF;
        }

        public List<BlogDto> GetAllBlogs()
        {
            try
            {
                var x = this.iUnitOfWork.BlogRepository.Get().ToList();
                List<BlogDto> data = new List<BlogDto>();
                data = x.Select(ex => new BlogDto()
                {
                    id = ex.id,
                    blogDate = ex.blogDate,
                    category = ex.category,
                    // image = "http://chatappp.somee.com/" + ex.image,
                    image = "http://localhost:20833" + ex.image,
                    postedby = ex.postedby,
                    title = ex.title,
                    Paragraphs = ex.Paragraphs.Select(p => new ParagraphDto(){
                        
                        id = p.id,
                        paragraph1 = p.paragraph1,
                        blogId = p.blogId

                    }).ToList(),
                    Comments = ex.Comments.Select(c => new CommentDto()
                    {
                        id = c.id,
                        commenterName = c.commenterName,
                        commenterEmail = c.commenterEmail,
                        commentBody = c.commentBody,
                        blogId = c.blogId

                    }).ToList()


                }).ToList();
  
                return data;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public bool AddBlog(Blog item)
        {
            try
            {
                item.postedby = "Al Basti";
                item.blogDate = DateTime.Now;
                this.iUnitOfWork.BlogRepository.Insert(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool EditBlog(Blog item)
        {
            try
            {
                List<Paragraph> oldParagraphs = this.iUnitOfWork.ParagraphRepository.Get(x => x.blogId == item.id).ToList();
                List<Comment> oldComments = this.iUnitOfWork.CommentRepository.Get(c => c.blogId == item.id).ToList();

                foreach (var oldParagraph in oldParagraphs)
                {
                    this.iUnitOfWork.ParagraphRepository.DetachEntity(oldParagraph);
                    if (item.Paragraphs.Where(o => o.id == oldParagraph.id).FirstOrDefault() == null)
                    {
                        this.iUnitOfWork.ParagraphRepository.Delete(oldParagraph.id);
                    }
                }

                foreach (var oldComment in oldComments)
                {
                    this.iUnitOfWork.CommentRepository.DetachEntity(oldComment);
                    if (item.Comments.Where(o => o.id == oldComment.id).FirstOrDefault() == null)
                    {
                        this.iUnitOfWork.CommentRepository.Delete(oldComment.id);
                    }
                }


                List<Paragraph> tempList = new List<Paragraph>(item.Paragraphs.ToList());
                foreach (var currentParagraph in tempList)
                {
                    var temp = oldParagraphs.Where(o => o.id == currentParagraph.id).FirstOrDefault();
                    if (temp == null)
                    {
                        currentParagraph.blogId = item.id;
                        this.iUnitOfWork.ParagraphRepository.Insert(currentParagraph);
                        item.Paragraphs.Remove(currentParagraph);
                    }
                }

                foreach(var x in item.Paragraphs)
                {
                    this.iUnitOfWork.ParagraphRepository.Update(x);
                }

                this.iUnitOfWork.BlogRepository.Update(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

        public bool RemoveBlog(Blog item)
        {
            try
            {
                this.iUnitOfWork.BlogRepository.Delete(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }


        public bool AddComment(Comment item)
        {
            try
            {
                this.iUnitOfWork.CommentRepository.Insert(item);
                this.iUnitOfWork.Save();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }

    }
}
