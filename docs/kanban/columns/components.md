# Components
Basically the Kanban board is made up of two main components: Columns Header and Cards (Records).\
You can customize these components by generating your own components with the command below:
```bash
php artisan make:filament-kanban-component
```
This command will create two blade files in the `resources/views/components/kanban/` directory.
To use this components, you need to override the default components in your kanban page like below:
```php
    protected static string $columnHeaderComponent = 'your-column-header-component';

    protected static string $cardComponent = 'your-card-component';
```
