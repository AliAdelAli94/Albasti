using LawFirm.DAL.Models;

namespace LawFirm.DAL
{
    public interface IUnitOfWork
    {

        GenericRepository<Blog> BlogRepository { get; }

        GenericRepository<Career> CareerRepository { get; }

        GenericRepository<Comment> CommentRepository { get; }

        GenericRepository<Experience> ExperienceRepository { get; }

        GenericRepository<Expert> ExpertRepository { get; }

        GenericRepository<FAQ> FaqRepository { get; }

        GenericRepository<Paragraph> ParagraphRepository { get; }

        GenericRepository<Testimonial> TestimonialRepository { get; }

        void Save();
        void Dispose();
    }
}
