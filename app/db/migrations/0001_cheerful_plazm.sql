CREATE TABLE `items` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`createdAt` text DEFAULT 'datetime("now")' NOT NULL,
	`updatedAt` text DEFAULT 'datetime("now")' NOT NULL
);
