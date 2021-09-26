-- CreateTable
CREATE TABLE "lobby" (
    "lobby_id" SERIAL NOT NULL,
    "lobby_name" TEXT NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "joined_users" INTEGER[],

    PRIMARY KEY ("lobby_id")
);

-- AddForeignKey
ALTER TABLE "lobby" ADD FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
