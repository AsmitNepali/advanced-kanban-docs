# Lock Card
In Advanced Kanban, you can lock cards in specific columns to prevent them from being moved.\
This is useful for columns that represent final states or stages where records should not be altered.
To lock cards in a column, use the `->lockCardUsin($record)` method when defining the column.

```php
KanbanColumn::make('to_do')
    ->lockCardUsing(fn($record) => $record->id === 1)
```
In the example above, cards in the "To Do" column will be locked if their record ID is 1.

## 1. Lock Icon
You can customize the lock icon displayed on locked cards using the `->lockIcon()` method.

```php
KanbanColumn::make('to_do')
    ->lockCardUsing(fn($record) => $record->id === 1)
    ->lockIcon('heroicon-o-lock-closed') // Use any heroicon name
```

## 2. Lock Label
You can add a custom label to the lock icon using the `->lockLabel()` method.
```php
KanbanColumn::make('to_do')
    ->lockCardUsing(fn($record) => $record->id === 1)       
    ->lockLabel('Locked') // Custom label for the lock icon
```