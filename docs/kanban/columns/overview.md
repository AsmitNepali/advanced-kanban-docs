# Columns
The columns are the core of the kanban board. Each column represents a specific status or category for the records.\
To define columns, use the `->columns()` method in your kanban page and pass an array of `KanbanColumn` instances.

## 1. Basic Example
```php
<?php
    use Asmit\AdvancedKanban\Columns\KanbanColumn;
    
    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            ->columns([
                KanbanColumn::make('to_do')
                    ->label('To Do')
                    ->color('gray'),
                KanbanColumn::make('in_progress')
                    ->label('In Progress')
                    ->color('blue'),
                KanbanColumn::make('completed')
                    ->label('Completed')
                    ->color('purple'),
            ]);
    }
```
## 2. Color
You can customize the color of each column using the `->color()` method.\
```php
    KnabanColumn::make('to_do')
        ->label('To Do')
        ->color('green'), // Support hex, rgb, hsl and tailwind colors
```
## 3. Icon
You can add an icon to each column using the `->icon()` method.\
```php
    KnabanColumn::make('to_do')
        ->label('To Do')
        ->icon('heroicon-o-clipboard-list'), // Use any heroicon name
```

## 4. Extra Column Header Class
You can add extra CSS classes to the column header using the `->extraColumnHeadingClass()` method.\
```php
KnabanColumn::make('to_do')
    ->label('To Do')
    ->extraColumnHeadingClass('text-lg font-bold'), // Add custom classes
```