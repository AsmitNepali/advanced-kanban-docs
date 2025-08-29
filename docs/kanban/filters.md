# Filters
Advanced Kanban does not provide built-in filters like other Filament resources.
However, you can implement custom filtering logic in your kanban page.
To add filters for kanban
1. You have to make filter form schema using `->filterFormSchema()` method.
2. You have to apply the filters to the kanban query using `->applyFiltersUsing()` method.
Here's an example of how to add filters to your kanban page:
```php
<?php
    use Filament\Forms\Components\Select;
    use Illuminate\Contracts\Database\Eloquent\Builder;

    public function kanban(Kanban $kanban): Kanban
    {
        return $kanban
            ->model(Task::class)
            ->statusField('status')
            ->searchableFields(['title', 'description'])
            ->applySearchUsing(function(Builder $query, string $search) {
                return $query->where('title', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            })
            ->filterFormSchema([
                Select::make('status')
                    ->options(Task::pluck('status', 'status'))
            ])
            ->applyFiltersUsing(function(Builder $query, array $data) {
                return $query->where('status', $data['status']);
            })
```
Here you can get the filter values from the `$data` array in the `applyFiltersUsing` method and apply them to the kanban query.