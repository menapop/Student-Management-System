namespace productsApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class first : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.StudenDegrees",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        StudentID = c.String(maxLength: 128),
                        CourseID = c.Int(nullable: false),
                        IsDeleted = c.Boolean(nullable: false),
                    })
                .PrimaryKey(t => t.ID)
                .ForeignKey("dbo.Courses", t => t.CourseID, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.StudentID)
                .Index(t => t.StudentID)
                .Index(t => t.CourseID);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.StudenDegrees", "StudentID", "dbo.AspNetUsers");
            DropForeignKey("dbo.StudenDegrees", "CourseID", "dbo.Courses");
            DropIndex("dbo.StudenDegrees", new[] { "CourseID" });
            DropIndex("dbo.StudenDegrees", new[] { "StudentID" });
            DropTable("dbo.StudenDegrees");
        }
    }
}
