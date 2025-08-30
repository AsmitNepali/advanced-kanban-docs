# Actions
 Advanced kanban provides a set of actions to enhance your workflow. These actions can be used to perform various tasks directly from the Kanban board.
 
## 1. Column Header Actions
 You can add actions to the column headers using the `->columnHeaderActions()` method. This method accepts an array of actions that will be displayed in the column header.
```php
<?php
public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            ->columns([
               // Your columns here
            ])
            ->columnHeaderActions([
                \Filament\Actions\Action::make('Add Task')
                ->hiddenLabel()
                    ->action(fn($arguments) => dd($arguments))
                    ->link()
                    ->icon(Heroicon::OutlinedPlus)
                    ->color('primary'),
            ])
```
Here you get the current column status in action arguments.
> You Can alos pass the ``ActionGroup`` here to group multiple actions.
```php
use Filament\Actions\ActionGroup;

->columnHeaderActions([
    ActionGroup::make([
        Action::make('Add Task')
            ->action(fn() => dd('Add Task'))
            ->color('primary'),
    ])
    ->label('Add Task')
    ->icon(Heroicon::EllipsisVertical)
    ->color('primary'),
    ])
```

## 2. Record Actions
 You can add actions to each record using the `->recordActions()` method. This method accepts an array of actions that will be displayed for each record.
```php
<?php

use Asmit\AdvancedKanban\Kanban;
use Asmit\AdvancedKanban\RecordAction\Action;
use Asmit\AdvancedKanban\RecordAction\DeleteAction;
use Filament\Actions\ActionGroup;

    public function kanban(Kanban $kanban): Kanban
        {
            return $kanban
                ->model(Task::class)
                ->statusField('status')
                ->recordActions([
                    Action::make('Edit')
                    ->action(fn($record) => dd($record)),
                    ActionGroup::make([
                        DeleteAction::make('Delete')
                            ->action(fn($record) => dd($record))
                            ->color('danger'),
                        Action::make('View')
                            ->action(fn($record) => dd($record))
                            ->openUrlInNewTab(),
                    ])->dropdownPlacement('bottom-end'),
    
                ]);
        }
```
Here you get the current record in action arguments.

> Note: Please make sure to import the correct `Action` and `DeleteAction` classes from `Asmit\AdvancedKanban\RecordAction` namespace.    

> You Can alos pass the ``ActionGroup`` here to group multiple actions.
> You can use the built-in `DeleteAction` to handle record deletions.
            
 