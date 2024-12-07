<?php

namespace App\Filament\Resources\PlaytimeResource\Pages;

use App\Filament\Resources\PlaytimeResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPlaytime extends EditRecord
{
    protected static string $resource = PlaytimeResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\ForceDeleteAction::make(),
            Actions\RestoreAction::make(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
