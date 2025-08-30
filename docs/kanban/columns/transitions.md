# Transition
One of the powerful features of Advanced Kanban is the ability to define allowed transitions between columns.\
This ensures that records can only move to specific columns based on your workflow requirements.\
To define allowed transitions, use the `->allowedTransitions()` method and pass an array of column keys that the current column can transition to.

```php
KnabanColumn::make('to_do')
    ->label('To Do')
    ->allowedTransitions(['in_progress']), // Can only move to 'In Progress'

KnabanColumn::make('in_progress')
    ->label('In Progress')
    ->allowedTransitions(['to_do', 'completed']), // Can move back to 'To Do' or forward to 'Completed'

KnabanColumn::make('completed')
    ->label('Completed')
    ->allowedTransitions(null), // No transitions allowed from 'Completed'
```