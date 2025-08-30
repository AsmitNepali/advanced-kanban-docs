
# 🎯 Quick Start
Hsy, we donot want to waste your time. So here is a quick start guide to get you up and running with the Advanced Kanban package in Filament.
```bash 
composer require asmit/advanced-kanban
```
## 1. Create a Kanban Page
To add a kanban board, create a new Filament page:
```bash
php artisan make:filament-page TasksKanban
```

## 2.Basic Configuration

The package provide a quick and easy way to set up a kanban board in your Filament admin panel.
It assumes that you have `title` and `description` fields in your kanban card.
Initially it provides basic card design and functionality. Which include `title` and `description` fields.

You can change these fields using `->titleField()` and `->descriptionField()` methods.

**Important:** You must extend `KanbanPage` and provide the model and status field.

**Note:** Don't set a `$view` property - `KanbanPage` has its own view built-in.

```php
<?php

namespace App\Filament\Pages;

use App\Models\Task;
use Asmit\AdvancedKanban\Columns\KanbanColumn;
use Asmit\AdvancedKanban\Pages\KanbanPage;
use Asmit\AdvancedKanban\Kanban;

class TasksKanban extends KanbanPage  // ← Must extend KanbanPage
{
    // Other properties like $navigationIcon, $navigationGroup, etc.

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)           // ← Pass your model
            ->statusField('status')        // ← Pass the status field
            ->columns([
                KanbanColumn::make('To Do'), // ← Pass required column
                KanbanColumn::make('In Progress'),
            ])
            ->searchableFields(['title', 'description'])
            ->recordsPerColumn(10);
    }
}
```

## 3. That's It!

Your kanban board is ready! The page will automatically appear in your Filament navigation and display your tasks organized by status columns.

**Key Requirements:**
- ✅ Extend `KanbanPage`
- ✅ Pass `->model(YourModel::class)`
- ✅ Pass `->statusField('your_status_field')`
- ✅ Don't set `$view` - KanbanPage has its own view
