<?php

namespace App\Filament\Resources\FilmsResource\Pages;

use App\Filament\Resources\FilmsResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditFilms extends EditRecord
{
    protected static string $resource = FilmsResource::class;

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
