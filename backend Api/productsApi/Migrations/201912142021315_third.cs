namespace productsApi.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class third : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.StudenDegrees", "Degree", c => c.Double(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.StudenDegrees", "Degree");
        }
    }
}
