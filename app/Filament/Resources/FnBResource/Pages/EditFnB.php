<?php

namespace App\Filament\Resources\FnBResource\Pages;

use App\Filament\Resources\FnBResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFnB extends EditRecord
{
    protected static string $resource = FnBResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
