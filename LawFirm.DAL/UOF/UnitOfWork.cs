using System;
using LawFirm.DAL.Models;

namespace LawFirm.DAL
{
    public class UnitOfWork : IDisposable, IUnitOfWork
    {
        private LawFirmEntities context = new LawFirmEntities();
        private GenericRepository<Blog> blogRepository;
        private GenericRepository<Career> careerRepository;
        private GenericRepository<Comment> commentRepository;
        private GenericRepository<Experience> experienceRepository;
        private GenericRepository<Expert> expertRepository;
        private GenericRepository<FAQ> faqRepository;
        private GenericRepository<Paragraph> paragraphRepository;
        private GenericRepository<Testimonial> testimonialRepository;
        private GenericRepository<user> userRepository;


        private bool disposed = false;

        public GenericRepository<Blog> BlogRepository
        {
            get
            {
                if (this.blogRepository == null)
                {
                    this.blogRepository = new GenericRepository<Blog>(this.context);
                }

                return this.blogRepository;
            }
        }

        public GenericRepository<Career> CareerRepository
        {
            get
            {
                if (this.careerRepository == null)
                {
                    this.careerRepository = new GenericRepository<Career>(this.context);
                }

                return this.careerRepository;
            }
        }

        public GenericRepository<Comment> CommentRepository
        {
            get
            {
                if (this.commentRepository == null)
                {
                    this.commentRepository = new GenericRepository<Comment>(this.context);
                }

                return this.commentRepository;
            }
        }

        public GenericRepository<Experience> ExperienceRepository
        {
            get
            {
                if (this.experienceRepository == null)
                {
                    this.experienceRepository = new GenericRepository<Experience>(this.context);
                }

                return this.experienceRepository;
            }
        }

        public GenericRepository<Expert> ExpertRepository
        {
            get
            {
                if (this.expertRepository == null)
                {
                    this.expertRepository = new GenericRepository<Expert>(this.context);
                }

                return this.expertRepository;
            }
        }

        public GenericRepository<FAQ> FaqRepository
        {
            get
            {
                if (this.faqRepository == null)
                {
                    this.faqRepository = new GenericRepository<FAQ>(this.context);
                }
                return this.faqRepository;
            }
        }

        public GenericRepository<Paragraph> ParagraphRepository
        {
            get
            {
                if (this.paragraphRepository == null)
                {
                    this.paragraphRepository = new GenericRepository<Paragraph>(this.context);
                }

                return this.paragraphRepository;
            }
        }

        public GenericRepository<Testimonial> TestimonialRepository
        {
            get
            {
                if (this.testimonialRepository == null)
                {
                    this.testimonialRepository = new GenericRepository<Testimonial>(this.context);
                }

                return this.testimonialRepository;
            }
        }

        public GenericRepository<user> UserRepository
        {
            get
            {
                if (this.userRepository == null)
                {
                    this.userRepository = new GenericRepository<user>(this.context);
                }

                return this.userRepository;
            }
        }


        public void Save()
        {
               this.context.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    this.context.Dispose();
                }
            }

            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }

}
