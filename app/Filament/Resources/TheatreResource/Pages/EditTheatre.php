<?php

namespace App\Filament\Resources\TheatreResource\Pages;

use App\Filament\Resources\TheatreResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditTheatre extends EditRecord
{
    protected static string $resource = TheatreResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\ForceDeleteAction::make(),
            Actions\RestoreAction::make(),
        ];
    }
}
