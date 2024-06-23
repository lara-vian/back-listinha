-- CreateTable
CREATE TABLE "market_item" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "market_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market_category" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "market_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "market_planning" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),

    CONSTRAINT "market_planning_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "market_item_name_key" ON "market_item"("name");

-- CreateIndex
CREATE UNIQUE INDEX "market_category_name_key" ON "market_category"("name");

-- AddForeignKey
ALTER TABLE "market_item" ADD CONSTRAINT "market_item_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "market_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
