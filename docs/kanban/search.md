# Search
Advanced kanban by default provide simple search functionality.
You can enable it by using `->searchableFields()` method in your kanban page 
and passing the fields you want to search in.
By default it support `like` operator for searching.
You can pass second level relations using dot `.` notation.

```php
    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            ->searchableFields(['title','assignedTo.name']) // <-- Add searchable fields here;
             ->columns([
                // Your columns here
             ]);
    }
```

## Customizing Search Behavior
You can customize the search behavior by overriding the `applySearch` method in your kanban page
```php
<?php
    use Illuminate\Database\Eloquent\Builder;
    
    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            ->applySearchUsing(function(Builder $query, string $search) {
                return $query->where('title', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            })
             ->columns([
                // Your columns here
             ]);
    }
```
